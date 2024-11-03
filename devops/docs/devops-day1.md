<!-- .slide: data-background="linear-gradient(to bottom right, white, gray)" -->

# Container
## Docker Playground 가이드

https://labs.play-with-docker.com/ 
Docker Playground에 접속하여 Start 버튼을 클릭. 
만약 로그인 화면이 나타나면 Docker 계정으로 로그인. (참고용 스크린샷 참고)

- 세션 정보
Docker Playground는 4시간 동안 사용 가능한 세션을 제공. 
ADD NEW INSTANCE 버튼을 클릭하여 새 컨테이너 환경을 시작 (참고 이미지 확인).

- 명령어 실행
제공된 명령어를 복사하여 붙여넣기하고 실행합니다. "Hello World!"가 화면에 출력

--

```
cat <<EOF > ~/index.html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World</title>
</head>
<body>
    <h1>Hello World!</h1>
</body>
</html>
EOF

```bash
docker run -d \
	--name python-server \
	-p 8080:8000 \
	-v $(pwd):/usr/src \
	python:3-alpine \
		sh -c "cd /usr/src && python3 -m http.server 8000"

# docker run -d \ # backgound 실행
# 	--name python-server \  # container 이름 설정
# 	-p 8080:8000 \  # host:container port mapping
# 	-v $(pwd):/usr/src \  # container에 volume mount
# 	python:3-alpine \  # 사용할 container image
# 		sh -c "cd /usr/src && python3 -m http.server 8000"
```

--​

- container image downloading


```bash
Unable to find image 'python:3-alpine' locally
3-alpine: Pulling from library/python
43c4264eed91: Pull complete 
99a612635ae6: Pull complete 
ea644e5aaa5c: Pull complete 
ae04b12910c8: Pull complete 
Digest: sha256:c38ead8bcf521573dad837d7ecfdebbc87792202e89953ba8b2b83a9c5a520b6
Status: Downloaded newer image for python:3-alpine
708020d997da88bb3d4ea791fb2694fcebd106453117fc3a6101e6c25aa8c3d5

```

--
- container는 실행중이며, docker ps -a 명령어로 실행중인 container 확인 가능
![](https://seungbae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F346a4049-d7fa-47a1-8def-f004734e3e53%2F62bc087c-631e-483f-91de-60d906670ada%2Fimage.png?table=block&id=126b69ae-f4f3-80be-b3de-e2a0503b6e25&spaceId=346a4049-d7fa-47a1-8def-f004734e3e53&width=1250&userId=&cache=v2)

--
- 8080 포트로 접근 가능한 container 존재. 아래 이미지를 참고하여 접속
![](https://seungbae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F346a4049-d7fa-47a1-8def-f004734e3e53%2F6834de72-9080-4bfc-b556-ccbd5130fec4%2Fimage.png?table=block&id=126b69ae-f4f3-8058-af3e-fc4a31b3203c&spaceId=346a4049-d7fa-47a1-8def-f004734e3e53&width=860&userId=&cache=v2)


아래와 같은 화면이 나타남
![](https://seungbae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F346a4049-d7fa-47a1-8def-f004734e3e53%2F0e36d08c-e475-4918-a45e-ee32e0f3431a%2Fimage.png?table=block&id=128b69ae-f4f3-80d5-9980-c0ca41dd663a&spaceId=346a4049-d7fa-47a1-8def-f004734e3e53&width=960&userId=&cache=v2)

--

1-2. Commands

Command  Description  Example
|---|---|---|
docker pull 이미지 다운로드 docker pull nginx
docker run 컨테이너 생성 및 실행 docker run -d -p 8080:80 --name my-nginx nginx
docker ps 실행 중인 컨테이너 목록 확인 docker ps
docker stop 컨테이너 중지 docker stop my-nginx
docker start 중지된 컨테이너 다시 시작 docker start my-nginx
docker rm 중지된 컨테이너 삭제 docker rm my-nginx
docker rmi 이미지 삭제 docker rmi nginx
docker logs 컨테이너 생성 로그 조회 docker logs nginx

--

아래는 관련 옵션

Command Option Description Example
docker run
-d
컨테이너를 백그라운드에서 실행 (Detached Mode)
docker run -d nginx
-p <hostPort>:<containerPort>
호스트와 컨테이너의 포트를 바인딩
docker run -p 8080:80 nginx
--name <name>
컨테이너 이름을 지정하여 쉽게 관리할 수 있도록 설정
docker run --name my-nginx nginx
-v <hostDir>:<containerDir>
호스트 디렉토리를 컨테이너에 마운트하여 데이터를 공유
docker run -v /host/data:/container/data nginx
-e <ENV_VAR>=<value>
컨테이너 내에서 사용할 환경 변수를 설정
docker run -e MYSQL_ROOT_PASSWORD=my-secret-pw mysql
--rm
컨테이너 종료 시 자동으로 삭제
docker run --rm nginx
docker ps
-a
실행 중이지 않은 컨테이너도 포함하여 모든 컨테이너를 표시
docker ps -a
-q
컨테이너 ID만 출력
docker ps -q
-s
각 컨테이너의 스토리지 크기를 함께 표시
docker ps -s
--filter <조건>
조건에 맞는 컨테이너만 출력 (예: 특정 상태 또는 네트워크 조건)
docker ps --filter "status=exited"
docker exec
-it
상호작용 가능한 터미널을 사용하여 컨테이너 내에서 명령어 실행
docker exec -it my-container /bin/bash
-d
명령어를 백그라운드에서 실행
docker exec -d my-container touch /tmp/newfile
docker logs
-f
실시간 로그 스트리밍 (컨테이너가 실행 중일 때 유용)
docker logs -f my-container
--tail <n>
마지막 n개의 로그 줄만 출력
docker logs --tail 100 my-container
--since <time>
특정 시간 이후의 로그만 출력 (예: --since "2023-10-21T15:00:00")
docker logs --since "2023-10-21T15:00:00" my-container
docker rm
-f
실행 중인 컨테이너를 강제로 중지하고 삭제
docker rm -f my-container
-v
컨테이너와 연결된 볼륨을 함께 삭제
docker rm -v my-container
docker rmi
-f
이미지가 사용 중이더라도 강제로 삭제
docker rmi -f nginx
docker volume
create
새로운 볼륨을 생성
docker volume create my-volume
inspect
볼륨의 상세 정보 출력
docker volume inspect my-volume
ls
모든 볼륨을 나열
docker volume ls
rm
특정 볼륨을 삭제
docker volume rm my-volume
--

1-3. Docker Hub
https://hub.docker.com/ 접속. 아래와 같은 화면이 나타남

필요한 container의 이름으로 검색가능. nginx 검색시 아래 그림과 같이 확인가능


아래 명령어로 nginx container 다운로드. DockerHub에서는 docker pull <ContainerName> 으로 container download 명령어를 표기

```bash
docker pull nginx
```

--

아래 명령어를 실행하여, nginx container를 실행
```bash
docker run -d \
	--name my-nginx \
	-p 8081:80 \
	-v ~/index.html:/usr/share/nginx/html/index.html:ro \
	nginx
```

--

아래화면을 참조하여, 8081 번 port 클릭

![](https://seungbae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F346a4049-d7fa-47a1-8def-f004734e3e53%2F298f3f24-32f1-4be7-963d-66ebb217d31c%2Fimage.png?table=block&id=128b69ae-f4f3-8013-8702-d79c37039d0a&spaceId=346a4049-d7fa-47a1-8def-f004734e3e53&width=1250&userId=&cache=v2)

--
이후, 아래와 같은 화면이 나타남
![](https://seungbae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F346a4049-d7fa-47a1-8def-f004734e3e53%2F276d050f-c3e9-4a2c-b384-cd55046e9725%2Fimage.png?table=block&id=128b69ae-f4f3-8094-85b6-d59b7b399967&spaceId=346a4049-d7fa-47a1-8def-f004734e3e53&width=1150&userId=&cache=v2)

--
1-4. Run a Container
아래는 기타 web application 예제들
```bash
# Note App
docker run -d \
	--name trilium \
	-p 8082:8080 \
	zadam/trilium:latest

# Blog App
docker run -d \
	--name ghost \
	-p 8083:2368 \
	-e NODE_ENV=development \
	-e database__client=sqlite3 \
	ghost
	
# Scientific App
docker run -d \
	--name jupyter \
	-p 8084:8888 \
  -e JUPYTER_TOKEN='' \
	jupyter/minimal-notebook \
		start-notebook.sh --NotebookApp.token='' --NotebookApp.password=''

# CI/CD
docker run -d \
	--name jenkins\
	-p 8085:8080 \
	-p 50000:50000 \
	jenkins/jenkins:lts \
docker exec -it jenkins \
	cat /var/jenkins_home/secrets/initialAdminPassword

# Testing Report
docker run -d \
	--name allure \
	-p 8086:4040 \
	-v $(pwd)/allure-results:/app/allure-results \
	frankescobar/allure-docker-service
	
# QA Tool (Play Ground 에서는 리소스 부족으로 실행안됨)
docker run -d \
	--name sonarqube \
  -p 8087:9000 \
  -e SONARQUBE_JDBC_URL=jdbc:h2:tcp://localhost/sonar \
  -e SONARQUBE_WEB_JVM_OPTS="-Xmx512m -Xms512m" \
  sonarqube:lts

```

--
​
다운받은 container image는 docker rmi 명령어로 삭제가능. 아래 참고

![](https://seungbae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F346a4049-d7fa-47a1-8def-f004734e3e53%2Fdcc5a685-1dd1-4626-9f11-7e5e27bc1fab%2Fimage.png?table=block&id=126b69ae-f4f3-8030-8797-fb746402538c&spaceId=346a4049-d7fa-47a1-8def-f004734e3e53&width=1250&userId=&cache=v2)

--

1-5. Build a Container Image
아래는 container image 생성을 명시하는 Dockerfile 생성 예시

```bash
mkdir -p ~/nginx

cat <<EOF > ~/nginx/index.html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello Nginx</title>
</head>
<body>
    <h1>Hello Container!!!!</h1>
</body>
</html>
EOF

cat <<EOF > ~/nginx/Dockerfile
# Base image
FROM nginx:alpine

# Copy the HTML file to the default Nginx directory
COPY ./index.html /usr/share/nginx/html/index.html

# Expose port 80
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
EOF
```

--​

아래 명령어를 실행하여, container image 생성 

```bash
# contaier image build
docker build -t my-nginx .

# show container images on the host
docker images
>>> REPOSITORY  TAG     IMAGE ID      CREATED        SIZE
    my-nginx    latest  b571596b5471  8 minutes ago  47MB

```

--
​
아래 명령어를 실행하여, 생성한 container image 실행

```bash
docker run -d \
	--name my-nginx \
	-p 8088:80 \
	my-nginx
​
```

--
1-6. Isolation
ip addr 명령어로 host network 조회. 아래 참고

```bash
$ ip addr
>>> 1: lo: ...
2: docker0: ...
144489: eth0@if144490: ...
144493: eth1@if144494: ...
```

--​

아래 명령어로 Isolation을 비교할 Container 실행

```bash
docker run -u 1001 -d --name isolation busybox sleep 1d
​```

ip addr 명령어로 network 비교. 아래 참고
Host에서의 network. 4번 인터페이스 veth8fe9519@if3 가 추가된 것 확인가능. 3번 인터페이스와 페어링 되어 있으며, docker0 과 연결되어 있음

```bash
# Host
$ ip addr
1: lo: ...
2: docker0: ...
4: veth8fe9519@if3: ... master docker0 state UP ...
144489: eth0@if144490: ...
144493: eth1@if144494: ...

```

--

Container에서의 network. 3번 인터페이스가 4번과 페어링 되어 있는것 확인가능

```bash
# Container
$ docker exec isolation /bin/sh -c "ip addr"
>>> 1: lo: ...
3: eth0@if4: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue 
    link/ether 02:42:ac:11:00:02 brd ff:ff:ff:ff:ff:ff
    inet 172.17.0.2/16 brd 172.17.255.255 scope global eth0
       valid_lft forever preferred_lft forever
​
```

ps ax 명령어를 이용한 process 비교
Host에서의 process 목록. root외 1001 user id로 실행시킨 항목을 볼 수 있음

```bash
# Host
$ ps ax -o pid,user,args
>>> PID   USER     COMMAND
    1 root     /bin/sh -c ...
   16 root     dockerd
   17 root     script -q -c /bin/bash -l /dev/null
   19 root     /bin/bash -l
   32 root     sshd: /usr/sbin/sshd ...
   44 root     containerd --config ...
18083 root     /usr/local/bin/containerd-shim-runc-v2 ...
18118 1001     sleep 1d
18355 root     ps ax -o pid,user,args
​
```

--

Container에서의 process 목록. 1001 user id로 실행시킨 항목만 나타나며, PID도 host와 다름

```bash
# Container
$ docker exec isolation /bin/sh -c "ps ax -o pid,user,args"
>>> PID   USER     COMMAND
    1 1001     sleep 1d
    7 1001     ps ax -o pid,user,args
```

--

ls 명령어로 root(/) 파일 시스템 비교. -1 옵션을 주어서 항목에 한줄씩 나열
Host는 certs, docker.log, opt, run, srv와 같은 추가 디렉토리 존재


```bash
# Host에서 루트 디렉토리 확인
$ ls -1 /
>>> bin
certs
dev
docker.log
etc
home
lib
media
mnt
opt
proc
root
run
sbin
srv
sys
tmp
usr
var
```

--
​
Container는 기본적인 운영에 필요한 디렉토리만 포함

```bash
# Container 내부에서 루트 디렉토리 확인
$ docker exec isolation /bin/sh -c "ls -1 /"
>>> bin
dev
etc
home
lib
lib64
proc
root
sys
tmp
usr
var

```

---
2. Kubernetes 
2-1. Kubernetes Play Ground
https://labs.play-with-k8s.com/ 접속. 아래와 같은 화면이 나타남. Start 버튼 클릭

![](https://seungbae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F346a4049-d7fa-47a1-8def-f004734e3e53%2Fc030a4e1-6579-4309-bbfb-9701461bcf50%2Fimage.png?table=block&id=126b69ae-f4f3-80cc-86b4-ee3163dfe825&spaceId=346a4049-d7fa-47a1-8def-f004734e3e53&width=1060&userId=&cache=v2)

--

4시간 동안 사용할 수 있는 세션 제공. ADD NEW INSTANCE 클릭. 아래 이미지 참고

클릭시 아래와 같이 Kubernetes 환경 제공

--

# CentOS Linux release 7.9.2009 (Core) 를 사용하며, 아래 사항들을 사전에 제공
항목   설명
kubeadm Kubernetes 클러스터 초기화 및 설정을 위한 CLI 도구
kubectl Kubernetes 클러스터와 상호작용하고 관리 작업을 수행하기 위한 CLI 도구
crictl 컨테이너 런타임 인터페이스(CRI)와 상호작용하기 위한 도구
ctr containerd의 네이티브 CLI로서 컨테이너 생성, 관리 등을 위한 도구
containerd 쿠버네티스와 호환되는 OCI(오픈 컨테이너 이니셔티브) 기반의 경량 컨테이너 런타임
runc 컨테이너의 생성 및 관리를 위한 저수준 CLI 도구, containerd 및 CRI-O와 함께 사용

--

2-2. kubeadm
Kubernetes 클러스터 초기화 및 설정을 위한 CLI 도구. Kubernetes에서 운영관리
kubeadm init 명령어 실행시 아래 사항들이 진행

단계 (Phase) 설명 관련 코드
Preflight Check 시스템 호환성 점검 및 이미지 다운  NewPreflightPhase()
Certs TLS 인증서 생성으로 구성 요소 간 통신 보안 NewCertsPhase()
KubeConfig 클러스터 접근을 위한 kubeconfig 파일 생성 NewKubeConfigPhase()
Etcd Configuration 클러스터 상태 데이터 저장을 위한 etcd 구성 NewEtcdPhase()
Control Plane Control Plane 필수 구성 요소(Pod) static pod로 배포 관리 NewControlPlanePhase()
Kubelet Start 노드에서 kubelet 시작 및 초기화 NewKubeletStartPhase()
Wait Control Plane 모든 Control Plane 구성 요소 준비 상태 확인으로 안정성 확보 NewWaitControlPlanePhase()
Upload Config 클러스터 설정 ConfigMap으로 업로드 및 공유 NewUploadConfigPhase()
Upload Certificates 고가용성 설정을 위한 Control Plane 인증서 업로드 NewUploadCertsPhase()
Mark Control Plane 현재 노드를 Control Plane 노드로 지정 NewMarkControlPlanePhase()
Bootstrap Token 워커 노드 클러스터 가입을 위한 부트스트랩 토큰 생성 NewBootstrapTokenPhase()
Kubelet Finalize kubelet 설정 완료 및 Control Plane 통합 NewKubeletFinalizePhase()
Addon CoreDNS 및 kube-proxy 설치로 네트워킹 및 서비스 검색 기능 설정 NewAddonPhase()
Show Join Command 워커 노드 추가를 위한 join 명령어 출력 NewShowJoinCommandPhase()
아래는 kubeadm CLI의 옵션들
옵션
설명
--apiserver-advertise-address
API 서버가 클러스터 내부에서 사용할 IP 주소를 지정 (기본: 기본 네트워크 인터페이스의 IP 주소)
--apiserver-bind-port
API 서버의 바인드 포트를 지정 (기본: 6443)
--apiserver-cert-extra-sans
API 서버 인증서에 추가할 Subject Alternative Names (SAN)
--cert-dir
인증서가 저장될 디렉터리 지정 
(기본: /etc/kubernetes/pki)
--config
초기화 설정을 구성한 YAML 파일 경로
--control-plane-endpoint
다중 Control Plane 노드 환경에서 고정 IP 주소나 DNS 이름을 지정
--cri-socket
kubelet이 사용할 CRI 소켓 경로 지정 
(기본: /var/run/dockershim.sock)
--dry-run
실제 설치 없이 설정과 파일만 출력
--feature-gates
특정 기능을 활성화 또는 비활성화 
(예: IPv6DualStack=true)
--ignore-preflight-errors
무시할 사전 검사 에러 지정 
(all로 모든 사전 검사를 무시 가능)
--image-repository
모든 컨테이너 이미지가 위치할 저장소를 설정
--kubernetes-version
설치할 Kubernetes 버전 지정
--node-name
초기화할 노드 이름 설정 (기본: 호스트 이름 사용)
--pod-network-cidr
Pod 네트워크의 CIDR 범위 설정
--service-cidr
서비스 IP 할당을 위한 CIDR 범위 설정 
(기본: 10.96.0.0/12)
--service-dns-domain
클러스터 서비스에 사용할 DNS 도메인 설정 
(기본: cluster.local)
--skip-certificate-key-print
Control Plane 인증서 키를 출력하지 않도록 설정
--skip-phases
특정 초기화 단계(phase)를 생략
--token
워커 노드가 클러스터에 가입할 때 사용할 부트스트랩 토큰
--upload-certs
Control Plane 인증서를 클러스터에 업로드하여 다중 Control Plane 노드 설정을 지원

--

# 2-3. Master Node (aka. Control Plane)
아래 명령어를 실행시켜 master node 초기화

```bash
# Kubernetes 초기화. 마스터 노드가 사용할 IP 주소 & Pod 네트워크 IP 범위 설정
kubeadm init \
    --apiserver-advertise-address $(hostname -i) \
    --pod-network-cidr 10.5.0.0/16 
​
```
--

명령어 실행 후, 아래와 같이 [...] 헤더로 phase가 표기
![](https://seungbae.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F346a4049-d7fa-47a1-8def-f004734e3e53%2F13a97839-ab73-42e5-8daa-b91c8cd25e13%2Fimage.png?table=block&id=12db69ae-f4f3-805f-96bf-f61465df108c&spaceId=346a4049-d7fa-47a1-8def-f004734e3e53&width=1250&userId=&cache=v2)

--
Static pods는 kubelet이 직접 관리하는 pod로, kube-apiserver를 거치지 않음. 아래 명령어로 확인
```bash
$ ls -1 /etc/kubernetes/manifests/ 
etcd.yaml
kube-apiserver.yaml
kube-controller-manager.yaml
kube-scheduler.yaml
```

--​

현재는 master node의 필수 구성요소 네가지만 static pod로 존재
YAML 파일
설명
역할
etcd.yaml
Kubernetes의 상태 데이터를 저장하는 분산 키-값 데이터베이스
클러스터의 영구 스토리지 역할, 컨트롤 플레인 구성 요소와 통신하여 클러스터 데이터를 관리
kube-apiserver.yaml
클러스터 관리 요청의 입구 역할을 하는 Kubernetes API 서버
클러스터 내 모든 통신을 관리하고, kubectl 명령이나 내부 구성 요소의 요청을 처리하여 리소스를 관리
kube-controller-manager.yaml
여러 컨트롤러 집합으로 구성된 리소스 상태 관리자
Deployment, ReplicaSet, Node 관리 등 리소스의 상태를 유지하며 클러스터를 원하는 상태로 유지
kube-scheduler.yaml
새로 생성된 pod을 적절한 노드에 배치하는 역할을 하는 스케줄러
각 pod의 리소스 요구사항과 우선순위를 고려하여 클러스터 내 노드에 pod을 할당
아래 명령어로 CNI 설치
# Kube-router (CNI) 설치, Pod 간 통신을 가능하게 하고 네트워크를 관리
kubectl apply -f https://raw.githubusercontent.com/cloudnativelabs/kube-router/master/daemonset/kubeadm-kuberouter.yaml
​
kubectl get nodes 명령어로 Kubernetes cluster를 구성하는 node 확인. 아래 참조
kubectl get nodes
>>> NAME    STATUS   ROLES           AGE     VERSION
		node1   Ready    control-plane   2m11s   v1.27.2
​
kubeconfig 파일은 Kubernetes 클러스터의 접속 위치와 계정 정보가 설정된 파일. 해당 파일을 통해 kubectl은 어떤 클러스터에 어떤 사용자 계정으로 접근할지를 결정
아래 명령어로 kubeconfig 파일 조회
cat /etc/kubernetes/admin.conf
>>> apiVersion: v1
clusters:
- cluster:
    certificate-authority-data: ...
    server: https://192.168.0.18:6443
  name: kubernetes
contexts:
- context:
    cluster: kubernetes
    user: kubernetes-admin
  name: kubernetes-admin@kubernetes
current-context: kubernetes-admin@kubernetes
kind: Config
preferences: {}
users:
- name: kubernetes-admin
  user:
    client-certificate-data: ...
    client-key-data: ...
​
아래는 kubeconfig 파일내 필드 정보 설명. Context 는 클러스터 정보와 계정정보의 조합
구성 요소
필드
설명
Cluster 정보
server
클러스터 API 서버의 URL, kubectl은 해당주소로 클러스터와 통신
certificate-authority-data
클러스터의 신뢰성을 확인하기 위한 인증서 데이터
name
클러스터의 이름. context에서 참조
User 정보
client-certificate-data
사용자 인증서 데이터. 사용자의 신원 증명
client-key-data
사용자 프라이빗 키 데이터. 인증된 통신을 위해 필요
name
사용자 이름. context에서 참조
Context 정보
cluster
사용자가 연결할 클러스터의 이름
user
사용자가 연결할 계정의 이름
Current Context
current-context
현재 활성화된 context의 이름
아래의 경우에는 kubeconfig 파일 갱신 필요
상황
설명
갱신 이유
SAN 변경
API 서버 인증서의 SAN(Subject Alternative Names) 목록 변경
SAN 목록이 변경되면 API 서버의 인증서가 갱신. kubeconfig에 포함된 certificate-authority-data도 새 인증서로 갱신
서버 주소 변경
클러스터 API 서버의 IP 주소나 도메인이 변경
kubeconfig의 server 필드를 새 API 서버 URL로 갱신. kubectl이 올바른 서버에 API 요청
인증서 또는 키 만료
사용자 인증서나 키가 만료되었거나, 보안상의 이유로 인증서 재발급
만료된 인증서나 키로는 클러스터 접근이 불가. client-certificate-data와 client-key-data를 새로운 값으로 갱신
kubectl은 KUBECONFIG 환경변수에 등록된 kubeconfig 파일을 기본적으로 사용. 아래 명령어로 환경변수 등록
export KUBECONFIG=/etc/kubernetes/admin.conf
​
2-4. Worker Node (aka. Data Plane)
아래 그림을 참고하여, 새로운 instance 생성

node1 instance로 이동하여, kubeadm token create --print-join-command 명령어 실행. worker node로 사용될 node에서 실행 할 명령어가 출력되며, 아래 참고
kubeadm token create --print-join-command
>>> kubeadm join 172.18.0.52:6443 --token bqt9nq.4i644hqfkc9zowtn --discovery-token-ca-cert-hash sha256:7a7bc543c7db20779492df5bb2cce27023223af6e8c859c02a28e547d0ea2bc2 
​
node2 instance로 이동하여, 출력된 명령어 입력. 아래 그림과 같이 출력되며, 이후 master node에서 worker node 조회 가능

node1 으로 이동하여 아래와 같이 명령어 실행. node2 가 cluster에 포함된 것 확인 가능
kubectl get nodes
>>> NAME    STATUS   ROLES           AGE   VERSION
node1   Ready    control-plane   46m   v1.27.2
node2   Ready    <none>          33m   v1.27.2

kubectl get nodes -o wide
​
2-5. kubectl 
kubectl은 Kubernetes 클러스터를 관리하는 CLI 도구
Kubernetes Cluster의 API 서버 (kube-apiserver)와 통신하여 사용자 명령을 처리하고 결과를 반환. 통신시, kubeconfig 파일정보 이용
아래는 기본적인 명령어들
Commands
Desc
Example
kubectl get <TYPE>
default 네임스페이스에서 리소스 조회
kubectl get pods
kubectl get <TYPE> -n <namespace>
특정 네임스페이스에서 리소스 조회
kubectl get pods -n kube-system
kubectl describe <TYPE> <NAME>
default 네임스페이스에서 리소스의 상세 정보 확인
kubectl describe pod my-pod
kubectl describe <TYPE> <NAME> -n <namespace>
특정 네임스페이스에서 리소스의 상세 정보 확인
kubectl describe pod my-pod -n my-namespace
kubectl delete <TYPE> <NAME>
default 네임스페이스에서 리소스 삭제
kubectl delete pod my-pod
kubectl delete <TYPE> <NAME> -n <namespace>
특정 네임스페이스에서 리소스 삭제
kubectl delete pod my-pod -n my-namespace
kubectl logs <NAME>
default 네임스페이스에서 Pod 로그 확인
kubectl logs my-pod
kubectl logs <NAME> -n <namespace>
특정 네임스페이스에서 Pod 로그 확인
kubectl logs my-pod -n my-namespace
kubectl apply -f <file.yaml>
YAML 파일을 사용해 default 네임스페이스에 리소스 생성/업데이트
kubectl apply -f deployment.yaml
kubectl apply -f <file.yaml> -n <namespace>
YAML 파일을 사용해 특정 네임스페이스에 리소스 생성/업데이트
kubectl apply -f deployment.yaml -n my-namespace
kubectl get all
default 네임스페이스의 모든 리소스 조회
kubectl get all
kubectl get all -n <namespace>
특정 네임스페이스의 모든 리소스 조회
kubectl get all -n my-namespace
kubectl 을 이용하여 namespace 조회. 아래 명령어 참고
kubectl get ns
>>> NAME              STATUS   AGE
default           Active   72m
kube-node-lease   Active   72m
kube-public       Active   72m
kube-system       Active   72m
​
2-6. kube-apiserver
모든 kubernetes cluster 요청을 처리하고 cluster 상태 정보를 저장하는 RESTful API 서비스
https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#api-overview 에서 제공하는 API들에 대해 설명
아래 명령어는 curl 을 이용하여, 사용가능한 API 목록 요청
# NODE_IP 환경 변수에 192.168.0.xx 형식의 IP 주소 저장 및 export
export NODE_IP=$(hostname -I | grep -o '192\.168\.0\.[0-9]\{1,3\}' | head -n 1)

# curl 명령어 실행하여 사용 가능한 API 목록 획득
curl https://$NODE_IP:6443/api/v1 \
	--cert /etc/kubernetes/pki/apiserver-kubelet-client.crt \
	--key /etc/kubernetes/pki/apiserver-kubelet-client.key \
	--cacert /etc/kubernetes/pki/ca.crt \
	-o api_v1_resources.json
​
api_v1_resources.json 파일로 저장된 API 목록은 아래를 참고하여 조회
cat api_v1_resources.json | less
>>> {
  "kind": "APIResourceList",
  "groupVersion": "v1",
  "resources": [
    {
      "name": "bindings",
      "singularName": "binding",
      "namespaced": true,
      "kind": "Binding",
      "verbs": [
        "create"
      ]
    },
    {
      "name": "componentstatuses",
      "singularName": "componentstatus",
      "namespaced": false,
      "kind": "ComponentStatus",
      "verbs": [
        "get",
        "list"
      ],
      "shortNames": [
        "cs"
      ]
    },
    {
      "name": "configmaps",
      "singularName": "configmap",
      "namespaced": true,
      "kind": "ConfigMap",
      "verbs": [
        "create",
        "delete",
        "deletecollection",
        "get",
        "list",
        "patch",
        "update",
        "watch"
      ],
      "shortNames": [
        "cm"
      ],
      "storageVersionHash": "qFsyl6wFWjQ="
    },
...
​
목록중 configmaps resource를 API 서버에 요청하여 조회
curl https://$NODE_IP:6443/api/v1/configmaps \
	--cert /etc/kubernetes/pki/apiserver-kubelet-client.crt \
	--key /etc/kubernetes/pki/apiserver-kubelet-client.key \
	--cacert /etc/kubernetes/pki/ca.crt \
	-o api_v1_configmaps.json
	
cat api_v1_configmaps.json | less
​
아래는 curl 요청시 사용된 인증서와 kubeconfig 필드와의 관계
curl 옵션
kubeconfig 필드
설명
URL 부분
server
API 서버 주소
--cert
client-certificate-data
클라이언트 인증서. kubeconfig에 Base64로 인코딩되어 저장
--key
client-key-data
클라이언트 키. kubeconfig에 Base64로 인코딩되어 저장
--cacert
certificate-authority-data
CA 인증서. kubeconfig에 Base64로 인코딩되어 저장
아래는 kubeconfig 파일구조. 위 표에 명시된 내용들이 담긴것을 알 수 있음
apiVersion: v1
clusters:
- cluster:
    certificate-authority-data: ...
    server: https://192.168.0.18:6443
  name: kubernetes
users:
- name: kubernetes-admin
  user:
    client-certificate-data: ...
    client-key-data: ...
...
​
아래 명령어로 namespace 조회
curl https://$NODE_IP:6443/api/v1/namespaces \
	--cert /etc/kubernetes/pki/apiserver-kubelet-client.crt \
	--key /etc/kubernetes/pki/apiserver-kubelet-client.key \
	--cacert /etc/kubernetes/pki/ca.crt \
	-o api_v1_namespaces.json
	
cat api_v1_namespaces.json | less
>>> {
  "kind": "NamespaceList",
  "apiVersion": "v1",
  "metadata": {
    "resourceVersion": "8452"
  },
  "items": [
    {
      "metadata": {
        "name": "default",
        "uid": "db62a204-1e82-44d3-8f27-ea643436f6f6",
        "resourceVersion": "40",
        "creationTimestamp": "2024-10-28T13:54:41Z",
        "labels": {
          "kubernetes.io/metadata.name": "default"
        },
        "managedFields": [
          {
            "manager": "kube-apiserver",
            "operation": "Update",
            "apiVersion": "v1",
            "time": "2024-10-28T13:54:41Z",
            "fieldsType": "FieldsV1",
            "fieldsV1": {
              "f:metadata": {
                "f:labels": {
                  ".": {},
                  "f:kubernetes.io/metadata.name": {}
                }
              }
            }
          }
        ]
      },
      "spec": {
        "finalizers": [
          "kubernetes"
        ]
      },
​
kubectl 을 이용해서도 api 조회가 가능. 해당 resource의 shortname과 함께 제공. 아래 참고
kubectl api-resources -o wide > api-resources.json
​
NAME
SHORTNAMES
API
VERSION
NAMESPACED
KIND
VERBS
CATEGORIES
bindings
v1
true
Binding
create
componentstatuses
cs
v1
false
ComponentStatus
get, list
configmaps
cm
v1
true
ConfigMap
create, delete, deletecollection, get, list, patch, update, watch
endpoints
ep
v1
true
Endpoints
create, delete, deletecollection, get, list, patch, update, watch
events
ev
v1
true
Event
create, delete, deletecollection, get, list, patch, update, watch
limitranges
limits
v1
true
LimitRange
create, delete, deletecollection, get, list, patch, update, watch
namespaces
ns
v1
false
Namespace
create, delete, get, list, patch, update, watch
nodes
no
v1
false
Node
create, delete, deletecollection, get, list, patch, update, watch
persistentvolumeclaims
pvc
v1
true
PersistentVolumeClaim
create, delete, deletecollection, get, list, patch, update, watch
persistentvolumes
pv
v1
false
PersistentVolume
create, delete, deletecollection, get, list, patch, update, watch
pods
po
v1
true
Pod
create, delete, deletecollection, get, list, patch, update, watch
all
podtemplates
v1
true
PodTemplate
create, delete, deletecollection, get, list, patch, update, watch
replicationcontrollers
rc
v1
true
ReplicationController
create, delete, deletecollection, get, list, patch, update, watch
all
resourcequotas
quota
v1
true
ResourceQuota
create, delete, deletecollection, get, list, patch, update, watch
secrets
v1
true
Secret
create, delete, deletecollection, get, list, patch, update, watch
serviceaccounts
sa
v1
true
ServiceAccount
create, delete, deletecollection, get, list, patch, update, watch
services
svc
v1
true
Service
create, delete, deletecollection, get, list, patch, update, watch
all
mutatingwebhookconfigurations
admissionregistration.k8s.io/v1
false
MutatingWebhookConfiguration
create, delete, deletecollection, get, list, patch, update, watch
api-extensions
validatingwebhookconfigurations
admissionregistration.k8s.io/v1
false
ValidatingWebhookConfiguration
create, delete, deletecollection, get, list, patch, update, watch
api-extensions
customresourcedefinitions
crd, crds
apiextensions.k8s.io/v1
false
CustomResourceDefinition
create, delete, deletecollection, get, list, patch, update, watch
api-extensions
apiservices
apiregistration.k8s.io/v1
false
APIService
create, delete, deletecollection, get, list, patch, update, watch
api-extensions
controllerrevisions
apps/v1
true
ControllerRevision
create, delete, deletecollection, get, list, patch, update, watch
daemonsets
ds
apps/v1
true
DaemonSet
create, delete, deletecollection, get, list, patch, update, watch
all
deployments
deploy
apps/v1
true
Deployment
create, delete, deletecollection, get, list, patch, update, watch
all
replicasets
rs
apps/v1
true
ReplicaSet
create, delete, deletecollection, get, list, patch, update, watch
all
statefulsets
sts
apps/v1
true
StatefulSet
create, delete, deletecollection, get, list, patch, update, watch
all
tokenreviews
authentication.k8s.io/v1
false
TokenReview
create
localsubjectaccessreviews
authorization.k8s.io/v1
true
LocalSubjectAccessReview
create
selfsubjectaccessreviews
authorization.k8s.io/v1
false
SelfSubjectAccessReview
create
selfsubjectrulesreviews
authorization.k8s.io/v1
false
SelfSubjectRulesReview
create
subjectaccessreviews
authorization.k8s.io/v1
false
SubjectAccessReview
create
horizontalpodautoscalers
hpa
autoscaling/v2
true
HorizontalPodAutoscaler
create, delete, deletecollection, get, list, patch, update, watch
all
cronjobs
cj
batch/v1
true
CronJob
create, delete, deletecollection, get, list, patch, update, watch
all
jobs
batch/v1
true
Job
create, delete, deletecollection, get, list, patch, update, watch
certificatesigningrequests
csr
certificates.k8s.io/v1
false
CertificateSigningRequest
create, delete, deletecollection, get, list, patch, update, watch
leases
coordination.k8s.io/v1
true
Lease
create, delete, deletecollection, get, list, patch, update, watch
endpointslices
discovery.k8s.io/v1
true
EndpointSlice
create, delete, deletecollection, get, list, patch, update, watch
events
ev
events.k8s.io/v1
true
Event
create, delete, deletecollection, get, list, patch, update, watch
flowschemas
flowcontrol.apiserver.k8s.io/v1beta3
false
FlowSchema
create, delete, deletecollection, get, list, patch, update, watch
prioritylevelconfigurations
flowcontrol.apiserver.k8s.io/v1beta3
false
PriorityLevelConfiguration
create, delete, deletecollection, get, list, patch, update, watch
ingressclasses
networking.k8s.io/v1
false
IngressClass
create, delete, deletecollection, get, list, patch, update, watch
ingresses
ing
networking.k8s.io/v1
true
Ingress
create, delete, deletecollection, get, list, patch, update, watch
networkpolicies
netpol
networking.k8s.io/v1
true
NetworkPolicy
create, delete, deletecollection, get, list, patch, update, watch
runtimeclasses
node.k8s.io/v1
false
RuntimeClass
create, delete, deletecollection, get, list, patch, update, watch
poddisruptionbudgets
pdb
policy/v1
true
PodDisruptionBudget
create, delete, deletecollection, get, list, patch, update, watch
clusterrolebindings
rbac.authorization.k8s.io/v1
false
ClusterRoleBinding
create, delete, deletecollection, get, list, patch, update, watch
clusterroles
rbac.authorization.k8s.io/v1
false
ClusterRole
create, delete, deletecollection, get, list, patch, update, watch
rolebindings
rbac.authorization.k8s.io/v1
true
RoleBinding
create, delete, deletecollection, get, list, patch, update, watch
roles
rbac.authorization.k8s.io/v1
true
Role
create, delete, deletecollection, get, list, patch, update, watch
priorityclasses
pc
scheduling.k8s.io/v1
false
PriorityClass
create, delete, deletecollection, get, list, patch, update, watch
csidrivers
storage.k8s.io/v1
false
CSIDriver
create, delete, deletecollection, get, list, patch, update, watch
csinodes
storage.k8s.io/v1
false
CSINode
create, delete, deletecollection, get, list, patch, update, watch
csistoragecapacities
storage.k8s.io/v1
true
CSIStorageCapacity
create, delete, deletecollection, get, list, patch, update, watch
storageclasses
sc
storage.k8s.io/v1
false
StorageClass
create, delete, deletecollection, get, list, patch, update, watch
volumeattachments
storage.k8s.io/v1
false
VolumeAttachment
create, delete, deletecollection, get, list, patch, update, watch
2-7. k9s
K9s는 Kubernetes 클러스터 관리와 모니터링을 위한 터미널 기반 UI 도구. https://k9scli.io/ 에서 자세한 정보 확인가능
아래 명령어 실행하여 설치
# download & install k9s (cent os)
curl -L -o k9s_linux_amd64.rpm https://github.com/derailed/k9s/releases/download/v0.32.5/k9s_linux_amd64.rpm && rpm -ivh k9s_linux_amd64.rpm 
​
이후, k9s 명령어로 실행. 실행시, 아래와 같은 화면이 나타남

아래는 k9s 의 주요 명령어. 보통 resource 조회에 많이 사용
명령어
기능
:help
도움말 표시
:quit
K9s 종료
:pod or :po
Pod 목록으로 이동
:deployment or :deploy
Deployment 목록으로 이동
:service or :svc
Service 목록으로 이동
:statefulset or :sts
StatefulSet 목록으로 이동
:daemonset or :ds
DaemonSet 목록으로 이동
:replicaset or :rs
ReplicaSet 목록으로 이동
:namespace or :ns
네임스페이스 목록으로 이동
:node or :no
Node 목록으로 이동
:configmap or :cm
ConfigMap 목록으로 이동
:secret or :se
Secret 목록으로 이동
:pv or :persistentvolume
Persistent Volume 목록으로 이동
:pvc or :persistentvolumeclaim
Persistent Volume Claim 목록으로 이동
:ingress or :ing
Ingress 목록으로 이동
:job
Job 목록으로 이동
:cronjob or :cj
CronJob 목록으로 이동
아래는 resource 이동후 단축키. 삭제, 편집, 로그, shell 등 다양한 기능 제공
Resource
단축키
기능
Attach
<a>
선택된 Pod에 연결
Copy
<c>
선택된 리소스 복사
Delete
<ctrl-d>
선택된 리소스 삭제
Describe
<d>
선택된 리소스의 상세 정보 표시
Edit
<e>
선택된 리소스 편집
Help
<?>
도움말 표시
Logs
<p>
선택된 Pod의 이전 로그 표시
Logs
<l>
선택된 Pod의 실시간 로그 표시
Shell
<s>
선택된 Pod의 shell 실행
Port-Forward
<shift-f>
선택된 Pod에 포트 포워딩을 설정
Refresh
<ctrl-r>
현재 리소스의 새로고침
2-8. Artifact Hub & Helm
Helm은 Kubernetes 애플리케이션의 패키지 관리자로, 앱 정의와 배포 간소화. https://helm.sh/ 에서 자세한 정보 확인가능
아래 명령어 실행
# Helm 설치 스크립트를 다운로드하고, CHECKSUM 검증을 비활성화한 상태로 실행
curl -fsSL https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | VERIFY_CHECKSUM=false bash
​
https://artifacthub.io/ 에서 다양한 Helm Chart들을 제공
https://artifacthub.io/ 접속시, 아래와 같은 화면이 나타남. Docker Hub와 같은 존재

redis검색시 아래와 같은 화면이 나타남

INSTALL 버튼 클릭시, 해당 Helm chart 설치 명령어 제공. 아래 그림 참고

아래는 INSTALL 버튼 클릭시 나타난 팝업창. repo 추가 후, 해당 repo 에서 chart를 검색하여 설치하는 방식

아래 명령어로 repo 등록. 등록된 repo 목록 조회도 가능하며, repo 에서 제공하는 chart 목록도 조회 가능. 아래 명령어 참고
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo list  # 등록된 repo 목록 조회

helm search repo bitnami  # Repo에서 제공하는 chart 목록 조회
​
Helm으로 패키지 설치 전, 아래 명령어로 data를 저장할 수 있도록 설정
kubectl apply -f https://raw.githubusercontent.com/rancher/local-path-provisioner/v0.0.30/deploy/local-path-storage.yaml

kubectl patch storageclass local-path -p '{"metadata": {"annotations": {"storageclass.kubernetes.io/is-default-class": "true"}}}'
​
아래 명령어로 redis 설치. 초기 비밀번호는 admin 으로 설정
helm install my-redis bitnami/redis --version 20.2.1 \
    --set global.redis.password=admin
​
이후, k9s 실행하여 redis-master pod 위에 커서 위치 후, s 를 눌러 shell로 접속. 이후 아래 명령어를 참고하여 redis에 데이터 삽입/조회/삭제
redis-cli -a admin  # redis 접속

SET mykey "Hello, Helm!"
GET mykey
DEL mykey
GET mykey
QUIT
​
helm list 명령어를 이용하여 설치된 helm chart 조회 가능
helm list
>>> NAME NAMESPACE REVISION UPDATED STATUS CHART APP VERSION
my-redis default 1 2024-10-28 deployed redis-20.2.1 7.4. 1 
​
helm uninstall 명령어로 설치된 패키지 삭제 가능. 아래는 설치된 my-redis 삭제 명령어
helm uninstall my-redis
​
nginx 설치 후, deployment 조회
helm install my-nginx bitnami/nginx --version 18.2.4

kubectl get deploy my-nginx -o yaml > nginx-deploy.yaml
>>> apiVersion: apps/v1
kind: Deployment
metadata:
  annotations:
    deployment.kubernetes.io/revision: "1"
    meta.helm.sh/release-name: my-nginx
    meta.helm.sh/release-namespace: default
  creationTimestamp: "2024-10-30T04:14:53Z"
  generation: 1
  labels:
    app.kubernetes.io/instance: my-nginx
    app.kubernetes.io/managed-by: Helm
    app.kubernetes.io/name: nginx
    app.kubernetes.io/version: 1.27.2
    helm.sh/chart: nginx-18.2.4
  name: my-nginx
  namespace: default
  resourceVersion: "1061"
  uid: 4b6401d9-e682-48a1-9c4e-ecab03e37638
spec:
  progressDeadlineSeconds: 600
  replicas: 1
  revisionHistoryLimit: 10
  selector:
    matchLabels:
      app.kubernetes.io/instance: my-nginx
      app.kubernetes.io/name: nginx
  strategy:
    rollingUpdate:
      maxSurge: 25%
      maxUnavailable: 25%
    type: RollingUpdate
  template:
    metadata:
      creationTimestamp: null
      labels:
        app.kubernetes.io/instance: my-nginx
        app.kubernetes.io/managed-by: Helm
        app.kubernetes.io/name: nginx
        app.kubernetes.io/version: 1.27.2
        helm.sh/chart: nginx-18.2.4
    spec:
      affinity:
        podAntiAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
          - podAffinityTerm:
              labelSelector:
                matchLabels:
                  app.kubernetes.io/instance: my-nginx
                  app.kubernetes.io/name: nginx
              topologyKey: kubernetes.io/hostname
            weight: 1
      automountServiceAccountToken: false
      containers:
      - env:
        - name: BITNAMI_DEBUG
          value: "false"
        - name: NGINX_HTTP_PORT_NUMBER
          value: "8080"
        - name: NGINX_HTTPS_PORT_NUMBER
          value: "8443"
        image: docker.io/bitnami/nginx:1.27.2-debian-12-r1
        imagePullPolicy: IfNotPresent
        livenessProbe:
          failureThreshold: 6
          initialDelaySeconds: 30
          periodSeconds: 10
          successThreshold: 1
          tcpSocket:
            port: http
          timeoutSeconds: 5
        name: nginx
        ports:
        - containerPort: 8080
          name: http
          protocol: TCP
        - containerPort: 8443
          name: https
          protocol: TCP
        readinessProbe:
          failureThreshold: 3
          httpGet:
            path: /
            port: http
            scheme: HTTP
          initialDelaySeconds: 5
          periodSeconds: 5
          successThreshold: 1
          timeoutSeconds: 3
        resources:
          limits:
            cpu: 150m
            ephemeral-storage: 2Gi
            memory: 192Mi
          requests:
            cpu: 100m
            ephemeral-storage: 50Mi
            memory: 128Mi
        securityContext:
          allowPrivilegeEscalation: false
          capabilities:
            drop:
            - ALL
          privileged: false
          readOnlyRootFilesystem: true
          runAsGroup: 1001
          runAsNonRoot: true
          runAsUser: 1001
          seccompProfile:
            type: RuntimeDefault
        terminationMessagePath: /dev/termination-log
        terminationMessagePolicy: File
        volumeMounts:
        - mountPath: /tmp
          name: empty-dir
          subPath: tmp-dir
        - mountPath: /opt/bitnami/nginx/conf
          name: empty-dir
          subPath: app-conf-dir
        - mountPath: /opt/bitnami/nginx/logs
          name: empty-dir
          subPath: app-logs-dir
        - mountPath: /opt/bitnami/nginx/tmp
          name: empty-dir
          subPath: app-tmp-dir
        - mountPath: /certs
          name: certificate
      dnsPolicy: ClusterFirst
      initContainers:
      - args:
        - -ec
        - |
          #!/bin/bash
          . /opt/bitnami/scripts/libfs.sh
          # We copy the logs folder because it has symlinks to stdout and stderr
          if ! is_dir_empty /opt/bitnami/nginx/logs; then
            cp -r /opt/bitnami/nginx/logs /emptydir/app-logs-dir
          fi
        command:
        - /bin/bash
        image: docker.io/bitnami/nginx:1.27.2-debian-12-r1
        imagePullPolicy: IfNotPresent
        name: preserve-logs-symlinks
        resources:
          limits:
            cpu: 150m
            ephemeral-storage: 2Gi
            memory: 192Mi
          requests:
            cpu: 100m
            ephemeral-storage: 50Mi
            memory: 128Mi
        securityContext:
          allowPrivilegeEscalation: false
          capabilities:
            drop:
            - ALL
          privileged: false
          readOnlyRootFilesystem: true
          runAsGroup: 1001
          runAsNonRoot: true
          runAsUser: 1001
          seccompProfile:
            type: RuntimeDefault
        terminationMessagePath: /dev/termination-log
        terminationMessagePolicy: File
        volumeMounts:
        - mountPath: /emptydir
          name: empty-dir
      restartPolicy: Always
      schedulerName: default-scheduler
      securityContext:
        fsGroup: 1001
        fsGroupChangePolicy: Always
      serviceAccount: my-nginx
      serviceAccountName: my-nginx
      shareProcessNamespace: false
      terminationGracePeriodSeconds: 30
      volumes:
      - emptyDir: {}
        name: empty-dir
      - name: certificate
        secret:
          defaultMode: 420
          items:
          - key: tls.crt
            path: server.crt
          - key: tls.key
            path: server.key
          secretName: my-nginx-tls
status:
  availableReplicas: 1
  conditions:
  - lastTransitionTime: "2024-10-30T04:15:09Z"
    lastUpdateTime: "2024-10-30T04:15:09Z"
    message: Deployment has minimum availability.
    reason: MinimumReplicasAvailable
    status: "True"
    type: Available
  - lastTransitionTime: "2024-10-30T04:14:53Z"
    lastUpdateTime: "2024-10-30T04:15:09Z"
    message: ReplicaSet "my-nginx-996b74687" has successfully progressed.
    reason: NewReplicaSetAvailable
    status: "True"
    type: Progressing
  observedGeneration: 1
  readyReplicas: 1
  replicas: 1
  updatedReplicas: 1