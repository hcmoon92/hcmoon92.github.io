# Appendix | CD w/ ArgoCD

---

> **⚠️ NOTE:** *Click **`cmd/ctrl`** + **`option/alt`** + **`T`** to expand all toggles*
> 

## 1. Setup Linux VM on Lightsail

- AWS Lightsail을 활용하여 월 정액 클라우드 서비스에 ArgoCD 배포
- 설치가 간편한 k3s를 사용해 ArgoCD를 k3s 위에 구축
- NodePort를 통해 ArgoCD를 외부에서 접근 가능하도록 구성

### 1-1. AWS Lightsail

- AWS에서 제공하는 저렴한 월정액 방식의 클라우드 서비스
- 공용 IPv4 주소를 제공하는 Virtual Server는 아래와 같은 요금제 운용
    
    ![*ref.* [https://aws.amazon.com/lightsail/pricing](https://aws.amazon.com/lightsail/pricing/)](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/d11e4418-61a8-4019-a836-a448ebf211da/image.png)
    
    *ref.* [https://aws.amazon.com/lightsail/pricing](https://aws.amazon.com/lightsail/pricing/)
    
    > ⚠️ **NOTE:** *월정액 요금에 데이터 전송도 포함. 구간을 넘어가면 비용 발생*
    > 

### 1-2. Sign In into AWS

- https://aws.amazon.com/ko 접속. “*콘솔에 로그인*” 클릭. 이후 로그인 화면이 나타남
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/4e564ae2-4087-46b0-b7eb-901137e07e9e/image.png)
    
- 아래 표와 같이, `IAM` user와 `Root` user가 존재. 각각 로그인 방식이 다름
    
    
    | 항목 | IAM User | Root User |
    | --- | --- | --- |
    | **목적** | 역할별 권한 부여 | 초기 설정 |
    | **권한** | 최소 필요 권한 | 전체 관리 |
- 아래는 `IAM` user와 `Root` user의 로그인 화면. 회사계정은 보통 `IAM` user
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/ef44841a-574a-4c7b-88b6-679be87e5c7d/image.png)
    
- 로그인 시, 아래와 같은 화면 출력
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/07f56152-b78a-408d-b3a9-c06f321f2554/image.png)
    

### 1-3. Prepare Linux VM

- `lightsail` 을 검색, `Services` 에 나타난 `Lightsail` 서비스를 클릭
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/d3d573dc-881a-4617-9b99-7da607977839/image.png)
    
- 초기 설정시 아래와 같은 화면이 나타남. `Skip for now` 를 클릭
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/90c40f09-1983-41ab-8ef1-2129e62cf82b/image.png)
    
- 아래 그림과 같이, `Instances` → `Create instance` 클릭
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/ae7640da-1428-43e8-a6f5-374fe22aef27/image.png)
    
- 아래 그림과 같이, `Seoul` → `Linux/Unix` → `Operating System (OS) only` → `Ubuntu` 순서로 선택
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/c003ff5a-90f2-48b0-84a4-8260d50feab1/image.png)
    
- 아래 그림과 같이, `Dual-stack` → `$12` 선택 후, 서버 이름 입력
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/e5e32749-72fe-4c6b-84c5-82a527970600/image.png)
    
    > ⚠️ **NOTE:** *$12 plan은 사양이 충분하지 않음. Nginx와 같이, 매우 간단한 예시만 처리 가능한 수준. 개발용은 최소 4 vCPU 사용 권장. Hetzner Cloud에서는 약 월 3만원에 사용 가능. Oracle Cloud는 4 oCPU / 24G Ram 기본 무료제공*
    > 
- 아래 그림과 같이, `Create instance` 버튼을 클릭하여 VM (Virtual Machine) 생성
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/190d3977-9d85-44ee-a14a-803ff2e2f75a/image.png)
    
- 생성 후, 아래 그림과 같은 VM 생성
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/789d7925-8f64-41ec-9294-2a127bcaeb3f/image.png)
    

### 1-4. Setup Public Static IP

- AWS에서 VM은 재부팅시 마다 IP가 변동. 고정 IP 부여 필요
- 아래 그림과 같이, `Networking` → `Create static IP` 선택
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/8c8648b8-8b55-4318-a77e-c7b28a4e6553/image.png)
    
- 아래 그림과 같이, `Seoul` region 선택. IP 이름 입력 후, `Create` 버튼 클릭
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/1cfd21a6-69ff-4bf9-b8c5-45859905e4d0/image.png)
    
- 이후, 아래 그림과 같이 Static IP 생성
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/652cd607-0c9d-40dd-b13f-75f3b1a3d67c/image.png)
    
- 생성된 고정 IP는 VM과 연결 필요. 아래 그림과 같이 클릭하여, VM 설정으로 이동
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/6eb9a755-2320-4f42-9278-2e6106c851e6/image.png)
    
- `Instances` → `⋮` → `Manage` 순서대로 클릭하여, 설정화면으로 진입
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/9ea0e6e1-5d1c-4d10-9dd9-239cd8a0c29b/image.png)
    
- 아래 그림과 같이 설정화면 진입 후, `Networking` → `Attach static IP` 클릭
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/a4dee302-212c-4b03-9c55-9ea87ac59039/image.png)
    
- 생성한 static IP를 선택하고 `Attach` 클릭하여 VM에 할당. 아래그림 참조
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/0f43b06d-32bd-4c5e-b5e5-d0c05c31b376/image.png)
    
- Static IP 할당 후, `Continue` 버튼을 클릭하여 설정화면으로 빠져 나옴. 아래 그림 참고
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/745ba32a-3fdf-45b2-9a00-e73b75030192/image.png)
    
- 아래 그림과 같이, 설정화면에서 VM에 static IP가 할당된 것을 확인 가능
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/83049b05-0d8a-4e55-9cf6-cdfe70c271db/image.png)
    

### 1-5. Console of the Linux VM

- 메인화면의 `Instances` 섹션 이동 후, 생성한 VM의 console에 접속. 아래 그림 참조
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/9f4db2ac-8757-4afa-837c-5ccd2b670d85/image.png)
    
- Console 접속 시, 아래와 같은 화면이 나타남. 해당 화면에서 CLI로 명령어 입력
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/458dc259-91c4-4c6a-9e8e-ee82de405fe6/image.png)
    

### 1-6. Firewall of the Linux VM

Firewall은 VM의 네트워크 보안을 강화하는 도구로, 다음과 같은 기능을 제공:

- 승인된 트래픽만 허용하여 VM 보호
- 인바운드/아웃바운드 트래픽 규칙 설정
- 특정 IP, 포트, 프로토콜 접근 관리
- Firewall 설정을 위해서는 VM 설정으로 이동 필요. 아래 그림을 참고하여 설정으로 이동
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/6eb9a755-2320-4f42-9278-2e6106c851e6/image.png)
    
- `Instances` → `⋮` → `Manage` 순서대로 클릭하여, 설정화면으로 진입
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/9ea0e6e1-5d1c-4d10-9dd9-239cd8a0c29b/image.png)
    
- 이후, `Networking` 탭으로 이동하여, `+ Add rule` 버튼을 클릭하여 네트워크 제어
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/71c27685-399a-4a85-bb74-a4ab1cf59a71/image.png)
    
- 아래그림과 같이, 다양한 트래픽 규칙을 설정하여 네트워크를 보호
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/ce92a11f-6827-489c-b558-423a031b7963/image.png)
    

---

## 2. Setup ArgoCD on k3s

- ArgoCD는 Kubernetes 위에서 배포
- k3s는 경량화된 Kubernetes로, 쉽게 설치가 가능

### 2-1. Console of the Linux VM in Lightsail

- 메인화면의 `Instances` 섹션 이동 후, 생성한 VM의 console에 접속. 아래 그림 참조
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/9cc63466-ca0e-46d4-9662-516631cd8774/image.png)
    
- Console 접속 시, 아래와 같은 화면이 나타남. 해당 화면에서 CLI로 명령어 입력
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/791fc0ea-177c-4e37-8bd9-d996bc9890c6/24a21fab-4e60-42c0-9a89-a81b118c8a6c.png)
    

### 2-2. Install K3s

- Linux VM의 console 화면 진입
- https://docs.k3s.io/kr/quick-start를 참고. 아래 명령어를 이용하여 설치
    
    ```bash
    curl -sfL https://get.k3s.io | sh -
    ```
    
- 위 명령어는 아래 사항을 수행
    - K3s 서비스 자동 재시작 기능 구성
    - 필수 유틸리티 설치 (`kubectl`, `crictl` 등)
    - `/etc/rancher/k3s/k3s.yaml`에 `kubeconfig` 파일 생성 및 자동 사용
- 아래는 console에 k3s 설치 명령어를 입력한 화면
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/198ec1ee-bd1a-4652-a36f-a44dcd2802b1/image.png)
    
- `k3s --help` 명령어로 사용법 확인 가능. 자세한 내용은 https://docs.k3s.io/kr/cli 참고
    
    ```bash
    **ubuntu@ip-172-26-3-43:~$ k3s --help**
    NAME:
       k3s - Kubernetes, but small and simple
    
    USAGE:
       k3s [global options] command [command options] [arguments...]
    
    VERSION:
       v1.30.4+k3s1 (98262b5d)
    
    COMMANDS:
       server           Run management server
       agent            Run node agent
       kubectl          Run kubectl
       crictl           Run crictl
       ctr              Run ctr
       check-config     Run config check
       token            Manage bootstrap tokens
       etcd-snapshot    
       secrets-encrypt  Control secrets encryption and keys rotation
       certificate      Manage K3s certificates
       completion       Install shell completion script
       help, h          Shows a list of commands or help for one command
    
    GLOBAL OPTIONS:
       --debug                     (logging) Turn on debug logs [$K3S_DEBUG]
       --data-dir value, -d value  (data) Folder to hold state default /var/lib/rancher/k3s or 
    ${HOME}/.rancher/k3s if not root [$K3S_DATA_DIR]
       --help, -h                  show help
       --version, -v               print the version
    ```
    
- `systemctl status k3s` 명령어로 k3s service의 상태 확인 가능. 정상 동작시, `activce (running)` 상태. 아래그림 참조
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/17d91ab1-ea0b-44ba-aafd-8ce2b612d242/image.png)
    

### 2-3. Install ArgoCD on K3s

- k3s가 설치된 Linux VM의 console 화면으로 진입
- https://argo-cd.readthedocs.io/en/stable/getting_started/ 참고하여 설치. 아래는 설치 명령어. `sudo k3s` 를 앞에 붙여야 함
    
    ```bash
    sudo k3s kubectl create namespace argocd
    sudo k3s kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
    ```
    
    > **⚠️ NOTE:** *고가용성이 확보된 설치 버전이 아님. Production에서는 별도 버전 설치 권장*
    > 
- 아래는 ArgoCD 설치 명령어를 console에서 수행한 화면. 설치 후, 상세내역이 console에 출력
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/81970a9f-bfe6-4d4b-8a3f-21419bc03f8d/image.png)
    
- `sudo k3s kubectl get po -n argocd` 명령어로 실행중인 ArgoCD 확인가능. 아래그림 참조
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/14ccdbaa-0e22-4894-955c-6d99632d275c/image.png)
    

### 2-4. ArgoCD Admin Account

- 기본적으로 `admin` 계정을 무작위 비밀번호와 함께 제공
- k3s와 ArgoCD가 설치된 Linux VM의 console 화면으로 진입
- `admin` 계정의 초기 비밀번호 확인. 아래 명령어 수행시, 그림처럼 초기 비밀번호 출력
    
    ```bash
    sudo k3s kubectl get secret argocd-initial-admin-secret \
      -n argocd \
      -o jsonpath="{.data.password}" | base64 --decode; echo
    ```
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/10d9717a-0705-4640-a79f-31e8f32d3f20/image.png)
    
- 출력된 비밀번호는 ArgoCD GUI (`2-5`), ArgoCD CLI (`4-5`) 에서 로그인시 사용

### 2-5. Expose the ArgoCD on Internet (Using NodePort)

- k3s와 ArgoCD가 설치된 Linux VM의 console 화면으로 진입
- `sudo k3s kubectl get svc -n argocd` 명령어로 접속 가능한 service 확인가능. `argocd-server` 에 접속 필요
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/b23f2e56-b888-4494-bc92-7eb29bcb2899/image.png)
    
- `NodePort` 로 ArgoCD를 접속 할 수 있게 설정. 고정 IP와 포트번호로 외부에서 접근 가능
- 아래 명령어를 실행하여, `argocd-server`에 `NodePort` 설정. 예시는 `32080` port로 설정
    
    ```bash
    sudo k3s kubectl patch svc argocd-server -n argocd -p '{
      "spec": {
        "type": "NodePort",
        "ports": [
          {
            "name": "http",
            "port": 80,
            "targetPort": 8080,
            "nodePort": 32080,
            "protocol": "TCP"
          },
          {
            "name": "https",
            "port": 443,
            "targetPort": 8080,
            "nodePort": 32443,
            "protocol": "TCP"
          }
        ]
      }
    }'
    ```
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/0ea6eecb-1135-4a4d-bb65-ffe318140c4c/b92bf4c2-4327-4880-8924-03b32b3cdfc4.png)
    
    > **⚠️ NOTE:** *일반적으론 ingress를 이용. domain으로 외부에서 접근가능하도록 노출. NodePort는 host 재부팅시마다 변동되곤 함*
    > 
- 아래 명령어를 실행하여 `NodePort` 설정 확인 가능
    
    ```bash
    sudo k3s kubectl get svc -n argocd
    ```
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/83ffeb36-cdc6-4cfc-a1b0-9e483b5b31cc/78023450-8ed8-420c-9e66-a6bd94535932.png)
    
- 해당 `NodePort` 를 외부에서 접근 할수 있도록 `32080` port를 방화벽에서 해제. 아래그림 참고
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/cfc6284e-9f31-4b82-b33d-5e5cb0003d55/image.png)
    
    > **NOTE:** *이로써 ArgoCD가 웹을 통해 접근 가능. 웹 브라우저를 통해 ArgoCD 서비스에 접속 가능*
    > 
- `http://고정IP:NodePort` 를 웹브라우저에 입력. 이후, `admin` 과 초기 비밀번호를 입력하여 ArgoCD 접속. 아래 그림 참조
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/65fd4d72-706d-415f-9524-a55342cc659f/image.png)
    
    > **⚠️ NOTE:** `*admin` 계정의 **초기 비밀번호는 ArgoCD가 설치된 Linux VM에서 확인 가능**. 아래 명령어 수행시, 초기 비밀번호 출력. `2-4` 참고*
    > 
    > 
    > ```bash
    > sudo k3s kubectl get secret argocd-initial-admin-secret \
    >   -n argocd \
    >   -o jsonpath="{.data.password}" | base64 --decode; echo
    > ```
    > 
- 로그인 이후, 아래와 같은 화면이 나타남. 이제 웹브라우저에서 ArgoCD를 GUI로 관리 할 수 있음
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/1c1cf2db-a776-442a-bc7e-dd75d02e43d1/image.png)
    

---

## 3. Github (Source) ↔ ArgoCD

- ArgoCD의 Source는 애플리케이션 정의를 저장하는 원격 저장소
- GitHub ↔ ArgoCD가 SSH로 통신할 수 있도록 설정하여 연동
- Git 저장소의 특정 경로를 Source로 사용하여 Application 배포

### 3-1. ArgoCD Source

- ArgoCD의 Source는 애플리케이션 정의를 저장하는 원격 저장소
- 주로 Git 저장소를 활용하며, Helm이나 S3 등도 Source로 사용
- Source에는 주로 Kubernetes 리소스를 정의하는 manifest 파일들이 저장
- ArgoCD는 Source의 변경사항을 주기적으로 감지하고 동기화
- 실제 클러스터의 상태와 Source에 정의된 상태를 비교하여 차이가 있으면 자동으로 조정

### 3-2. Creating SSH Key Pair for Integration

- GitHub은 git 저장소에 접근할 때 보안 인증을 요구. 이를 SSH로 해결
- 아래그림과 같이, ArgoCD에서 SSH를 이용하여 git repository 연결. 이때 SSH key pair가 사용
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/37a6cab6-9bc1-44d7-87e6-6d1801039e85/image.png)
    
- https://docs.github.com/ko/authentication/connecting-to-github-with-ssh 접속하여, `새 SSH 키 생성 및 ssh-agent에 추가` 클릭
    
    ![*ref. https://docs.github.com/ko/authentication/connecting-to-github-with-ssh*](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/697b4ff3-301a-427c-bad9-3069aa21ee98/image.png)
    
    *ref. https://docs.github.com/ko/authentication/connecting-to-github-with-ssh*
    
- 해당 Github 가이드라인을 따라, 아래의 명령어로 SSH 키 생성. `~/.ssh` 폴더에 key pair 생성
    
    ```bash
    ssh-keygen -t ed25519 -C "<MyGithubAccount@Email.com>" -f ~/.ssh/id_ed25519
    ```
    
    > ⚠️ **NOTE:** *SSH key pair 생성은 Linux VM에서도 가능*
    > 
- Console에서 위 명령어 실행시, 아래와 같은 화면 출력
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/4988f749-9451-4cca-8b01-03c2e97f4168/image.png)
    
- `~/.ssh` 폴더 아래에는 아래와 같이 두개의 파일 생성
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/995746cf-915c-4675-9180-eb91eb66ed0d/image.png)
    
- 각 파일은 아래와 같이, `cat` 명령어로 확인 가능
    - Public Key
        
        ```bash
        cat ~/.ssh/id_ed25519.pub
        >>> ssh-ed25519 AAAAC3Nzxx...szGfw4aMdqV//zQ xxxxxxxxx@gmail.com
        ```
        
    - Private Key
        
        ```bash
        cat ~/.ssh/id_ed25519
        >>> -----BEGIN OPENSSH PRIVATE KEY-----
        b3BlbnNzaC1rZXkxxxx...
        ...
        zWfdbnw...==
        -----END OPENSSH PRIVATE KEY-----
        ```
        

### 3-3. Adding SSH Public Key to GitHub

- GitHub에는 SSH key pair 에서, public key만 등록 필요
- `3-2`를 통한 Public key는 `~/.ssh/id_ed25519.pub` 에 위치
- `~/.ssh/id_ed25519.pub`의 값은 아래와 같이 `cat` 명령어로 확인 가능
    
    ```bash
    cat ~/.ssh/id_ed25519.pub
    >>> ssh-ed25519 AAAAC3Nzxx...szGfw4aMdqV//zQ xxxxxxxxx@gmail.com
    ```
    
- GitHub 우측 상단의 프로필 아이콘 클릭, `Settings` 선택. 아래그림 참조
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/aba681cb-e4cf-4bca-9881-cd9f3e64f643/image.png)
    
- `SSH and GPG Keys` → `New SSH Key` 클릭. 아래 그림 참조
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/1ee98e33-14bb-485a-9ecd-873eafe599a6/image.png)
    
- 아래 그림과 같이, SSH public key 등록
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/183f61c7-ca12-49f3-8984-07fad16ce17c/image.png)
    

### 3-4. Connecting GitHub Repository to ArgoCD

- ArgoCD에 연동할 Github 저장소로 이동. 아래 그림을 참고하여 git repository 주소 복사
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/8f54a27f-dfc0-44e6-a99c-1531d689239b/image.png)
    
    > **⚠️ NOTE:** *위 예시에서는 `git@github.com:GithubAccount/practice_devops.git` 주소. 이는 아래에서 ArgoCD와 연동시 사용*
    > 
- ArgoCD에 접속. `Settings` → `Repositories` 순으로 클릭. 아래 그림 참조
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/b703780c-e8a0-466d-a35f-bb8ca22d6a02/image.png)
    
- 아래 그림을 참고하여, `CONNECT REPO` 클릭
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/912fadb7-28a7-4c7a-9b81-1e4717c4c79e/image.png)
    
- 아래그림을 참고하여 연결설정. `4` 번에는 github의 저장소 주소 사용. `5` 번은 SSH private key 사용
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/39e2d3c9-8cff-4d03-8a16-c73d4ff6fee5/6fc690ea-a737-4c3f-b394-87d9fcf48766.png)
    
    > **⚠️ NOTE:** `*5` 번에는 SSH private key가 필요. 아래 명령어 참고. Github에 저장된 SSH public key와 pair인 private key 등록 필요*
    > 
    > 
    > ```bash
    > cat ~/.ssh/id_ed25519
    > >>> -----BEGIN OPENSSH PRIVATE KEY-----
    > b3BlbnNzaC1rZXkxxxx...
    > ...
    > zWfdbnw...==
    > -----END OPENSSH PRIVATE KEY-----
    > ```
    > 
- 등록 성공시, 아래와 같은 화면이 나타남
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/bc1196ef-afca-4206-b055-36a0b52647c0/image.png)
    

### 3-5. Simple Nginx Deployment

- ArgoCD가 설치된 Kubernetes에도 ArgoCD를 이용해서 application 배포 가능
- 아래는 여러 Kubernetes resource가 정의된 manifest. Nginx 배포에 필요한 요소들이 정의
    
    ```yaml
    apiVersion: v1
    kind: Namespace
    metadata:
      name: nginx-cd
    ---
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: nginx-deployment
      namespace: nginx-cd
      labels:
        app: nginx
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: nginx
      template:
        metadata:
          labels:
            app: nginx
        spec:
          **containers:
            - name: nginx
              image: nginx:latest
              ports:
                - containerPort: 80**
    ---
    apiVersion: v1
    kind: Service
    metadata:
      name: nginx-service
      namespace: nginx-cd
    spec:
      type: NodePort
      selector:
        app: nginx
      ports:
        - protocol: TCP
          port: 80
          targetPort: 80
          nodePort: 30080
    ```
    
    > **⚠️ NOTE:** `*containers` 에서 `image` 의 주소는 기본적으로 DockerHub에서 가져옴. Private container registry 사용시, 주소의 양식이 다름*
    > 
- 아래의 링크에서 관련내용 확인 가능
    - https://github.com/seungbaeji/practice_devops/tree/main/cd/simple-nginx
        
        [practice_devops/cd/simple-nginx at main · seungbaeji/practice_devops](https://github.com/seungbaeji/practice_devops/tree/main/cd/simple-nginx)
        
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/a8f3b3bf-5cef-422a-9341-02383d269fb9/de3895bf-6a17-48ce-882a-01296d85a160.png)
    

### 3-6. Create a Simple Application

- ArgoCD에 로그인 후, `Applications` → `NEW APP` 순서로 클릭. 아래 그림 참조
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/5317101f-3702-4dd3-ba6c-661700eb8f5c/image.png)
    
- Application 설정화면은 크게 general, source, destination 세 가지로 구분. 아래그림 참조
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/e773169b-f91c-4b71-99bd-bd603930612d/image.png)
    
- 아래는 general 설정 화면. `Application Name`은 고유해야 하며, `Sync` 정책을 설정 가능
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/4436be1d-2e51-4aaf-9582-fdd4899f9a5f/f934bde3-de06-4874-950a-e8d0a0e24d87.png)
    
    > **⚠️ NOTE:** *Project는 추가 설정 가능. default project는 모든 권한을 보유*
    > 
- 아래는 source 설정 화면. 앞서 연결한 git repo 선택 후, `Path`는 Kubernetes manifest가 저장된 폴더의 경로 입력
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/db91f666-9295-4485-8803-9d838a086efa/77e1a1a6-78bd-4c5e-bdbe-0958ebd02fb8.png)
    
- 아래는 destination 설정 화면. 현재는 ArgoCD가 설치된 kubernetes만 존재하며, 해당 cluster만 선택 가능. `Namespace` 는 Kubernetes manifest에서 정의한 namespace 이름 입력
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/5426a081-9e2d-46bd-8a36-c4d1eafc539c/image.png)
    
    > **⚠️ NOTE:** *Namespace가 존재하지 않으면 application 배포가 되지 않음. 보통 Kubernetes에는 default namespace가 기본으로 존재*
    > 
- 모든 값 입력 후, 아래와 같이 general 설정 위에 위치한 `CREATE` 버튼 클릭
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/1905326e-61a5-4f55-8826-c9d5821b7f22/image.png)
    
- 생성 완료 후, 아래와 같이 ArgoCD Application이 생성되며, 자동으로 sync 시작
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/6976881b-c8e9-4b32-a404-0872c916b617/image.png)
    
- 해당 Application 클릭시, 아래와 같이 배포된 Kubernetes manifest 확인 가능
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/e4748408-cf43-4c53-b509-f613f3ec14d3/image.png)
    
- 이후, `DETAILS` → `MANIFEST` 순서로 클릭시, 배포된 ArgoCD Application 확인가능
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/afea7357-18c5-43ce-b96c-e454ea240eb5/9c9c2b16-2ec4-4209-ad8e-bbcc55ec5dfd.png)
    

### 3-7. Expose the Created Simple Application

- 아래 그림을 참고하여 Lightsail에서 생성한 VM의 설정화면으로 이동
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/6eb9a755-2320-4f42-9278-2e6106c851e6/image.png)
    
- `Instances` → `⋮` → `Manage` 순서대로 클릭하여, 설정화면으로 진입
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/9ea0e6e1-5d1c-4d10-9dd9-239cd8a0c29b/image.png)
    
- 이후, `Networking` 클릭하여 `3-5`에 등록된 `NodePort` 를 Firewall에 등록. 아래그림 참조
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/80b72471-839c-40ab-b808-d21874a7beed/image.png)
    
    > **⚠️ NOTE:** *예시에서는 `30080` port를 nginx 노출에 사용*
    > 
- `http://고정IP:NodePort` 를 웹브라우저에 입력. Nginx 동작 확인 가능
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/0483fa00-023f-455d-85c3-fe0c9114f2f9/ceedee2b-46c7-4ea1-a7ad-9c0a70a7d979.png)
    

---

## 4. ArgoCD ↔ Kubernetes Cluster (Destination)

- ArgoCD의 Destination은 애플리케이션이 배포될 Kubernetes 클러스터
- ArgoCD CLI와 kubeconfig 파일을 이용해서 Kubernetes 클러스터를 Destination으로 등록

### 4-1. ArgoCD Destination

- ArgoCD의 Destination은 애플리케이션이 배포될 Kubernetes 클러스터
- ArgoCD CLI에서 kubeconfig 파일을 이용해서 등록가능
- ArgoCD는 Source에 정의된 애플리케이션 상태를 Destination의 클러스터와 지속적으로 동기화

### 4-2. Registered Kubernetes Clusters

- ArgoCD 로그인 후, `Settings` → `Clusters` 클릭. ArgoCD와 연결된 Kubernetes 확인가능
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/76b7a314-bfda-4151-9657-8beb749b4c11/image.png)
    
- 아래 그림과 같이, 초기에는 ArgoCD가 설치된 Kubernetes만 확인 가능
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/84ac0884-7926-410b-8e3d-7e2410d8ac0e/image.png)
    

### 4-3. Create a Kubernets Cluster

- `1-3`~`1-5`, `2-1`~`2-2` 를 참고하여 kubernets cluster 준비
- 아래 그림과 같이, 해당 Linux VM의 `6443` 포트를 firewall 에서 제외
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/68c3eb36-5641-4117-8203-937c137a531e/image.png)
    
    > **⚠️ NOTE:** *ArgoCD가 설치된 Linux VM과 다른 VM의 firewall 설정 화면. 6443 포트는 Kubernetes API Server가 사용하는 port 번호*
    > 
- `6443` 포트를 통해 해당 Kubernetes와 통신가능. 하지만, Kubernetes API 서버와의 통신에는 보안인증 필요
- `kubeconfig` 파일이 보안인증에 사용. 해당 파일은 클러스터 정보, 인증서, 토큰 등 Kubernetes 클러스터에 접근하는데 필요한 모든 정보를 포함

### 4-4. `kubeconfig`

- `4-3` 에서 준비한 서버의 접속. console에서 `sudo k3s kubectl config view --raw` 명령어 실행시, `kubeconfig` 파일 정보 확인가능. 아래는 명령어 실행시 나타나는 console 화면
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/91c081e0-4c5d-4905-b6ab-356616f65d86/image.png)
    
- 명령어 수행시 나타나는 `kubeconfig` 파일의 구조는 아래와 같음. Kubernetes 클러스터 접근을 위한 클러스터 정보, 인증서, 및 인증 토큰을 포함
    
    ```bash
    sudo k3s kubectl config view --raw
    >>> apiVersion: v1
    clusters:
    - cluster:
        **certificate-authority-data**: ...
        **server: https://127.0.0.1:6443**  # Public IP로 변경 필요
      name: default
    contexts:
    - context:
        cluster: default
        user: default
      **name: default**  # ArgoCD CLI를 이용하여 Kubernetes 등록시 사용되는 이름
    current-context: default
    kind: Config
    preferences: {}
    users:
    - name: default
      user:
        **client-certificate-data**: ...
        **client-key-data**: ...
    ```
    
- 아래는 `kubeconfig` 파일내 각 항목에 대한 설명
    
    
    | **Category** | **항목** | **설명** | **상세 설명** |
    | --- | --- | --- | --- |
    | 클러스터 정보 | contexts >
    context | 클러스터와 사용자 간의 매핑 정보 | 특정 클러스터와 사용자 설정을 묶어서 쉽게 전환할 수 있도록 하는 매핑 정보. 컨텍스트를 사용하여 다중 클러스터와 사용자 환경을 관리 |
    | 클러스터 정보 | current-context | 현재 사용 중인 컨텍스트 | 현재 활성화된 클러스터와 사용자 설정을 나타내며, kubeconfig 파일에서 정의된 여러 컨텍스트 중 어느 것을 사용할지를 지정 |
    | 클러스터 정보 | clusters >
    cluster >
    server | Kubernetes 클러스터의 API 서버 URL | Kubernetes 클러스터의 API 서버에 연결하기 위한 URL. 클라이언트는 해당 URL을 통해 클러스터의 리소스에 접근하고 조작가능 |
    | 인증서 | clusters > cluster > 
    certificate-authority-data | 클러스터 인증 기관의 인증서 데이터 | 클러스터의 신뢰할 수 있는 인증 기관(CA)의 인증서. 클라이언트는 클러스터의 서버 인증서를 검증하여 안전한 통신 보장 |
    | 인증서 | users >
    user >
    client-certificate-data | 클라이언트 인증서 데이터 | 클라이언트(사용자)의 신원을 증명하는 인증서. 서버가 클라이언트의 요청을 인증하는 데 사용되며, 클라이언트의 권한을 확인 |
    | 인증토큰 | users >
    user >
    client-key-data | 클라이언트 키 데이터 | 클라이언트의 비밀 키로, 인증서와 함께 클라이언트의 신원증명에 사용. 이 키는 클라이언트의 개인 정보 보호를 위해 암호화된 통신을 설정하는 데 중요 |
- Local 컴퓨터에 해당 내용 저장. `control + c` 로 `kubeconfig` 파일 복사 후, 아래를 참고하여 저장. 아래 예시에서, 저장될 파일 경로는 `~/tmp/mykubeconfig` 로 설정. 파일경로는 변경가능
    
    ```bash
    cat <<EOF > ~/tmp/mykubeconfig
    # 위 문구 입력 후, 붙여넣기 실행 (control + v)
    # 모두 붙여넣기 완료된 후, 아래의 EOF 문구 삽입. 이후 enter 입력
    EOF 
    ```
    
    > ⚠️ NOTE: 다른 방법으로, `~/tmp/mykubeconfig` 경로에 *text 파일을 생성 한 뒤, `kubeconfig` 파일 내용 복사 후 저장*
    > 
- 저장 후, 아래를 참고하여 `server` 부분의 IP를 Linux VM의 public IP로 변경
    
    ```yaml
    apiVersion: v1
    clusters:
    - cluster:
        **certificate-authority-data**: ...
        **server: https://PublicIP:6443**  # **127.0.0.1 -> Public IP**
      name: default
    ```
    
    > ⚠️ **NOTE:** *ArgoCD가 인터넷을 통해 Kubernetes 접근. Kubernetes가 설치된 Linux VM의 Public IP로 설정 되어야, ArgoCD가 Kubernetes를 찾을 수 있음*
    > 
- 수정되어 저장된 `kubeconfig` 파일은 ArgoCD에 Kubernetes 등록시 사용

### 4-5. ArgoCD CLI

- ArgoCD 서버에 접속하여 명령어를 전달하는 도구. GUI로 설정되지 않는 것들을 처리
- 보통 Local PC에서 수행 (ex. 개인 노트북)
- https://argo-cd.readthedocs.io/en/stable/cli_installation/ 링크 참조. ArgoCD CLI 설치
    - MacOS
        
        ```bash
        brew install argocd
        ```
        
    - Windows
        
        ```powershell
        # find a latest ArgoCD CLI version
        $version = (Invoke-RestMethod https://api.github.com/repos/argoproj/argo-cd/releases/latest).tag_name
        
        # Download the ArgoCD CLI
        $url = "https://github.com/argoproj/argo-cd/releases/download/" + $version + "/argocd-windows-amd64.exe"
        $output = "argocd.exe"
        Invoke-WebRequest -Uri $url -OutFile $output
        
        # Add the ArgoCD path variable
        [Environment]::SetEnvironmentVariable("Path", "$env:Path;C:\Path\To\ArgoCD-CLI", "User")
        ```
        
        ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/0e238bc2-edd6-40e8-a7a1-5072dc6744bd/image.png)
        
- CLI 설치 이후, ArgoCD CLI를 이용하여 ArgoCD server로 명령어 전송. 아래는 destination (Kubernetes Cluster)을 ArgoCD에 추가하는 예시
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/2850371e-2542-4f94-a356-d762a208bf51/image.png)
    

### 4-6. Register the Kubernetes Cluster by Using ArgoCD CLI

- Kubernetes Cluster 등록은 GUI가 아닌, ArgoCD CLI를 이용하여 수행가능
- `argocd login <ArgoCDServerIP:Port>` 명령어로 ArgoCD 로그인. 로그인 시, 계정정보 입력 필요. 아래그림 참조
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/a4e4fd5e-fcba-431b-97c8-c1103aced172/image.png)
    
    > **ℹ️ INFO:** `*argocd logout <ArgoCDServerIP:Port>` 명령어로 logout 가능. 아래 참조*
    > 
    > 
    > ```bash
    > argocd logout 43.xxx.xxx.xxx:32080
    > >>> Logged out from 43.xxx.xxx.xxx:32080
    > ```
    > 
- 로그인 성공후, 아래 명령어 실행. `~/tmp/mykubeconfig` 경로는 앞서 저장한 `kubeconfig` 파일경로에 맞게 수정
    
    ```bash
    KUBECONFIG=~/tmp/mykubeconfig argocd cluster add default
    ```
    
    > ℹ️ INFO: `KUBECONFIG` 환경변수는 Kubernetes를 사용하는 많은 CLI들이 `kubeconfig` 파일 경로 확인시 사용. `default` context는 Kubernetes cluster 생성시 초기 기본값
    > 
- Kubernetes cluster 추가 성공시, console에 아래와 같이 화면이 나타남
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/2850371e-2542-4f94-a356-d762a208bf51/image.png)
    
- ArgoCD 로그인 후, `Settings` → `Clusters` 순으로 클릭. 아래 화면과 같이 `default` 클러스터가 추가된 것 확인 가능. 해당 클러스터를 클릭시, 설정 수정 가능
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/b8b0fb5d-961e-42ba-8b90-9b5e868b0661/image.png)
    
- 해당 클러스터를 클릭 후, `EDIT` 버튼 클릭. 아래 그림 참조
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/1e2ce79b-626b-42f7-94fd-9c65ffa3a21b/image.png)
    
- 이후, `NAME` 부분을 알맞게 수정하고 `SAVE` 버튼 클릭. 아래 그림 참조
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/a6d40248-047c-4c55-a1cf-4a5ff21305d7/image.png)
    
- 아래그림과 같이, 수정된 `NAME`으로 Cluster 정보가 수정됨
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/a1fd6088-b83f-4a9b-8f34-2e43fcd02be2/image.png)
    

---

## 5. Create ArgoCD Applications

- ArgoCD는 Application을 생성하여 Kubernetes Application을 배포
- Kubernetes manifest를 직접 사용하거나, Helm 차트를 사용하여 배포

### 5-1. Simple Nginx Application

- `3-6`~`3-7` 에서 배포했던 Nginx를 새롭게 등록한 Kubernetes Cluster에 배포
- ArgoCD 웹페이지 로그인 후, `Applications` → `+ NEW APP` 순으로 클릭. 아래그림 참조
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/6dfd9b43-ed60-41dc-842b-22102ee3c8f6/image.png)
    
- 동일한 Project내에서 수행. `Application Name`을 다르게 설정
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/a28afd5b-b6a4-4f1a-bb12-cd702b6048dd/image.png)
    
- `DESTINATION` 은 새롭게 등록한 Kubernetes Cluster를 대상으로 설정
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/9a72a213-2a43-403a-bd38-dee0511f0591/image.png)
    
- 동일한 application을 다른 Kubernetes Cluster에 배포완료
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/8f07c86e-8c10-48b1-ba2f-5f69dbade028/image.png)
    

### 5-2. Helm Charts

- 아래 명령어를 실행, `my-system` 이라는 namespace 를 사전에 준비
    
    ```bash
    KUBECONFIG=~/tmp/mykubeconfig kubectl create ns my-system
    ```
    
    > ℹ️ INFO: `KUBECONFIG` 환경변수는 Kubernetes를 사용하는 많은 CLI들이 `kubeconfig` 파일 경로 확인시 사용. `kubeconfig` 에는 Kubernetes 클러스터 접근을 위한 클러스터 정보, 인증서, 및 인증 토큰이 명시
    > 
- ArgoCD 웹페이지 로그인 후, `Settings` → `Repositories` 순으로 클릭. 아래그림 참조
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/d2e70c48-ec17-47b2-9d92-aefd024972fc/image.png)
    
- 아래그림과 같이, `+CONNECT REPO` 버튼 클릭
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/9a861b9d-a5c1-448b-8751-f3f612a8bdb5/image.png)
    
- `https://charts.bitnami.com/bitnami` repo를 등록. 아래그림 참조
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/9f5633ce-e044-4889-85c7-efbe7256d388/54ed4fb9-dc0a-4bed-96b5-998720e9b28f.png)
    
- 아래그림과 같이, `bitnami` 의 helm charts repository가 등록완료. 이제부터, Bitnami사의 helm charts 들을 손쉽게 배포 가능
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/9adb492e-4bec-47d8-90eb-962443460f8a/image.png)
    
- Helm Charts를 배포 할 ArgoCD Application 생성필요. `Applications` → `+ NEW APP` 순으로 클릭. 아래그림 참조
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/6dfd9b43-ed60-41dc-842b-22102ee3c8f6/image.png)
    
- PostgreSQL을 배포해 볼 예정. 아래 그림을 참고해서 General 정보 입력
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/06d651ba-ea0b-432d-b736-139b641e8ac2/image.png)
    
- Source는 방금 추가한 Bitnami사의 Helm charts repository로 선택. Chart는 `postgresql` 을 검색하여 선택하고, 최신 버전을 선택. 아래그림 참조
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/d7a9a939-dcb5-4917-a1a7-2e7efd329272/image.png)
    
- Destination은 등록한 Kubernstes cluster를 선택. Namespace는 앞서 만들어 두었던 namespace를 입력
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/d9dfabbb-82f8-47d1-92eb-f549c59ef970/image.png)
    
    > **⚠️ NOTE**: *Kubernetes 클러스터에 존재하지 않는 Namespace 입력시, 배포가 되지 않음*
    > 
- 모두 입력 후, General 위에 위치한 `CREATE` 버튼을 클릭하여 Application 생성
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/c1bcd1fb-667e-4396-a485-1d1a114ddbaa/image.png)
    
- 생성 완료 후, Bitnami 에서 제공하는 PostgreSQL의 helm charts를 이용하여 Application을 Kubernetes에 배포
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/e09dcb96-31b7-4500-90fd-6e4dfd3e08b0/image.png)
    
- 단순한 설정만으로 아래 그림과 같이, 다양한 Kubernetes Application들을 쉽게 배포 가능
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/9c7bae3a-59e0-4cbd-88fa-79fb03655cb7/image.png)
    

---

## 6. Summary (Source ↔ ArgoCD ↔ Destination)

- ArgoCD의 gitops는 Git (Source), ArgoCD, Kubernetes (Destination)으로 구성
- ArgoCD는 Source의 변경사항을 감지하여, 이를 자동으로 Destination에 반영
- Source에는 Kubernetes manifest가 저장되며, Destination은 Kubernetes Cluster

### 6-1. Overview

- 아래 그림은 ArgoCD를 이용한 GitOps의 전반적인 모습. CI 부분은 음영처리
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/3e3fac48-ae62-45b3-b27f-7d40e6c47cd9/image.png)
    
- `Source`는 CI로 빌드된 Container에서 부터 시작. Container를 참조하고 있는 Kubernetes Resource 혹은 Helm Charts가 코드로 존재
- `Destination` 은 Kubernetes cluster. `kubeconfig` 파일을 이용해서 등록

### 6-2. ArgoCD Application

- ArgoCD Application으로 Source ↔ Destination 연동
- ArgoCD 로그인 후, `Applications` 클릭으로 배포된 ArgoCD Application들 확인 가능
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/4c10109f-1df2-4b13-b909-571d66a18295/image.png)
    
- `DETAILS` → `MANIFEST` 순서로 클릭시, 배포된 ArgoCD Application의 manifest 확인가능
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/e75716fc-7bec-4e59-8b70-04b5e00dd620/image.png)
    
- 위 그림과 같이, Application에는 `source`와 `destination` 이 정의되어 있음

### 6-3. Source

- 애플리케이션 정의를 저장하는 원격 저장소
- git, helm 등 배포될 Kubernetes manifest가 코드나 파일로 등록
- `Settings` → `Repositories` 클릭시, 아래그림과 같이 등록된 repository를 확인가능
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/1a6de5db-dad6-4f2d-aa69-57f3b8510c82/image.png)
    
- `Source`는 해당 repository에 등록된 특정 경로 혹은 Chart 파일. 아래에서 차이를 확인가능
    - Git 저장소를 source로 만들어진 ArgoCD Application
        
        ```yaml
        project: default
        **source:
          repoURL: 'git@github.com:xxxxx/practice_devops.git'
          path: cd/simple-nginx
          targetRevision: HEAD**
        destination:
          server: 'https://xxx.xxx.xxx.xxx:6443'
          namespace: my-system
        syncPolicy:
          automated: {}
        ```
        
    - Helm Charts 저장소를 source로 만들어진 ArgoCD Application
        
        ```yaml
        project: default
        **source:
          repoURL: 'https://charts.bitnami.com/bitnami'
          targetRevision: 18.1.14
          chart: nginx**
        destination:
          server: 'https://xxx.xxx.xxx.xxx:6443'
          namespace: my-system
        syncPolicy:
          automated: {}
        ```
        
- 보통, Git 저장소에는 아래와 같은 Kubernetes manifest가 저장
    
    ```yaml
    apiVersion: v1
    kind: Namespace
    metadata:
      name: nginx-cd
    ---
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: nginx-deployment
      namespace: nginx-cd
      labels:
        app: nginx
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: nginx
      template:
        metadata:
          labels:
            app: nginx
        spec:
          containers:
            - name: nginx
              image: nginx:latest
              ports:
                - containerPort: 80
    ---
    apiVersion: v1
    kind: Service
    metadata:
      name: nginx-service
      namespace: nginx-cd
    spec:
      type: NodePort
      selector:
        app: nginx
      ports:
        - protocol: TCP
          port: 80
          targetPort: 80
          nodePort: 30080
    ```
    
- Helm Charts 저장소에는 아래와 같이 charts가 정의되어 저장. 다음 Bitnami Nginx 링크 참조: https://github.com/bitnami/charts/tree/main/bitnami/nginx
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/b25671dd-f573-46be-afab-1481a94f89b2/af01d72d-a41f-4f5f-9f84-674d830b8faa.png)
    

### 6-4. Destination

- 애플리케이션이 배포될 Kubernetes 클러스터
- ArgoCD CLI와 `kubeconfig` 파일을 이용하여 등록
- `Settings` → `Clusteres` 클릭 후, 등록된 Kubernetes Cluster 확인 가능
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/fb6a38de-6c98-441e-b0bc-56cdca9d7480/image.png)
    
- `kubeconfig` 파일은 `kubectl config view --raw` 명령어로 확인 가능
- `kubeconfig` 파일의 구조는 아래와 같으며, 각 항목의 상세설명은 아래의 표 참고
    
    ```yaml
    apiVersion: v1
    clusters:
    - cluster:
        **certificate-authority-data**: ...
        **server: https://127.0.0.1:6443**  # Public IP로 변경 필요
      name: default
    contexts:
    - context:
        cluster: default
        user: default
      **name: default**
    current-context: default
    kind: Config
    preferences: {}
    users:
    - name: default
      user:
        **client-certificate-data**: ...
        **client-key-data**: ...
    ```
    
    | **Category** | **항목** | **설명** | **상세 설명** |
    | --- | --- | --- | --- |
    | 클러스터 정보 | contexts >
    context | 클러스터와 사용자 간의 매핑 정보 | 특정 클러스터와 사용자 설정을 묶어서 쉽게 전환할 수 있도록 하는 매핑 정보. 컨텍스트를 사용하여 다중 클러스터와 사용자 환경을 관리 |
    | 클러스터 정보 | current-context | 현재 사용 중인 컨텍스트 | 현재 활성화된 클러스터와 사용자 설정을 나타내며, kubeconfig 파일에서 정의된 여러 컨텍스트 중 어느 것을 사용할지를 지정 |
    | 클러스터 정보 | clusters >
    cluster >
    server | Kubernetes 클러스터의 API 서버 URL | Kubernetes 클러스터의 API 서버에 연결하기 위한 URL. 클라이언트는 해당 URL을 통해 클러스터의 리소스에 접근하고 조작가능 |
    | 인증서 | clusters > cluster > 
    certificate-authority-data | 클러스터 인증 기관의 인증서 데이터 | 클러스터의 신뢰할 수 있는 인증 기관(CA)의 인증서. 클라이언트는 클러스터의 서버 인증서를 검증하여 안전한 통신 보장 |
    | 인증서 | users >
    user >
    client-certificate-data | 클라이언트 인증서 데이터 | 클라이언트(사용자)의 신원을 증명하는 인증서. 서버가 클라이언트의 요청을 인증하는 데 사용되며, 클라이언트의 권한을 확인 |
    | 인증토큰 | users >
    user >
    client-key-data | 클라이언트 키 데이터 | 클라이언트의 비밀 키로, 인증서와 함께 클라이언트의 신원증명에 사용. 이 키는 클라이언트의 개인 정보 보호를 위해 암호화된 통신을 설정하는 데 중요 |

### 6-5. Further) Continuous Deployment

- ArgoCD는 Source에 등록된 Kubernetes manifest에 변동이 있을 때만 배포 수행. 즉, Kubernetes manifest에 변경사항이 자동 반영되어야 자동 배포가 이뤄짐
- 아래와 같이, CI(Continuous Integration) 과정에서 timestamp와 같은 정보를 Kubernetes Manifest에 기록하여 변경사항을 반영
    
    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: nginx
      namespace: my-nginx
    spec:
      replicas: 1
      template:
        metadata:
          annotations:
            **timestamp: 2024-09-17 15:25:25
            commit: nsd230a4sdx84e99a14268f730cd4d65140e418d46**
        spec:
          containers:
            - name: nginx
              image: nginx:latest
              ports:
                - containerPort: 80
    ```
    
- 위와 같이 `timestamp`, `commit` 정보를 삽입하는 github action workflow 작성 필요

---