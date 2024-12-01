# Day 01 | CI/CD 실습

---

> **⚠️ NOTE:** *Click **`cmd/ctrl`** + **`option/alt`** + **`T`** to expand all toggles*
> 

## 1. VSCode

- Microsoft에서 제공하는 무료 IDE

### 1-1. Features

- Visual Studio Code (VSCode)는 Microsoft에서 제공하는 무료 오픈 소스 코드 편집기
- 다양한 프로그래밍 언어를 지원하는 다목적 IDE
- 주요 특징:
    
    
    | 특징 | 설명 |
    | --- | --- |
    | **확장성** | 다양한 확장 기능을 통해 Python, JavaScript, Docker, Git 등 여러 언어와 도구를 지원. |
    | **통합 터미널** | VSCode 내에서 터미널을 사용할 수 있어 개발과 실행을 쉽게 할 수 있음. |
    | **디버깅** | 내장 디버깅 기능을 통해 코드의 오류를 실시간으로 찾고 수정 가능. |
    | **버전 관리 통합** | Git, GitHub 등과의 통합으로 코드 버전 관리를 쉽게 수행. |
    | **멀티플랫폼 지원** | Windows, macOS, Linux에서 모두 사용 가능. |

### 1-2. Installation

- [*https://code.visualstudio.com/download](https://code.visualstudio.com/download)* 접속시, 아래와 같이 다운로드 가능
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/0620cc22-7828-45f4-958f-24f2493a03ba/4814c4e3-07c2-40fb-be1d-10b0dc13be26.png)
    
- 다운로드 이후 아래그림들을 참조하여 설치
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/d66c6f62-add4-41f2-9f83-14744bb1bc2b/image.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/51b69abe-cd72-4a8e-a9bc-4cc31c72715f/image.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/a2f65655-882e-4a79-95a7-533cd4c922d4/image.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/0005f553-0714-4bd7-8962-114e6c7592be/image.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/cca7d917-77c4-4cb8-95df-90c91970ed44/image.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/595c5be8-df16-4b5d-8717-1d02b8925f79/image.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/8b9c0deb-6d0b-4c51-a034-804dafdcf586/image.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/79b1a32a-ec14-41c4-830d-6f18a850df58/image.png)
    
- 아래는 설치 후 실행모습
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/e7cb491b-943c-45a5-a8a2-a1515856ee1a/image.png)
    

### 1-3. Open Working Directory

- 코드를 편집하기 위한, Working directory 설정 필요
- 폴더 생성. 아래그림 참고
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/b677546a-e1ed-4b20-b469-67f3b0170b9e/image.png)
    
- 아래그림을 참고하여, 해당 폴더 신뢰
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/cc99454d-7069-4a2d-bcab-ae5fe53445f4/5bf5e49f-e863-4e4f-8f9a-53cb5737241a.png)
    
- 왼쪽 상단의 메뉴바로 이동. `View` → `Ternimal` 클릭하여, 터미널 실행. 아래그림 참고
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/c47fb766-9207-4d61-bab4-14a0bd7e0e74/3b9bcd8a-e167-4442-acce-2cf265913ca7.png)
    
- 터미널 화면이 하단에 나타남
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/0f93cadf-7e7d-4b3f-bb90-f52237197f1b/image.png)
    

---

## 2. Conda

- 여러 Python 버전을 지원하는 패키지 매니저

### 2-1. What’s Conda?

- Package Manager
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/d4e22d4e-ce53-4271-94bd-af1c141cc8ac/image.png)
    

### 2-2. Installation

- [*https://docs.anaconda.com/miniconda/miniconda-install/](https://docs.anaconda.com/miniconda/miniconda-install/)* 접속
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/77f6832c-9ec2-4d17-9509-33b4d30dec03/93a3824e-2f6a-41fc-96f5-de32c402a2b4.png)
    
- 설치파일 다운로드
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/674fd6a0-8660-42f7-a316-b79553589cc2/image.png)
    
- 아래 그림을 참조하여 설치 진행
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/3f3a25c4-25b8-44d9-9a99-ce8441f43ad1/image.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/7da861a2-260e-4c70-b735-061730dca23a/image.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/d62610f9-24fa-4f2d-97f5-a789c98f2429/image.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/eff57c41-e7e0-4c23-a5b0-9ad6eb49577d/image.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/56df9d35-566f-4331-b93f-063079e3106a/image.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/83d0335e-441d-4246-841e-e0f83a6450b1/image.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/694a2c75-7c10-4961-9675-f78d15843631/image.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/9f58c2c2-548d-4fd4-ae47-462adc45c511/image.png)
    

### 2-3. Create an Environment

- 시작화면을 열고 Anaconda Prompt 실행
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/9f66fbca-b7ce-4e54-b923-cc1a277e947b/image.png)
    
- `Anaconda Prompt (miniconda3)` 실행시, 아래화면과 같은 Terminal이 실행
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/4ff72a95-84e8-4403-9708-d5bf527ae4a7/image.png)
    
- conda는 기본적으로 `base` 라는 이름의 가상환경을 제공. `Anaconda Prompt (miniconda3)`에서 아래 명령어로 확인
    
    ```bash
    # windows
    where conda  
    where python
    
    # MacOS, Linux
    which conda
    which python
    ```
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/be3eecfc-87a2-4243-aba9-4b25b8fefebf/image.png)
    
- `conda create -n *NAME* python=*VERSION*` 으로 가상환경 생성
    
    ```bash
    (base) C:\Users\*******>**python -V**
    Python 3.12.4
    
    (base) C:\Users\*******>conda create -n cicd python=3.11
    Channels:
     - defaults
    Platform: win-64
    Collecting package metadata (repodata.json): done
    Solving environment: done
    
    ## Package Plan ##
    
      environment location: C:\Users\*******\miniconda3\envs\cicd
    
      added / updated specs:
        - python=3.11
    
    The following packages will be downloaded:
    
        package                    |            build
        ---------------------------|-----------------
        openssl-3.0.15             |       h827c3e9_0         7.8 MB
        pip-24.2                   |  py311haa95532_0         3.0 MB
        python-3.11.9              |       he1021f5_0        18.3 MB
        setuptools-72.1.0          |  py311haa95532_0         3.0 MB
        wheel-0.43.0               |  py311haa95532_0         171 KB
        ------------------------------------------------------------
                                               Total:        32.2 MB
    
    The following NEW packages will be INSTALLED:
    
      bzip2              pkgs/main/win-64::bzip2-1.0.8-h2bbff1b_6
      ca-certificates    pkgs/main/win-64::ca-certificates-2024.7.2-haa95532_
      libffi             pkgs/main/win-64::libffi-3.4.4-hd77b12b_1
      openssl            pkgs/main/win-64::openssl-3.0.15-h827c3e9_0
      pip                pkgs/main/win-64::pip-24.2-py311haa95532_0
      python             pkgs/main/win-64::python-3.11.9-he1021f5_0
      setuptools         pkgs/main/win-64::setuptools-72.1.0-py311haa95532_0
      sqlite             pkgs/main/win-64::sqlite-3.45.3-h2bbff1b_0
      tk                 pkgs/main/win-64::tk-8.6.14-h0416ee5_0
      tzdata             pkgs/main/noarch::tzdata-2024a-h04d1e81_0
      vc                 pkgs/main/win-64::vc-14.40-h2eaa2aa_0
      vs2015_runtime     pkgs/main/win-64::vs2015_runtime-14.40.33807-h98bb1d
      wheel              pkgs/main/win-64::wheel-0.43.0-py311haa95532_0
      xz                 pkgs/main/win-64::xz-5.4.6-h8cc25b3_1
      zlib               pkgs/main/win-64::zlib-1.2.13-h8cc25b3_1
    
    Proceed ([y]/n)? **y**
    ```
    
- 설치 후, `conda activate *NAME`* 으로 가상환경 실행
    
    ```bash
    Proceed ([y]/n)? y
    
    Downloading and Extracting Packages:
    
    Preparing transaction: done
    Verifying transaction: done
    Executing transaction: done
    #
    # To activate this environment, use
    #
    #     $ conda activate cicd
    #
    # To deactivate an active environment, use
    #
    #     $ conda deactivate
    
    (base) C:\Users\*******>**conda activate cicd**
    
    **(cicd)** C:\Users\*******>
    ```
    

### 2-4. Conda in VSCode

- Terminal (Powershell)에서 Conda가 바로 실행되지 않음
- `conda init powershell` 실행
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/2b576408-1921-4a65-a534-67a2316ee6b4/image.png)
    
- 에러발생시, `set-executionpolicy unrestricted` 실행 (관리자 모드)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/8e243a41-7603-4f41-9960-7520f3679c2a/image.png)
    
    > https://gist.github.com/martinsotir/2bd2e16332dff71e0fa5be3ed3468a6c
    > 
- VSCode의 terminal에서 `conda` 명령어 동작확인 가능
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/bcf8a221-9746-4225-bfc0-983ffeda6d78/image.png)
    

---

## 3. Poetry

- Python 의존성 관리 및 패키징 도구

### 3-1. What’s Poetry?

- https://python-poetry.org
    
    [Poetry - Python dependency management and packaging made easy](https://python-poetry.org/)
    
- Python 의존성 관리 및 패키징 도구

### 3-2. Installation

- 공식홈페이지에서 제공하는 설치 명령어 수행
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/c88ce8fd-7d47-4152-b678-ecbd05b9c10b/image.png)
    
    ```powershell
    (Invoke-WebRequest -Uri https://install.python-poetry.org -UseBasicParsing).Content | python -
    ```
    
- 아래는 설치 이후 메세지. `Path` 환경변수에 Python path등록 필요. 괄호로 등록해야할 Python path를 알려줌
    
    ```powershell
    (base) PS C:\Users\*******\devops> (Invoke-WebRequest -Uri https://install.python-poetry.org -UseBasicParsing).Content | python -
    Retrieving Poetry metadata
    
    # Welcome to Poetry!
    
    This will download and install the latest version of Poetry,
    a dependency and package manager for Python.
    
    It will add the `poetry` command to Poetry's bin directory, located at:
    
    C:\Users\*******\AppData\Roaming\Python\Scripts
    
    You can uninstall at any time by executing this script with the --uninstall option,
    and these changes will be reverted.
    
    Installing Poetry (1.8.3)
    Installing Poetry (1.8.3): Creating environment
    Installing Poetry (1.8.3): Installing Poetry
    Installing Poetry (1.8.3): Creating script
    Installing Poetry (1.8.3): Done
    
    Poetry (1.8.3) is installed now. Great!
    
    To get started you need Poetry's bin directory (**C:\Users\*******\AppData\Roaming\Python\Scripts**) in your `PATH`   
    environment variable.
    
    Alternatively, you can call Poetry explicitly with `C:\Users\*******\AppData\Roaming\Python\Scripts\poetry`.      
    
    You can test that everything is set up by executing:
    
    `poetry --version`
    ```
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/8df5b631-f552-41ce-a3d2-c1f119edd326/image.png)
    
- `Window + x` 를 누른후, `System` 클릭. 이후 `Advanced system setting` 클릭
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/6a45979d-52cf-4c5e-9495-35c4630cd9af/image.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/9f54982a-82f8-4a47-9bf7-d67f6b6c777e/image.png)
    
- 아래 그림을 참조하여 `Path` 환경변수 편집 시작
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/43e95c92-b775-4b6c-b1b8-14bf5d9c2b0a/image.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/f9f5b735-e7a3-45f6-9d0a-2a07506716a7/image.png)
    
- `New` 버튼을 클릭하여, `Poetry`에서 언급한 Python path 등록
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/eb105c28-1970-4b28-8861-48572cf6c6e2/image.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/60438ddd-b5b8-4d14-957d-c2def0d4ec09/image.png)
    
- 환경 변수 등록이후, `poetry` 명령어 인식
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/ce6b7a30-e380-45f4-963a-1dbaf2d9bd3e/image.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/ea0f982f-0532-4ff3-9abe-388b2bd9aab3/image.png)
    

### 3-3. Commands

- 아래는 `poetry`의 주요 명령어
    
    
    | 명령어 | 설명 |
    | --- | --- |
    | `poetry init` | 프로젝트 초기화 (`pyproject.toml` 생성) |
    | `poetry new <project>` | 새로운 프로젝트 생성 |
    | `poetry install` | 의존성 설치 (`pyproject.toml` 또는 `poetry.lock` 사용) |
    | `poetry install --without=dev` | 개발 의존성을 제외한 의존성 설치 |
    | `poetry add <package>` | 패키지 추가 (production dependencies) |
    | `poetry add --dev <package>` | 개발 의존성 추가 (dev-dependencies) |
    | `poetry remove <package>` | 패키지 제거 |
    | `poetry env use <python>` | 특정 Python 버전 사용하여 가상 환경 생성 |
    | `poetry shell` | 가상 환경 활성화 |
    | `poetry run <command>` | 가상 환경 내에서 명령 실행 |
    | `poetry update` | 의존성 업데이트 |
    | `poetry export -f requirements.txt` | `requirements.txt` 형식으로 의존성 내보내기 |
    | `poetry build` | 프로젝트 빌드 (패키지 생성: sdist, wheel) |
    | `poetry publish` | 패키지 배포 (PyPI 등) |
    | `poetry show --tree` | 의존성 트리 표시 |
    | `poetry check` | 프로젝트 설정과 의존성의 일관성 검사 |

### 3-4. Create a Python Project

- `poetry new` 명령어로 Python project 생성. 기본 구조와 함께 프로젝트가 생성
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/aba370fb-5fb7-41e1-b7eb-2732e6c047d9/image.png)
    
    ```toml
    # pyproject.toml
    [tool.poetry]
    name = "my-devops-01"
    version = "0.1.0"
    description = ""
    authors = ["Your Name <you@example.com>"]
    readme = "README.md"
    
    [tool.poetry.dependencies]
    python = "^3.12"
    
    [build-system]
    requires = ["poetry-core"]
    build-backend = "poetry.core.masonry.api"
    ```
    

---

## 4. Git Repository Clone & Run Test

- 미리 설정된 git repository를 복제
- Test 코드를 local 에서 수행
- 추후 github에서 제공하는 VM에서, Local에서 수행된 내용이 그대로 실행

### 4-1. Install Git

- [Git - Downloading Package (git-scm.com)](https://git-scm.com/download/win)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/68a92f80-7456-43d0-a36d-bdecaed0bd02/image.png)
    
- Install Git
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/9177c308-2463-4e6c-be8e-9ba59fca0653/image.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/59ce200d-8b4f-4bac-9070-14da4d3334e3/image.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/aef08748-e1e4-40cd-b168-0e15493af14d/image.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/1211b6d1-03c3-4010-bc28-6175442a03e3/image.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/d7476306-321a-4435-95fc-15cf9681b8d0/image.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/7535f023-b6bb-4f6d-9d51-7d37fa66654e/image.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/c0ba2485-3c65-4e10-a630-6a65f36eb198/image.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/4165aa2d-2241-4d63-9257-0a3befd06941/image.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/7cc2d9c5-3205-421b-9c9c-e8792b27c62d/image.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/e88ab950-6299-4c1f-88ff-1ab54676dd08/image.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/72e69519-a556-445c-80f0-6b592fd89373/image.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/093b4956-3bb6-44cf-b940-d5464e2cca13/image.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/9ce68efe-c618-4e34-956f-c1ef0143c13b/image.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/2faeba0a-6f86-4651-85f6-474e06da698e/image.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/495692ba-bd81-4a41-8577-fae4e4e3f620/image.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/c809fde9-52cf-4b6c-9ec0-defb6e9b9959/image.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/4a878693-9eab-401f-b7fb-804ad984b9d2/image.png)
    
- 설치 이후, 아래그림과 같이 `git` 명령어 동작. 아래는 version을 확인하는 명령어
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/f11ed959-d410-4387-b678-88ad8e2ef2d1/image.png)
    

### 4-2. Clone Repository

- https://github.com/seungbaeji/practice_devops
    
    https://github.com/seungbaeji/practice_devops
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/b41f1dca-71a9-47b4-8f7c-53eb4817bee9/image.png)
    
- `git clone https://github.com/seungbaeji/practice_devops.git`
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/19fe9816-ac84-4daf-b3bd-a24ecab32de5/image.png)
    

### 4-3. Prepare Python Envs

- 아래 명령어 실행
    
    ```bash
    pip install poetry
    cd basic-ci
    
    poetry install
    ```
    

### 4-4. Run Pytest

- 아래 명령어 수행
    
    ```bash
    poetry run pytest
    poetry run pytest --cov=./ --cov-report=html
    ```
    

---

## 5. Python Basic

- 실습을 따라가기 위한 Python 기초 문법

### 5-1. Basic Data Types

- `int`: 정수형 (e.g., `10`)
- `float`: 실수형 (e.g., `10.5`)
- `str`: 문자열 (e.g., `"Hello"`)
- `bool`: 불리언 (e.g., `True`, `False`)
- `list`: 리스트, 여러 값을 순서대로 저장하는 배열 (e.g., `[1, 2, 3]`)
- `tuple`: 튜플, 변경할 수 없는 리스트 (e.g., `(1, 2, 3)`)
- `dict`: 사전, 키-값 쌍으로 저장 (e.g., `{"key": "value"}`)
- `set`: 집합, 중복 없는 값들의 모임 (e.g., `{1, 2, 3}`)

### 5-2. Function

- 특정 작업을 수행하는 코드 블록
- Type hinting을 사용하여 입력과 출력 타입을 명시
    
    ```python
    def add(a: int, b: int) -> int:
        return a + b
    
    result = add(3, 5)
    print(result)  # 8
    ```
    

### 5-3. Class

- 데이터와 기능을 하나의 단위로 묶는 구조
    
    ```python
    class MyClass:
        def __init__(self, value: int) -> None:
            self.value: int = value
    
        def get_value(self) -> int:
            return self.value
    
    obj = MyClass(10)
    print(obj.get_value())  # 10
    ```
    

### 5-5. Module

- 확장자가 `.py`인 파일. 각각의 `.py` 파일은 하나의 module로 간주
- `.py` 파일내에 변수, 함수, class 등을 정의 할 수 있음
- 생성한 module은 다른 `.py` 파일에서 `import`하여 코드를 재사용하고 공유할 수 있음
- 아래는 module 작성 예시
    
    ```python
    # my_module.py
    """My Module.
    
    이 모듈은 다양한 기능을 예시하는 용도로 만들어졌습니다.
    여기에는 상수, 전역 변수, 클래스, 함수 등이 포함되어 있습니다.
    
    특징:
    - 모듈 레벨의 상수와 변수
    - 간단한 함수와 클래스 정의
    - 특수 속성 활용
    """
    
    import math  # 다른 모듈 불러오기
    
    MY_MODULE_CONSTANT = "CONSTANT"  # 상수 정의
    
    my_module_global = 'global'  # 전역 변수
    _private_var = 'private'  # 비공개 변수 (이름 규칙에 의해)
    
    def my_function():
        local_var = 'local'  # 지역 변수
        return f'{local_var=} + {my_module_global=}
    
    class MyClass:
        def __init__(self, value):
            self.instance_var = value  # 인스턴스 변수
    
        @classmethod
        def my_class_method(cls):
            return "class method"
    
        @staticmethod
        def my_static_method():
            return "static method"
    
    # 모듈 이름, 파일 위치, 설명문서 출력
    print(f"Module name: {__name__}")
    print(f"Module file: {__file__}")
    print(f"Module docs:{__doc__}")
    
    ```
    

### 5-6. Package

- Package는 module들의 집합으로, 여러 module을 하나의 상위 폴더에 넣어 구조화한 것
- `__init__.py` 파일은 해당 폴더가 package임을 Python에 알리는 역할. 보통 내용이 비어있는 `.py` 파일
- 하지만, Python 3.3 이후 버전에서는 `__init__.py` 파일이 없어도 폴더를 package로 인식. 현재는 주로 package 초기화를 담당
- 하위 package를 사용하여 package 내에 더 복잡한 구조를 생성할 수 있으며, 각각의 하위 폴더에는 자체 `__init__.py` 파일이 존재가능
- 아래는 단순한 package 구조의 예
    
    ```
    my_project/
    │
    ├── my_package/       # 주요 패키지 폴더
    │   ├── __init__.py
    │   ├── module1.py
    │   ├── module2.py
    │   └── subpackage/  # 하위 패키지 폴더
    │       ├── __init__.py
    │       └── submodule1.py
    │
    └── main.py           # 실행 가능한 메인 스크립트
    ```
    

### 5-7. Python Practice

- **새로운 프로젝트 생성**:
    
    ```bash
    poetry new my_project
    ```
    
- 아래와 같은 구조 생성
    
    ```
    my_project/
    ├── my_project/
    │   ├── __init__.py
    │   └── my_project.py
    ├── tests/
    │   └── __init__.py
    ├── pyproject.toml
    └── README.md
    ```
    
- **프로젝트 디렉토리로 이동**:
    
    ```bash
    cd my_project
    ```
    
- **파일 생성 및 편집**: `my_project/my_project.py` 파일에 간단한 함수와 타입 힌팅 예제를 작성
    
    ```python
    # my_project/my_project.py
    
    def add_numbers(a: int, b: int) -> int:
        """두 정수를 받아서 합을 반환하는 함수."""
        return a + b
    
    def format_greeting(name: str) -> str:
        """이름을 받아서 환영 메시지를 반환하는 함수."""
        return f"Hello, {name}!"
    ```
    
- **클래스 정의**: 같은 파일에 클래스를 추가하여 클래스를 사용하는 예제 작성
    
    ```python
    # my_project/my_project.py
    
    class Calculator:
        """간단한 계산기 클래스."""
    
        def __init__(self, initial_value: int = 0) -> None:
            self.value: int = initial_value
    
        def add(self, amount: int) -> None:
            """현재 값에 정수를 더합니다."""
            self.value += amount
    
        def subtract(self, amount: int) -> None:
            """현재 값에서 정수를 뺍니다."""
            self.value -= amount
    
        def get_value(self) -> int:
            """현재 값을 반환합니다."""
            return self.value
    
    ```
    
- **메인 스크립트 작성**: `main.py` 파일을 생성하여 함수를 호출하고 클래스를 사용하는 코드를 작성
    
    ```python
    # main.py
    
    from my_project import add_numbers, format_greeting, Calculator
    
    # 함수 사용 예제
    result = add_numbers(10, 20)
    print(f"10 + 20 = {result}")  # 출력: 10 + 20 = 30
    
    greeting = format_greeting("Alice")
    print(greeting)  # 출력: Hello, Alice!
    
    # 클래스 사용 예제
    calc = Calculator(initial_value=10)
    calc.add(5)
    print(f"현재 값: {calc.get_value()}")  # 출력: 현재 값: 15
    calc.subtract(3)
    print(f"현재 값: {calc.get_value()}")  # 출력: 현재 값: 12
    
    ```
    
- **프로젝트 실행**: 다음 명령어를 사용하여 `main.py`를 실행
    
    ```bash
    poetry run python main.py
    ```
    

---

## 6. Validation in Python

- Python에서의 데이터와 기능 검증

### 6-1. What’s Pydantic

- **Pydantic**은 Python 데이터 유효성 검사 및 설정 관리를 위한 라이브러리
- Python 타입 힌트를 사용하여 데이터 모델을 정의하고 자동으로 데이터 유효성을 검사
- 주요 특징:
    - **데이터 유효성 검사**: 데이터 클래스 정의 시 타입 힌트를 통해 유효성 검사 자동화.
    - **간편한 데이터 변환**: JSON 등 다양한 포맷을 Python 객체로 쉽게 변환 가능.
    - **타입 안전성**: 타입 힌트를 엄격히 적용하여 코드의 타입 안전성을 높임.
    - **속도와 효율성**: Cython으로 최적화되어 빠르고 효율적인 데이터 처리 가능.
- **Installation**
    
    ```bash
    poetry add pydantic
    ```
    

### 6-2. Pydantic Practice

- 새로운 프로젝트 생성
    
    ```
    poetry new my_validation
    cd my_validation
    ```
    
- 아래와 같은 구조 생성
    
    ```
    my_validation
    ├── README.md
    ├── my_validation
    │   └── __init__.py
    ├── pyproject.toml
    └── tests
        └── __init__.py
    ```
    
- 패키지 설치
    
    ```bash
    poetry add pydantic
    Using version ^2.9.0 for pydantic
    
    Updating dependencies
    Resolving dependencies... (0.5s)
    
    Package operations: 5 installs, 0 updates, 0 removals
    
      - Installing typing-extensions (4.12.2)
      - Installing annotated-types (0.7.0)
      - Installing pydantic-core (2.23.2)
      - Installing tzdata (2024.1)
      - Installing pydantic (2.9.0)
    
    Writing lock file
    ```
    
- 아래와 같이 파일 작성
    - `my_validation/datamodel.py`
        
        ```python
        from __future__ import annotations
        
        from typing import Any, Optional, TypedDict
        
        from pydantic import BaseModel, Field
        
        class User(BaseModel):
            id: int = Field(..., ge=1)
            name: str = Field(..., min_length=1)
            is_active: bool
        
        class UserDict(TypedDict):
            id: int
            name: Optional[str]
            is_active: Optional[bool]
        
        ```
        
    - `main.py`
        
        ```python
        from my_validation.datamodel import User, UserDict
        from pydantic import ValidationError
        
        def main():
            # 테스트할 사용자 데이터를 정의합니다.
            users_data = [
                # 유효한 데이터
                {"id": 1, "name": "Alice", "is_active": True},
                {"id": 4, "name": "David", "is_active": True},
        
                # 유효하지 않은 ID
                # {"id": None, "name": "Bob", "is_active": False},
                # 유효하지 않은 이름
                # {"id": 3, "name": "", "is_active": True},
                # 유효하지 않은 음수 ID
                # {"id": -4, "name": "Charlie", "is_active": True},
            ]
        
            for user_data in users_data:
                try:
                    # Pydantic 모델을 사용하여 유효성 검사를 수행합니다.
                    user = User(**user_data)
                    print(f"Valid user: {user}")
                except ValidationError as e:
                    print(f"Validation error: {e}")
        
        if __name__ == "__main__":
            main()
        ```
        
- 아래와 같이 실행
    
    ```powershell
    poetry run python main.py
    ```
    

### 6-3. What’s Pytest

- **Pytest**는 Python에서 가장 널리 사용되는 테스트 프레임워크 중 하나
- 주요 특징:
    - 간단한 테스트 함수와 명확한 에러 리포팅.
    - 다양한 플러그인 지원으로 확장성 제공.
    - 테스트 디스커버리 기능으로 자동으로 테스트를 찾고 실행.
- 아래는 지원 플러그인 예시
    
    
    | 플러그인 | 설명 |
    | --- | --- |
    | `pytest-cov` | 코드 커버리지 측정을 위한 플러그인. |
    | `pytest-xdist` | 병렬로 테스트를 실행하여 시간을 단축시켜주는 플러그인. |
    | `pytest-mock` | `unittest.mock`을 쉽게 사용할 수 있게 해주는 플러그인. |
    | `pytest-django` | Django 프로젝트에서의 테스트를 지원하는 플러그인. |
    | `pytest-flask` | Flask 애플리케이션 테스트를 위한 플러그인. |
    | `pytest-html` | 테스트 결과를 HTML 리포트로 생성하는 플러그인. |
    | `pytest-rerunfailures` | 실패한 테스트를 자동으로 재실행해주는 플러그인. |
    | `pytest-random-order` | 테스트 실행 순서를 무작위로 하여 테스트 독립성을 검증. |
- Installlation
    
    ```bash
    poetry add --dev pytest
    ```
    

### 6-4. Pytest Practice

- 의존성 설치
    
    ```bash
    poetry add requests
    poetry add --dev pytest pytest-cov
    
    Using version ^2.32.3 for requests
    
    Updating dependencies
    Resolving dependencies... (0.2s)
    
    Package operations: 5 installs, 0 updates, 0 removals
    
      - Installing certifi (2024.8.30)
      - Installing charset-normalizer (3.3.2)
      - Installing idna (3.8)
      - Installing urllib3 (2.2.2)
      - Installing requests (2.32.3)
    
    Writing lock file
    The --dev option is deprecated, use the `--group dev` notation instead.
    Using version ^8.3.2 for pytest
    Using version ^5.0.0 for pytest-cov
    
    Updating dependencies
    Resolving dependencies... (0.8s)
    
    Package operations: 5 installs, 0 updates, 0 removals
    
      - Installing colorama (0.4.6)
      - Installing iniconfig (2.0.0)
      - Installing packaging (24.1)
      - Installing pluggy (1.5.0)
      - Installing pytest (8.3.2)
      - Installing coverage (7.6.1)
      - Installing pytest-cov (5.0.0)
    
    Writing lock file
    ```
    
- 아래와 같이 작성
    - `my_validation/service.py`
        
        ```python
        from __future__ import annotations
        import requests
        from pydantic import ValidationError
        from .datamodel import User, UserDict
        
        def fetch_user_data(url: str) -> list[UserDict]:
            response = requests.get(url)
        
            if response.status_code != 200:
                raise RuntimeError(f"Failed to fetch data: {response.status_code}")
        
            # 불완전한 데이터를 받을 수 있음
            users_data: list[UserDict] = response.json()
            return users_data
        
        def validate_users(users: list[UserDict]) -> list[User]:
            valid_users = []
        
            for user_data in users:
                try:
                    user = User(**user_data)
                    valid_users.append(user)
                except ValidationError as e:
                    print(f"Invalid user data skipped: {e}")
        
            return valid_users
        
        def filter_active_users(users: list[User]) -> list[User]:
            return [user for user in users if user.is_active]
        ```
        
    - `main.py`
        
        ```python
        import time
        from my_validation.service import fetch_user_data, filter_active_users, validate_users
        
        def main():
            # 실제 API 엔드포인트로 변경 가능
            url = "http://example.com/api/users"
        
            while True:
                # 1. 사용자 데이터를 가져옴
                try:
                    users_data = fetch_user_data(url)
                except RuntimeError as e:
                    print(f"Error fetching user data: {e}")
                    time.sleep(60)  # 실패 시 1분 대기 후 다시 시도
                    continue
        
                # 2. 데이터를 검증하여 유효한 사용자만 필터링
                valid_users = validate_users(users_data)
        
                # 3. 활성화된 사용자만 필터링
                active_users = filter_active_users(valid_users)
        
                # 4. 결과 출력
                print("Active Users:")
                for user in active_users:
                    print(f"ID: {user.id}, Name: {user.name}, Active: {user.is_active}")
        
                # 5. 일정 시간 대기 (예: 5분)
                time.sleep(300)  # 300초(5분)마다 다시 실행
        
        if __name__ == "__main__":
            main()
        ```
        
    - `tests/test_service.py`
        
        ```python
        from unittest.mock import Mock, patch
        
        from my_validation.datamodel import User, UserDict
        from my_validation.service import fetch_user_data, filter_active_users, validate_users
        
        def test_validate_users() -> None:
            """
            Tests that validate_users correctly filters out invalid data.
            """
            users_data: list[UserDict] = [
                {"id": 1, "name": "Alice", "is_active": True},  # valid
                {"id": None, "name": "Bob", "is_active": False},  # invalid id
                {"id": 3, "name": "", "is_active": True},  # invalid name
                {"id": -4, "name": "Charlie", "is_active": True},  # invalid negative id
                {"id": 4, "name": "David", "is_active": True},  # valid
            ]
        
            valid_users = validate_users(users_data)
        
            # 검증이 통과된 사용자만 남아야 함
            assert len(valid_users) == 2
            assert valid_users[0].name == "Alice"
            assert valid_users[1].name == "David"
        
        def test_filter_active_users() -> None:
            """
            Tests that filter_active_users correctly filters only active users.
            """
            users: list[User] = [
                User(id=1, name="Alice", is_active=True),
                User(id=2, name="Bob", is_active=False),
                User(id=3, name="Charlie", is_active=True),
            ]
        
            result: list[User] = filter_active_users(users)
        
            assert len(result) == 2
            assert result[0].name == "Alice"
            assert result[1].name == "Charlie"
        
        def test_fetch_and_validate_users() -> None:
            """
            Tests the complete flow of fetching and validating user data, including invalid cases.
            """
            mock_response = Mock()
            mock_response.status_code = 200
            mock_response.json.return_value = [
                {"id": 1, "name": "Alice", "is_active": True},
                {"id": None, "name": "Bob", "is_active": False},  # invalid
                {"id": 3, "name": "", "is_active": True},  # invalid
                {"id": -4, "name": "Charlie", "is_active": True},  # invalid negative id
                {"id": 4, "name": "David", "is_active": True},  # valid
            ]
        
            with patch("requests.get", return_value=mock_response):
                url = "http://example.com/api/users"
                users_data = fetch_user_data(url)
                valid_users = validate_users(users_data)
                active_users = filter_active_users(valid_users)
        
                assert len(active_users) == 2
                assert active_users[0].name == "Alice"
                assert active_users[1].name == "David"
        ```
        
- 아래와 같이 실행
    
    ```powershell
    poetry run pytest --cov=./ --cov-report=xml
    poetry run pytest --cov=./ --cov-report=html
    ```
    
- 아래와 같은 파일 생성
    - xml: `coverage.xml`
    - html: `htmlcov/index.html`

---

## 7. Docker Desktop

- Docker engine을 CLI/GUI로 사용할 수 있는 도구

### 7-1. Installation

- 홈페이지 접속
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/03e0d430-b122-4838-ac43-86dcd63bef9c/59df7bca-8098-4a83-9577-b8fcb994e84f.png)
    
- 아래 그림을 참조하여 설치. **`Close and restart` 버튼 클릭이후, PC 재부팅 됨**
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/0b828edb-1370-4bbf-8025-66e901c25363/image.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/0aa6fec1-f5c6-4276-beb8-d462c9ae239c/image.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/9d9701cb-a517-4261-9a17-b5249fceeb40/image.png)
    
- 재부팅 이후, Docker 실행. 아래 그림 참조하여 진행
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/ed9387f9-78b2-4181-acaa-9a876e778d9d/image.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/7d0a7a0c-5ed0-4230-bddb-71247dc06d39/image.png)
    
- 계정생성. 필수는 아니며 skip 가능
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/87895432-0b41-4b03-a3d7-b151d3cf55c8/image.png)
    
- 계정 생성시, 아래와 같이 고유한 `Username` 입력 필요
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/79dd0468-d6d9-48be-b4d5-d962d8669e89/image.png)
    
- 가입 완료후, 브라우저에서 아래와 같이 `Docker Desktop` 실행여부 문의
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/44093c6f-39de-48d8-9eb2-50c03467feed/image.png)
    
- 아래는 라이센스 동의 후 실행화면
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/cf99df50-74ba-4bca-a85d-eb5dd1f0535f/image.png)
    

### 7-2. Docker in VSCode

- 설치 이후, terminal에서 `docker ps -a` 명령어로 확인 가능
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/915379af-b702-4545-894f-9620c51fac6b/image.png)
    

---

## 8. DockerFile

- Container Image 생성과정을 정의하는 파일

### 8-1. Multi Stage Pattern

- Dockerfile에는 Docker Image를 만드는 방법이 명시. Image는 실행에 필요한 모든 파일들이 포함. Host는 Image를 다운 받은 뒤, 이를 container로 배포
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/b4f59809-fe8e-408e-8966-7ba4a3c7395f/2334b358-336d-450b-9433-e30ec3e0acac.png)
    
- Docker Image의 크기는 작을수록 배포에 유리. 실행에 필요한 파일들만 포함되도록, Image build의 단계를 구분지어 명시
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/1735d4d9-4203-4dd3-ba4a-1743a74ea225/68dcee12-6d27-4224-a731-950fcf96b1a6.png)
    
- 아래와 같이, 보통 `builer`, `release` 로 구분지어서, `builder` 에는 실행에 필요한 패키지들을 준비하며, `release`는 해당 파일들을 복사하여 사용
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/6bee83c9-06f9-4588-930b-74ec8d89a856/f4a3e907-1648-4631-9cfc-6efa54b8a8b6.png)
    

### 8-2. DockerFile

- 아래의 파일 추가
    - `main.py`
        
        ```python
        import time
        
        from my_validation.service import fetch_user_data, filter_active_users, validate_users
        
        def main():
            url = "http://example.com/api/users"
        
            while True:
                # 1. 사용자 데이터를 가져옴
                try:
                    users_data = fetch_user_data(url)
                except RuntimeError as e:
                    print(f"Error fetching user data: {e}")
                    time.sleep(60)  # 실패 시 1분 대기 후 다시 시도
                    continue
        
                # 2. 데이터를 검증하여 유효한 사용자만 필터링
                valid_users = validate_users(users_data)
        
                # 3. 활성화된 사용자만 필터링
                active_users = filter_active_users(valid_users)
        
                # 4. 결과 출력
                print("Active Users:")
                for user in active_users:
                    print(f"ID: {user.id}, Name: {user.name}, Active: {user.is_active}")
        
                # 5. 일정 시간 대기 (예: 5분)
                time.sleep(300)  # 300초(5분)마다 다시 실행
        
        if __name__ == "__main__":
            main()
        ```
        
    - `Dockerfile`
        
        ```docker
        FROM python:3.11-slim-buster AS builder
        
        RUN apt-get update && apt-get install -y --no-install-recommends \
            gcc \
            libpq-dev \
            && rm -rf /var/lib/apt/lists/*
        
        WORKDIR /app
        COPY pyproject.toml poetry.lock ./
        
        RUN pip install --no-cache-dir poetry poetry-plugin-export
        RUN poetry export -f requirements.txt \
            --output requirements.txt \
            --without-hashes \
            && pip install --no-cache-dir --user -r requirements.txt
        
        FROM python:3.11-slim-buster AS release
        
        RUN apt-get update && apt-get install -y --no-install-recommends \
            libpq-dev \
            && apt-get clean && rm -rf /var/lib/apt/lists/*
        
        COPY --from=builder /root/.local /root/.local
        ENV PATH=/root/.local/bin:$PATH
        
        WORKDIR /app
        
        COPY ./basic_ci .
        COPY ./main.py .
        
        ENTRYPOINT ["python", "main.py"]
        ```
        

### 8-3. Docker Build

- 아래 명령어로 container image build
    
    ```bash
    docker build 
    ```
    

---

## 9. GHCR (GitHub Container Registry)

- Github에서 제공하는 Container Registry
- 특정 용량에 대해 무료로 사용가능

### 9-1. Signup Github

- https://github.com/
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/c6fe2f9f-a7cd-4e81-8705-cbfdc45c7c41/bcfb9dbc-ba53-4b28-a3de-d994be112752.png)
    
- 아래 단계를 거쳐 가입
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/6a890d8a-eaf2-4b49-a2d9-725c98d39155/487fc3d9-0cf7-47fb-b18e-ad3b9ce3e3c7.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/43f95e34-dd07-468e-bb4a-b2812db187ff/bec65a7e-ed18-4a8b-bd90-3c593b33f5eb.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/af68a81c-9cdc-48c8-b945-8aa095675707/image.png)
    

### 9-2. Plan

- 아래와 같이 무료제공
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/a81e1af7-e237-41de-aa03-98345633e9e6/image.png)
    

### 9-3. Personal Access Token

- CI/CD 실행에는 access token 필요
- Github package는 Classic Token만 지원
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/4db22b81-aadd-49e6-ae79-0d27addb56c7/image.png)
    
- Profile에서 `Developer settings` 클릭
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/e883525a-7d5c-4e6c-a70d-2a35ea67b7ab/image.png)
    
- Personal access tokens → Token (classic) → Generate new token → Generate new token (classic)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/d4218b4a-53e2-4b79-adc1-e07e03885d59/image.png)
    
- Confirm access. `Use your password` 를 이용할 수도 있음
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/b4d2eb64-5b38-462f-b08e-59df33011058/image.png)
    
- 아래그림을 참고하여 권한 설정
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/7950b301-2eab-448e-8a02-969dd950c67f/image.png)
    
    > **⚠️ NOTE:** *실습 도중 5%정도의 인원이 `workflow` 권한도 필요한 경우 발생*
    > 
- Perosnal access token 생성. 아래그림 참고
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/e69158ae-f37f-4377-900d-0f1c12efe1c7/image.png)
    
- 이후 token이 생성되며, 아래 화면 이후로는 token 값이 보이지 않음. 복사하여 보관
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/efa35878-514e-4b50-aed0-d407e7ba41eb/image.png)
    
- 이후, git 저장소로 이동한 뒤, 아래그림을 참고하여 repository secret 등록버튼 클릭
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/82927c20-a3db-42e9-a858-fae91f8e8226/image.png)
    
- 아래 그림을 참고하여, 생성한 token 입력후 secret 으로 저장
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/53888172-ac62-4fcf-ae06-cd3c5de4e066/image.png)
    
    > **⚠️ NOTE:** *Secret 변수의 이름은 github actions 에서 변수 접근시 사용*
    > 
- 아래그림과 같이 지정한 이름으로 secret 변수가 등록된것 확인 가능
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/e1542656-a072-4a5e-b244-0433eb49ca4f/image.png)
    

---

## 10. CI Workflow - Github Action

- 자동화 뿐만 아니라, 빠른 피드백을 받을수 있는 개발방식
- Github Actions은 Local에서 수행된 내용이 github에서 제공하는 VM에서 수행되는 것

### 10-1. Create Git Repo

- New 버튼 클릭하여 생성
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/82551988-17ea-4716-9953-25ec1f018bb3/image.png)
    
- 필수 사항을 입력하고 git 저장소 생성
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/167bfde4-2287-4b9d-b1ca-fe84912c6ca6/image.png)
    
- 생성 후, 아래와 같은 화면이 나타남. 아래 그림에 나타난 주소 복사
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/80e45d69-4ab0-4171-b6d9-92163e20425e/image.png)
    
- `git clone <git repo address>` 를 수행하여 생성한 repo 다운로드

### 10-2. Create an Workflow

- Workflow는 git 저장소 최상단에 위치한 `.github` 폴더 아래에 위치
- 아래 경로 참고를 참고하여, `basic-ci.yaml` 파일 생성
    
    ```
    .github
    └── workflows
        └── basic-ci.yaml
    ```
    
- 아래는 해당 파일에 입력될 초기 github actions 스크립트. 특정 경로에 해당하는 파일들에 변화가 생길시, 이후 작성할 job 들이 수행
    
    ```yaml
    name: Python CI/CD
    
    on:
      push:
        branches: [main]
        paths:
          - ".github/workflows/basic-ci.yaml"
          - "basic-ci/**"
    
    env:
      REGISTRY: ghcr.io
      
    # jobs: ...
    ```
    

### 10-3. `git add`

- *“Git에서 변경사항을 커밋하기 전, 먼저 스테이징 영역에 추가”*. 이를 'Staging'이라고 하며, 변경사항을 선별하고 검토하는 중간 단계 역할
- Staging의 주요 목적:
    - 커밋할 변경사항을 선별적으로 선택
    - 변경사항을 검토하고 확인할 수 있는 중간 단계를 제공
    - 관련 변경사항을 그룹화하여 의미 있는 커밋 생성
- 아래는 `git` 명령어 기반의 staging 관리
    - `git add` 명령어를 사용하여 파일을 스테이징 영역에 추가
        
        ```bash
        git add <file>  # 특정 파일을 스테이징 영역에 추가
        git add .  # 현재 디렉토리의 모든 변경사항을 스테이징 영역에 추가
        git add -p  # 변경사항을 대화식으로 선택하여 스테이징
        ```
        
    - 스테이징된 파일 확인:
        
        ```bash
        git status  # 스테이징된 파일과 스테이징되지 않은 변경사항 확인
        ```
        
    - 스테이징 취소:
        
        ```bash
        git reset <file>  # 특정 파일의 스테이징 취소
        git reset  # 모든 스테이징된 변경사항 취소
        ```
        
- 그 외 `tig` 라는 CLI 도구 사용가능. Git 명령어를 더 직관적이고 시각적으로 사용할 수 있음. 보통 git 설치시 같이 사용 가능
- 아래는 설치 명령어
    
    ```bash
    # Ubuntu/Debian
    sudo apt-get install tig
    
    # macOS (Homebrew)
    brew install tig
    
    # CentOS/RHEL
    sudo yum install tig
    
    # Windows (PowerShell)
    winget install msys2.msys2
    ## Restart PowerShell after MSYS2 installation, then run:
    msys2 -c 'pacman -Syu --noconfirm && pacman -S tig --noconfirm'
    ```
    
- `tig status` 명령어로 스테이징을 관리. 아래는 관련 설명
    - `tig status` 모드에서 파일 스테이징:
        
        ```
        u: 파일 스테이징 (git add와 동일)
        !: 파일 스테이징 취소 (git reset과 동일)
        ```
        
    - `tig status` 모드에서 변경사항 확인:
        
        ```
        Enter: 선택한 파일의 diff 보기
        j/k: 파일 목록 위/아래로 이동
        ```
        
    - `tig status` 모드 종료:
        
        ```
        q: tig status 모드 종료
        ```
        

### 10-4. `git commit`

- commit은 로컬 저장소에 변경사항을 기록하는 작업
- `git commit` 명령어로 스테이징된 변경사항을 commit
    
    ```bash
    git commit -m "commit message"
    ```
    
- 일반적으로 commit message는 `[태그]: [메시지] (#이슈번호)` 형식으로 작성
    
    ```bash
    feat: 새로운 로그인 기능 추가 (#1)
    ```
    
    - **태그**: 변경사항의 유형을 나타내며, 일반적으로 다음과 같은 태그를 사용합니다:
        - `feat`: 새로운 기능 추가
        - `fix`: 버그 수정
        - `docs`: 문서 수정
        - `style`: 코드 포맷팅, 세미콜론 누락 등, 코드 의미에 영향을 주지 않는 변경
        - `refactor`: 코드 리팩토링, 기능 변경 없음
        - `test`: 테스트 추가 또는 수정
        - `chore`: 빌드 업무, 패키지 매니저 설정 등
    - **메시지**: 간결하고 명확하게 변경사항을 설명하며, 보통 명령형으로 작성
    - **이슈 번호**: 해당 커밋이 관련된 이슈 번호. 이슈 번호를 포함하면 자동으로 이슈와 연동되어 작업 추적이 용이
- (선택사항) `tig`를 사용하여 commit 히스토리를 확인 가능
    
    ```bash
    tig  # commit 히스토리 표시
    ```
    

### 10-5. `git push`

- 처음 푸시하는 경우 `-u` 옵션을 사용하여 upstream branch를 설정
    
    ```bash
    git push -u origin main
    ```
    
- 이후, `git push` 명령어를 사용하여, commit 내역을 원격 저장소에 반영
    
    ```bash
    git push
    # git push origin main  # 암묵적으로 아래와 같은 명령어
    ```
    
- 푸시 후 `tig`를 사용하여 원격 저장소의 변경사항을 확인
    
    ```bash
    tig origin/main  # origin/main 브랜치의 커밋 히스토리 표시
    ```
    

### 10-6. Prepare Exercise Files

- `basic-ci` 폴더 생성
- `4-2` 에서 다운받은 git 저장소에서, 아래 목록에 해당하는 파일들을 해당 폴더로 복사
    
    ```bash
    basic-ci/basic_ci/__init__.py
    basic-ci/basic_ci/datamodel.py
    basic-ci/basic_ci/service.py
    basic-ci/main.py
    basic-ci/poetry.lock
    basic-ci/pyproject.toml
    basic-ci/requirements.txt
    basic-ci/tests/__init__.py
    basic-ci/tests/test_service.py
    ```
    

### 10-7. Test

- Test 단계에서는 미리 설정해 놓은 test 코드들을 수행
- 아래는 test job이 포함된 github actions. `6. Validation in Python` 에서 수행한 내역이 github의 VM 에서 수행되는 것
    
    ```yaml
    name: Python CI/CD
    
    on:
      push:
        branches: [main]
        paths:
          - ".github/workflows/basic-ci.yaml"
          - "basic-ci/**"
    
    env:
      REGISTRY: ghcr.io
    
    jobs:
      test:
        runs-on: ubuntu-latest
        env:
          PROJECT_DIR: basic-ci
    
        steps:
          - uses: actions/checkout@v2
    
          - name: Extract Python version from pyproject.toml
            run: |
              PYTHON_VERSION=$(grep -Po '(?<=python = ")[^"]*' ${{ env.PROJECT_DIR }}/pyproject.toml | sed 's/\^//')
              echo "Python version extracted: $PYTHON_VERSION"
              echo "PYTHON_VERSION=$PYTHON_VERSION" >> $GITHUB_ENV
    
          - name: Set up Python
            uses: actions/setup-python@v2
            with:
              python-version: ${{ env.PYTHON_VERSION }}
    
          - name: Install Poetry
            run: |
              curl -sSL https://install.python-poetry.org | python3 -
              echo "export PATH=$HOME/.local/bin:$PATH" >> $GITHUB_ENV
    
          - name: Install dependencies (dev)
            run: |
              cd ${{ env.PROJECT_DIR }}
              poetry install
    
          - name: Run tests and collect coverage
            run: |
              cd ${{ env.PROJECT_DIR }}
              poetry run pytest --cov=./ --cov-report=xml
            continue-on-error: true
    ```
    
    > **⚠️ NOTE:** `*continue-on-error` 는 test가 실패해도 다음 단계로 진행되도로 설정. 보통은 해당 옵션을 넣지 않음*
    > 
- 아래는 각 step에 대한 설명
    
    
    | Step Name | Action/Command | Description (설명) |
    | --- | --- | --- |
    | Checkout Code | `uses: actions/checkout@v2` | git repo에서 소스 코드를 체크아웃 |
    | Extract Python Version | `run: grep -Po '(?<=python = ")[^"]*'` | `pyproject.toml`에서 Python 버전을 추출 |
    | Set Up Python | `uses: actions/setup-python@v2` | 환경에 지정된 Python 버전을 설정 |
    | Install Poetry | `run: curl -sSL <https://install.python-poetry.org` | Poetry 패키지 관리자를 설치 |
    | Install Dependencies | `run: poetry install` | Poetry를 사용하여 개발 모드로 프로젝트 의존성을 설치 |
    | Run Tests and Collect Coverage | `run: poetry run pytest --cov=./ --cov-report=xml` | pytest를 사용하여 테스트를 실행하고 커버리지 데이터를 수집 |
    | Upload Coverage to Codecov | `uses: codecov/codecov-action@v3` | Codecov에 테스트 커버리지 결과를 업로드 |

### 10-8. Build

- Build 단계에서는 배포에 사용되는 artifact를 생성
- 아래는 build job이 포함된 github actions. `8. Dockerfile` 의 내용이 github VM에서 수행
    
    ```yaml
      build:
        runs-on: ubuntu-latest
        needs:
          - test
        permissions:
          contents: read
          packages: write
        env:
          PROJECT_DIR: basic-ci
    
        steps:
          - uses: actions/checkout@v2
    
          - name: Set up Docker Buildx
            uses: docker/setup-buildx-action@v3
    
          - name: Log into registry
            uses: docker/login-action@v3
            with:
              registry: ${{ env.REGISTRY }}
              username: ${{ github.actor }}
              password: ${{ secrets.GHCR_TOKEN }}
    
          - name: Build and push Docker image
            working-directory: ./${{ env.PROJECT_DIR }}
            run: |
              docker buildx build . \
                --platform linux/amd64 \
                --push \
                -t ${{ env.REGISTRY }}/${{ github.actor }}/practice/${{ env.PROJECT_DIR }}:latest
    ```
    
- 아래는 각 step에 대한 설명
    
    
    | Step Name | Action/Command | Description (설명) |
    | --- | --- | --- |
    | actions/checkout@v2 | `uses: actions/checkout@v2` | git repo에서 소스 코드를 체크아웃 |
    | Set up Docker Buildx | `uses: docker/setup-buildx-action@v3` | Docker Buildx 사용준비 |
    | Log into registry | `uses: docker/login-action@v3` | Log into Registry |
    | Build and push Docker image | `run: docker buildx build . --push` | Build and Push Docker Image |
- Build 성공시, 메인페이지의 `Packages` 에서 빌드된 패키지 확인 가능
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/dab55d71-1f96-4518-9d6e-727d1fa062d6/image.png)
    

### 10-9. Deploy

- Build된 artifacts를 배포하는 단계
- 보통 해당 단계에서 commit id나 버전을 다른 repository에 반영
- 아래는 간단한 배포 예제
    
    ```yaml
      deploy:
        runs-on: ubuntu-latest
        needs:
          - test
          - build
        env:
          PROJECT_DIR: basic-ci
    
        steps:
          - uses: actions/checkout@v2
    
          - name: Deploy application
            run: |
              cd ${{ env.PROJECT_DIR }}
              echo "Deploying version ${{ github.event.inputs.version }} to ${{ github.event.inputs.environment }} environment"
    ```
    
- 아래는 각 step에 대한 설명
    
    
    | Step Name | Action/Command | Description (설명) |
    | --- | --- | --- |
    | Checkout Code | `uses: actions/checkout@v2` | git repo에서 소스 코드를 체크아웃 |
    | Deploy Application | `run: echo "Deploying version...` | 워크플로 디스패치 입력으로부터 환경 및 버전을 지정하여 애플리케이션을 배포 |

### 10-10. Test/Build/Deploy

- 아래는 모든 job이 포함된 workflow 파일
    
    ```yaml
    name: Python CI/CD
    
    on:
      push:
        branches: [main]
        paths:
          - ".github/workflows/basic-ci.yaml"
          - "basic-ci/**"
    
      workflow_dispatch:
        inputs:
          environment:
            description: "Which environment to deploy to"
            required: false
            default: "dev"
          version:
            description: "Version to deploy"
            required: false
            default: "latest"
    
    env:
      REGISTRY: ghcr.io
    
    jobs:
      test:
        runs-on: ubuntu-latest
        env:
          PROJECT_DIR: basic-ci
    
        steps:
          - uses: actions/checkout@v2
    
          - name: Extract Python version from pyproject.toml
            run: |
              PYTHON_VERSION=$(grep -Po '(?<=python = ")[^"]*' ${{ env.PROJECT_DIR }}/pyproject.toml | sed 's/\^//')
              echo "Python version extracted: $PYTHON_VERSION"
              echo "PYTHON_VERSION=$PYTHON_VERSION" >> $GITHUB_ENV
    
          - name: Set up Python
            uses: actions/setup-python@v2
            with:
              python-version: ${{ env.PYTHON_VERSION }}
    
          - name: Install Poetry
            run: |
              curl -sSL https://install.python-poetry.org | python3 -
              echo "export PATH=$HOME/.local/bin:$PATH" >> $GITHUB_ENV
    
          - name: Install dependencies (dev)
            run: |
              cd ${{ env.PROJECT_DIR }}
              poetry install
    
          - name: Run tests and collect coverage
            run: |
              cd ${{ env.PROJECT_DIR }}
              poetry run pytest --cov=./ --cov-report=xml
            continue-on-error: true
    
          - name: Upload coverage to Codecov
            uses: codecov/codecov-action@v3
            with:
              token: ${{ secrets.CODECOV_TOKEN }}
              flags: ${{ env.PROJECT_DIR }}
              file: ${{ env.PROJECT_DIR }}/coverage.xml
              name: ${{ env.PROJECT_DIR }}-coverage-report
    
      build:
        runs-on: ubuntu-latest
        needs:
          - test
        permissions:
          contents: read
          packages: write
        env:
          PROJECT_DIR: basic-ci
    
        steps:
          - uses: actions/checkout@v2
    
          - name: Set up Docker Buildx
            uses: docker/setup-buildx-action@v3
    
          - name: Log into registry
            uses: docker/login-action@v3
            with:
              registry: ${{ env.REGISTRY }}
              username: ${{ github.actor }}
              password: ${{ secrets.GHCR_TOKEN }}
    
          - name: Build and push Docker image
            working-directory: ./${{ env.PROJECT_DIR }}
            run: |
              docker buildx build . \
                --platform linux/amd64 \
                --push \
                -t ${{ env.REGISTRY }}/${{ github.actor }}/practice/${{ env.PROJECT_DIR }}:latest
    
      deploy:
        runs-on: ubuntu-latest
        needs:
          - test
          - build
        env:
          PROJECT_DIR: basic-ci
    
        steps:
          - uses: actions/checkout@v2
    
          - name: Deploy application
            run: |
              cd ${{ env.PROJECT_DIR }}
              echo "Deploying version ${{ github.event.inputs.version }} to ${{ github.event.inputs.environment }} environment"
    
    ```
    

---

## 11. CD w/ ArgoCD

- Continuous Delivery의 실질적인 표준

### 11-1. ArgoCD

- [https://argocd.gitops.mrml.xyz](https://argocd.gitops.mrml.xyz/) 접속. 아래와 같은 화면이 나타남
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/24bdb3bc-a174-4f80-94d7-f7347bb70f81/image.png)
    
- `LOG IN VIA GITHUB` 클릭시, 아래와 같은 화면이 나타남
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/a0541c50-9a29-4cf4-be03-9c583975f8ab/image.png)
    
- 로그인 후, Github 계정 인증
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/ebaf8cdd-4580-4a08-a6a0-c25241a2dcea/image.png)
    
- 접속 후, 아래와 같은 화면 확인 가능
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/15b88bfc-a8df-4a58-831c-0c06f6f310cf/image.png)
    

### 11-2. ArgoCD Source

- ArgoCD의 Source는 애플리케이션 정의를 저장하는 원격 저장소
- 주로 Git 저장소를 활용하며, Helm이나 S3 등도 Source로 사용
- **Source에는 주로 Kubernetes 리소스를 정의하는 manifest 파일**들이 저장
- ArgoCD는 Source의 변경사항을 주기적으로 감지하고 동기화
- 실제 클러스터의 상태와 Source에 정의된 상태를 비교하여 차이가 있으면 자동으로 조정

### 11-3. Creating SSH Key Pair for Integration

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
        

### 11-4. Adding SSH Public Key to GitHub

- GitHub에는 SSH key pair 에서, public key만 등록 필요
- `11-3`를 통한 Public key는 `~/.ssh/id_ed25519.pub` 에 위치
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
    

### 11-5. Connecting GitHub Repository to ArgoCD

- **ArgoCD에 연동할 Github 저장소**로 이동. 아래 그림을 참고하여 git repository 주소 복사
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/8f54a27f-dfc0-44e6-a99c-1531d689239b/image.png)
    
    > **⚠️ NOTE:** *위 예시에서는 `git@github.com:GithubAccount/practice_devops.git` 주소. 이는 아래에서 ArgoCD와 연동시 사용*
    > 
- ArgoCD에 접속. `Settings` → `Repositories` 순으로 클릭. 아래 그림 참조
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/b703780c-e8a0-466d-a35f-bb8ca22d6a02/image.png)
    
- 아래 그림을 참고하여, `CONNECT REPO` 클릭
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/912fadb7-28a7-4c7a-9b81-1e4717c4c79e/image.png)
    
- 아래그림을 참고하여 연결설정. `4` 번에는 github의 저장소 주소 사용. `5` 번은 SSH private key 사용.
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/0c335a1a-cf9f-4dbe-8377-ec1131315643/image.png)
    
    > **⚠️ NOTE**: `*3`번 Project는 애플리케이션을 그룹화하는 단위로, 각 project마다 권한과 접근 가능한 리소스가 다름. 그리고 사용자별로 접근 가능한 project가 다름*
    > 
    
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
    

### 11-6. Simple Nginx Deployment

- ArgoCD가 설치된 Kubernetes에도 ArgoCD를 이용해서 application 배포 가능
- 아래는 여러 Kubernetes resource가 정의된 manifest. Nginx 배포에 필요한 요소들이 정의. 빨간색 요소를 수정하여 등록
    
    ```yaml
    apiVersion: v1
    kind: Namespace
    metadata:
      **name: <본인 영어이름 소문자>**
    ---
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: nginx-html
      **namespace: <본인 영어이름 소문자>**
    data:
      index.html: |
        <html>
        <head><title>Hello DevOps</title></head>
        <body><h1>Hello!!! DevOps</h1></body>
        </html>
    ---
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: nginx-deployment
      **namespace: <본인 영어이름 소문자>**
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
              volumeMounts:
                - name: html-config
                  mountPath: /usr/share/nginx/html/index.html
                  subPath: index.html
          volumes:
            - name: html-config
              configMap:
                name: nginx-html
    ---
    apiVersion: v1
    kind: Service
    metadata:
      name: nginx-service
      **namespace: <본인 영어이름 소문자>**
    spec:
      type: NodePort
      selector:
        app: nginx
      ports:
        - protocol: TCP
          port: 80
          targetPort: 80
          **nodePort: # 30085 ~ 31200 사이의 숫자 선택. 타인과 겹칠 수 있음**
    ```
    
    > **⚠️ NOTE:** `*containers` 에서 `image` 의 주소는 기본적으로 DockerHub에서 가져옴. Private container registry 사용시, 주소의 양식이 다름*
    > 
- 해당 manifest를 ArgoCD와 연동된 Github 저장소에 업로드. 파일 저장 후, 아래 명령어 실행
    
    ```bash
    git add .
    git commit -m 'Upload CD source'
    git push
    ```
    
- 아래의 링크에서 관련내용 확인 가능
    - https://github.com/seungbaeji/practice_devops/tree/main/cd/simple-nginx
        
        [practice_devops/cd/simple-nginx at main · seungbaeji/practice_devops](https://github.com/seungbaeji/practice_devops/tree/main/cd/simple-nginx)
        
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/a8f3b3bf-5cef-422a-9341-02383d269fb9/de3895bf-6a17-48ce-882a-01296d85a160.png)
    

### 11-7. Create a Simple Application

- ArgoCD에 로그인 후, `Applications` → `NEW APP` 순서로 클릭. 아래 그림 참조
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/5317101f-3702-4dd3-ba6c-661700eb8f5c/image.png)
    
- Application 설정화면은 크게 general, source, destination 세 가지로 구분. 아래그림 참조
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/e773169b-f91c-4b71-99bd-bd603930612d/image.png)
    
- 아래는 general 설정 화면. `Application Name`은 고유해야 하며, `Sync` 정책을 설정 가능
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/dc62aa92-79fd-4330-ab8c-a7a4db6a4a95/image.png)
    
    > **⚠️ NOTE:** *Project는 추가 설정 가능. 초기에는 `default` 라는 모든 권한을 갖는 project만 존재. 현재는 `tta-devops` project만 선택 가능하도록 설정 됨*
    > 
- 아래는 source 설정 화면. 앞서 연결한 git repo 선택 후, `Path`는 Kubernetes manifest가 저장된 폴더의 경로 입력
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/db91f666-9295-4485-8803-9d838a086efa/77e1a1a6-78bd-4c5e-bdbe-0958ebd02fb8.png)
    
- 아래는 destination 설정 화면. 현재는 별도의 Kubernetes cluster에 배포. `Namespace` 는 Kubernetes manifest에서 정의한 namespace 이름 입력
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/52fb8d29-480b-42f5-af13-22456e4e5805/image.png)
    
    > **⚠️ NOTE:** *Cluster URL은 주어진 목록에서 선택하는 것이며, 목록은 Project마다 다름. Kubernetes에 ArgoCD 초기 설치시, `https://kubernetes.default.svc` 라는 ArgoCD가 설치된 Kubernetes cluster만 선택 가능*
    > 
    
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
    

---

## 12. Codecov

- Coverage Test 추적 도구

### 11-1. What’s Codecov?

- Codecov는 소프트웨어 개발 프로젝트의 코드 커버리지를 측정하고 보고하는 도구
- Github과 연동시, 아래와 같은 dashboard를 제공
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/bb66f4aa-dca2-49d8-8483-5323c3cc3142/image.png)
    
- 코드설정 이외에, 아래와 같이 GitHub App으로도 설치 필요
    
    ![Ref. https://github.com/apps/codecov](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/8cee7a86-4e4d-4711-9fda-b6dd11b702be/image.png)
    
    Ref. https://github.com/apps/codecov
    

### 11-2. Plans

- 1인 사용자에게는 무료제공. Plan은 아래와 같음
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/a16c471a-4a0e-463d-b230-fe171867a4d0/image.png)
    

### 11-3. Issue Access Token

- https://about.codecov.io/ 주소로 접속하여, 회원가입. 아래 그림 참조
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/5e17410c-188c-46bd-8052-2d611a6c32bc/image.png)
    
- `Github` 선택시, 아래와 같은 화면이 나타남. `Authorize Codecov` 를 선택하여 진행
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/0d6005a7-ccd0-465d-8855-a6942008eb6f/9d29973b-77d2-4956-bf46-be55aea9fc1c.png)
    
- 이후, 아래그림을 참고하여 가입진행
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/4f5d375d-e8b6-46a7-89b1-2b8b93224812/image.png)
    
- 이후, `Repos` 탭 선택. Github의 모든 git repo가 나타남. 아래그림 참조하여 설정화면 진입
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/cabdf713-8884-4292-a648-12d5e05d2cb1/image.png)
    
- 설정화면 진입시, 아래와 같이 화면이 나타남. `CODECOV_TOKEN` 을 복사
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/d623565d-1c50-45bb-919e-b9a51ac77a31/image.png)
    

### 11-4. Register Access Token to GitHub

- Github으로 돌아와서, git 저장소의 설정화면 진입. 아래그림 참조하여 secret 등록
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/4e216f05-81e5-45f1-ad34-0e0fec05dfeb/image.png)
    
- `CODECOV_TOKEN` 을 아래 그림 참고하여 secret으로 등록
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/f748c1af-492e-49d5-bcd4-ddfe17142118/image.png)
    
- 아래는 등록 후 화면
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/997b845b-d70c-4672-81ef-496e8c36a930/image.png)
    

### 11-5. Update Test Workflow

- Test단계에서 마지막에서 codecov 로 결과를 전송. 아래 actions 파일 참고
    
    ```yaml
    name: Python CI/CD
    
    on:
      push:
        branches: [main]
        paths:
          - ".github/workflows/basic-ci.yaml"
          - "basic-ci/**"
      pull_request:
        branches: [main]
        paths:
          - ".github/workflows/basic-ci.yaml"
          - "basic-ci/**"
      workflow_dispatch:
        inputs:
          environment:
            description: "Which environment to deploy to"
            required: false
            default: "dev"
          version:
            description: "Version to deploy"
            required: false
            default: "latest"
    
    env:
      REGISTRY: ghcr.io
    
    jobs:
      test:
        runs-on: ubuntu-latest
        env:
          PROJECT_DIR: basic-ci
    
        steps:
          - uses: actions/checkout@v2
    
          - name: Extract Python version from pyproject.toml
            run: |
              PYTHON_VERSION=$(grep -Po '(?<=python = ")[^"]*' ${{ env.PROJECT_DIR }}/pyproject.toml | sed 's/\^//')
              echo "Python version extracted: $PYTHON_VERSION"
              echo "PYTHON_VERSION=$PYTHON_VERSION" >> $GITHUB_ENV
    
          - name: Set up Python
            uses: actions/setup-python@v2
            with:
              python-version: ${{ env.PYTHON_VERSION }}
    
          - name: Install Poetry
            run: |
              curl -sSL https://install.python-poetry.org | python3 -
              echo "export PATH=$HOME/.local/bin:$PATH" >> $GITHUB_ENV
    
          - name: Install dependencies (dev)
            run: |
              cd ${{ env.PROJECT_DIR }}
              poetry install
    
          - name: Run tests and collect coverage
            run: |
              cd ${{ env.PROJECT_DIR }}
              poetry run pytest --cov=./ --cov-report=xml
            continue-on-error: true
    
          - name: Upload coverage to Codecov
            uses: codecov/codecov-action@v3
            with:
              token: ${{ secrets.CODECOV_TOKEN }}
              flags: ${{ env.PROJECT_DIR }}
              file: ${{ env.PROJECT_DIR }}/coverage.xml
              name: ${{ env.PROJECT_DIR }}-coverage-report
    ```
    

### 11-6. Codecov Badge Config

- Codecov에서는 badge를 제공. 이는 README 와 같은 markdown 파일에 반영 가능
- Codecov 홈페이지에서, 설정된 git repo의 `Badges & Graphs` 로 이동. 아래그림 참조
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/3d92ab1f-f507-4b46-969d-d7ed134a4995/image.png)
    
- `README` 파일에 위 설정 파일을 입력. 추후 아래와 같은 뱃지 획득 가능
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/3e8f2aa4-fcd9-4aa7-a21d-8b555b9411be/image.png)
    

---