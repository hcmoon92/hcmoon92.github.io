# Day 02 | CI/CD Remind

---

> **⚠️ NOTE:** *Click **`cmd/ctrl`** + **`option/alt`** + **`T`** to expand all toggles*
> 

## 1. Prepare Env

- Linux VM 환경 접속 (Conda, Poetry, Git/Tig, Docker 등 설치됨)
- Github과 ssh key로 연동

### 1-1. VSCode Remote

- VSCode 실행 후, 아래에 표시된 빨간 박스 클릭
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/6966008a-eb2a-4799-bfa8-00ccaaa608b0/image.png)
    
- `Connec to Host...` 를 선택하여, 원격서버 정보 입력 준비
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/7ebdf84e-38e6-4155-ae31-f1d266bcc518/image.png)
    
- `Configure SSH Hosts...` 를 선택하여, ssh 정보 설정
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/298ca607-3f83-423c-9455-2a762be77046/image.png)
    
- `/Users/<USERNAME>/.ssh/config` 파일을 선택하여 ssh config 파일 편집
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/50ac54fe-1fbd-4861-aa4d-4c1bef336956/image.png)
    
- `User` 는 `usr1` ~ `usr20` 까지 존재. 아래를 참고하여 입력 후 저장
    
    ```bash
    Host 5.78.67.227
        HostName 5.78.67.227
        User usr<1-20>
    
    ```
    
- 이후 아래와 같이 설정된 서버를 선택 가능
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/ffa03b10-f565-4dca-bf22-6d7431dedc07/image.png)
    
- 이후, 원격서버에 접속된 상태로 VSCode 사용가능
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/b6416fd4-794e-410e-b048-a6ce54955f75/image.png)
    

### 1-2. Git Clone Repository

- 실습에 사용하려고 했던 git repository를 다운로드
- `git clone <git repo address>` 명령어를 이용하여 다운. 주소는 아래그림 참고
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/45c5e1d2-a61a-407d-b643-4ee546064c74/image.png)
    
- 아래그림과 같이, 원격 접속한 vscode의 터미널에서 실행
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/97fd5082-52c6-43eb-82a1-993fde2842dc/image.png)
    
- 이후, `Open Folder` 선택
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/e6e18619-3c02-4010-9d30-acc88ffc61ab/image.png)
    
- 아래그림을 참고하여, 본인의 다운받은 git repo directory를 선택
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/e662590d-3c55-4600-92f0-855ae698f51d/image.png)
    
- 아래 화면과 같이, git repo directory 기준으로 VSCode 설정
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/97067ea1-14cb-428a-bb6e-5daa942ab64a/image.png)
    
- 아래와 같이, 해당 repository에만 적용되는 설정값 반영
    
    ```bash
    git config user.email "you@example.com"
    git config user.name "Your Name"
    ```
    

### 1-3. `.gitignore`

- https://www.gitignore.io/ 페이지 접속. `python` 입력후, `Create` 버튼을 눌러 파일생성
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/8e9cc867-b95e-40ad-a60c-33ed5eba6da8/image.png)
    
- 아래와 같은 파일이 생성되며, 이는 git repo 디렉토리 아래에 `.gitignore` 파일로 저장
    
    ```bash
    # Created by https://www.toptal.com/developers/gitignore/api/python
    # Edit at https://www.toptal.com/developers/gitignore?templates=python
    
    ### Python ###
    # Byte-compiled / optimized / DLL files
    __pycache__/
    *.py[cod]
    *$py.class
    
    # C extensions
    *.so
    
    # Distribution / packaging
    .Python
    build/
    develop-eggs/
    dist/
    downloads/
    eggs/
    .eggs/
    lib/
    lib64/
    parts/
    sdist/
    var/
    wheels/
    share/python-wheels/
    *.egg-info/
    .installed.cfg
    *.egg
    MANIFEST
    
    # PyInstaller
    #  Usually these files are written by a python script from a template
    #  before PyInstaller builds the exe, so as to inject date/other infos into it.
    *.manifest
    *.spec
    
    # Installer logs
    pip-log.txt
    pip-delete-this-directory.txt
    
    # Unit test / coverage reports
    htmlcov/
    .tox/
    .nox/
    .coverage
    .coverage.*
    .cache
    nosetests.xml
    coverage.xml
    *.cover
    *.py,cover
    .hypothesis/
    .pytest_cache/
    cover/
    
    # Translations
    *.mo
    *.pot
    
    # Django stuff:
    *.log
    local_settings.py
    db.sqlite3
    db.sqlite3-journal
    
    # Flask stuff:
    instance/
    .webassets-cache
    
    # Scrapy stuff:
    .scrapy
    
    # Sphinx documentation
    docs/_build/
    
    # PyBuilder
    .pybuilder/
    target/
    
    # Jupyter Notebook
    .ipynb_checkpoints
    
    # IPython
    profile_default/
    ipython_config.py
    
    # poetry
    #   Similar to Pipfile.lock, it is generally recommended to include poetry.lock in version control.
    #   This is especially recommended for binary packages to ensure reproducibility, and is more
    #   commonly ignored for libraries.
    #   https://python-poetry.org/docs/basic-usage/#commit-your-poetrylock-file-to-version-control
    #poetry.lock
    
    .pdm.toml
    
    # PEP 582; used by e.g. github.com/David-OConnor/pyflow and github.com/pdm-project/pdm
    __pypackages__/
    
    # Celery stuff
    celerybeat-schedule
    celerybeat.pid
    
    # SageMath parsed files
    *.sage.py
    
    # Environments
    .env
    .venv
    env/
    venv/
    ENV/
    env.bak/
    venv.bak/
    
    # Spyder project settings
    .spyderproject
    .spyproject
    
    # Rope project settings
    .ropeproject
    
    # mkdocs documentation
    /site
    
    # mypy
    .mypy_cache/
    .dmypy.json
    dmypy.json
    
    # Pyre type checker
    .pyre/
    
    # pytype static type analyzer
    .pytype/
    
    # Cython debug symbols
    cython_debug/
    
    ### Python Patch ###
    # Poetry local configuration file - https://python-poetry.org/docs/configuration/#local-configuration
    poetry.toml
    
    # ruff
    .ruff_cache/
    
    # LSP config files
    pyrightconfig.json
    
    # End of https://www.toptal.com/developers/gitignore/api/python
    ```
    

### 1-4. Creating SSH Key Pair

- GitHub은 git 저장소에 접근할 때 보안 인증을 요구. 이를 SSH로 해결
- https://docs.github.com/ko/authentication/connecting-to-github-with-ssh 접속하여, `새 SSH 키 생성 및 ssh-agent에 추가` 클릭
    
    ![*ref. https://docs.github.com/ko/authentication/connecting-to-github-with-ssh*](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/697b4ff3-301a-427c-bad9-3069aa21ee98/image.png)
    
    *ref. https://docs.github.com/ko/authentication/connecting-to-github-with-ssh*
    
- 해당 Github 가이드라인을 따라, 아래의 명령어로 SSH 키 생성. `~/.ssh` 폴더에 key pair 생성
    
    ```bash
    ssh-keygen -t ed25519 -C "<MyGithubAccount@Email.com>" -f ~/.ssh/id_ed25519
    ```
    
- Console에서 위 명령어 실행시, 아래와 같은 화면 출력
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/18425ed1-42cf-42ff-bb31-4ff86e6e8528/image.png)
    
- `~/.ssh` 폴더 아래에는 아래와 같이 두개의 파일 생성
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/7f3c2cca-0084-497a-802b-d043929d60b1/image.png)
    
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
        

### 1-5. Adding SSH Public Key to GitHub

- GitHub에는 SSH key pair 에서, public key만 등록 필요
- `1-3`를 통한 Public key는 `~/.ssh/id_ed25519.pub` 에 위치
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
    

---

## 2. Python App

- CI 테스트를 위한 application

### 2-1. `poetry new`

- `poetry new my-app` 실행. 아래 구조로 파일들이 생성
    
    ```yaml
    my-app
    ├── my_app
    │   └── __init__.py
    ├── pyproject.toml
    ├── README.md
    └── tests
        └── __init__.py
    ```
    
- 아래의 구조로 `main.py` 파일 생성
    
    ```bash
    my-app
    ├── my_app
    **│   └── main.py**
    │   └── __init__.py
    ├── pyproject.toml
    ├── README.md
    └── tests
        └── __init__.py
    ```
    
- `main.py`는 아래와 같이 작성. `add` 라는 매우 단순한 기능을 정의
    
    ```python
    def add(a: int, b: int) -> int:
        """Adds two numbers and returns the result."""
        return a + b
    
    if __name__ == "__main__":
        result = add(2, 3)
        print(f"2 + 3 = {result}")
    ```
    
- `my-app` 폴더로 이동. `cd my-app` 명령어 수행. 이후, `python -m my_app.main` 명령어 실행. 실행시, 아래 그림과 같이 결과 출력
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/0e428f21-f29f-4242-93ac-b05d6b421b8a/image.png)
    

### 2-2. Test Cases

- 아래의 구조로 `test_main.py` 파일 생성
    
    ```bash
    my-app
    ├── my_app
    │   └── main.py
    │   └── __init__.py
    ├── pyproject.toml
    ├── README.md
    └── tests
        ├── __init__.py
        **└── test_main.py**
    ```
    
- `test_main.py`는 아래와 같이 작성. 기 개발한 `add`를 검증하는 기능
    
    ```python
    from my_app.main import add
    
    def test_add():
        assert add(2, 3) == 5
        assert add(-1, 1) == 0
        assert add(0, 0) == 0
    ```
    

### 2-3. Test

- Pytest를 이용해서 테스트 실행 및 결과 도출
- `poetry add --dev pytest pytest-cov` 를 실행.
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/e7507f52-cf1a-4a95-a785-a20bfa8e23ce/image.png)
    
- `pyproject.toml`파일에서, 개발 dependency에만 해당 패키지들이 추가
    
    ```yaml
    [tool.poetry]
    name = "my-app"
    version = "0.1.0"
    description = ""
    authors = ["XXXXXX XX <xxxxxx.xx@gmail.com>"]
    readme = "README.md"
    
    [tool.poetry.dependencies]
    python = "^3.10"
    
    **[tool.poetry.group.dev.dependencies]
    pytest = "^8.3.2"
    pytest-cov = "^5.0.0"**
    
    [build-system]
    requires = ["poetry-core"]
    build-backend = "poetry.core.masonry.api"
    ```
    
- 아래 명령어로 pytest 실행
    
    ```bash
    poetry run pytest
    poetry run pytest --cov=./ --cov-report=html
    ```
    

### 2-4. API Server Code

- 현재 아래와 같은 프로젝트 구조
    
    ```python
    my-app
    ├── my_app
    │   └── main.py
    │   └── __init__.py
    ├── pyproject.toml
    ├── README.md
    └── tests
        ├── __init__.py
        **└── test_main.py**
    ```
    
- `main.py` 파일을 아래와 같이 수정
    
    ```python
    from fastapi import FastAPI
    
    app = FastAPI()
    
    @app.get("/")
    async def read_root():
        return {"message": "Hello, World!"}
    
    @app.get("/items/{item_id}")
    async def read_item(item_id: int, q: str = None):
        return {"item_id": item_id, "query": q}
    ```
    
- `test_main.py` 파일을 아래와 같이 수정
    
    ```python
    from fastapi.testclient import TestClient
    from my_app.main import app
    
    client = TestClient(app)
    
    def test_read_root():
        response = client.get("/")
        assert response.status_code == 200
        assert response.json() == {"message": "Hello, World!"}
    
    def test_read_item():
        response = client.get("/items/1?q=test")
        assert response.status_code == 200
        assert response.json() == {"item_id": 1, "query": "test"}
    ```
    
- 아래 명령어로 필요한 패키지 추가
    
    ```bash
    poetry add fastapi uvicorn
    poetry add --dev httpx
    ```
    
- 아래 명령어로 test 진행
    
    ```bash
    poetry run pytest
    ```
    

### 2-5. Python Packaging

- `poetry` 를 이용하여 Python package를 쉽게 추출 가능
    
    ```bash
    poetry build
    
    poetry build -f wheel
    poetry build -f sdist
    ```
    
- `build` 시, 아래 경로로 패키지 생성
    
    ```bash
    my-app
    ├── dist
    │   ├── my_app-0.1.0-py3-none-any.whl
    │   └── my_app-0.1.0.tar.gz
    ```
    

---

## 3. Container Image

- Application을 배포할 수 있는 압축파일
- `docker build` 명령어를 이용하여 파일생성

### 3-1. DockerFile

- 아래와 같이 작성. Multi-stage pattern을 이용하여, builder에서는 python package를 생성
    
    ```docker
    # First stage: Build environment
    FROM python:3.12-slim AS builder
    WORKDIR /app
    
    # Poetry 설치 및 종속성 빌드
    RUN pip install poetry
    COPY pyproject.toml poetry.lock ./
    
    # 패키지 빌드
    COPY . .
    RUN poetry build -f wheel
    
    # Second stage: Runtime environment
    FROM python:3.12-slim
    WORKDIR /app
    
    # 빌드된 .whl 파일을 복사하고 설치
    COPY --from=builder /app/dist/*.whl .
    RUN pip install --no-cache-dir my_app-*.whl
    
    # FastAPI 서버 실행 - ENTRYPOINT와 CMD 분리
    # ENTRYPOINT는 container 실행시 반영되는 명령어. 이후 변경 불가
    # CMD는 container 실행시 반영되는 명령어. 하지만, 실행시 인자값으로 변경 가능
    ENTRYPOINT ["uvicorn", "my_app.main:app"]
    CMD ["--host", "0.0.0.0", "--port", "8000"]
    ```
    

### 3-2. `docker build`

- 아래를 참조하여 Dockerfile로 부터 container image build
    
    ```bash
    docker build . -t ghcr.io/<USERNAME>/<PACKAGENAME>:latest
    # ex) docker build . -t ghcr.io/seungbaeji/tta/my-app:latest
    ```
    
- 추후, Github Actions에서는 아래의 명령어를 활용하여 이미지 빌드
    
    ```bash
    docker buildx build . \
      --platform linux/amd64,linux/arm64 \
      --push \
      -t ghcr.io/${{ github.actor }}/${{ env.PACKAGE }}/${{ env.PROJECT_DIR }}:latest
    ```
    
    > ⚠️ **NOTE:** `*buildx` 명령어를 이용하여 보통 진행.*
    > 

### 3-3. `docker push`

- GitHub Container Registry에 container image 업로드시, 로그인 필요. 아래를 참고하여 로그인
    
    ```bash
    docker login ghcr.io \
    	-u <your-github-username> \
    	-p <your-personal-access-token>
    ```
    
- 원하는 container image 이름으로 container image 업로드. 아래 명령어 참고
    
    ```bash
    docker push docker.io/<username>/<package-name>:latest
    # ex) docker push ghcr.io/seungbaeji/tta/my-app:latest
    ```
    
- Login과 push 실행시, 아래화면과 같이 나타남
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/41d6e569-b64f-4537-b12f-b2907f49829e/image.png)
    
- 아래는 등록된 container image 화면
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/abf04ad3-001f-40cf-85da-8c34204f50b3/image.png)
    

### 3-4. `docker run`

- 생성한 container image로 부터 container 실행. 아래 참고
    
    ```bash
    docker run -p <host-port>:8000 \
    	--name my-api \
      <image-name>
    
    # docker run -p 30085:8000 --name my-api ghcr.io/seungbaeji/tta/my-app:latest
    ```
    
- `http://5.78.67.227:<host-port>/docs` 주소로 접속
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/be05d630-af33-4ce7-aa97-6905dec9081b/image.png)
    
- https://labs.play-with-docker.com/ 접속. Instance 생성 후, `docker run` 실행
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/c08b7433-aa61-4347-ad3b-32469f697d85/image.png)
    
    ```bash
    docker login ghcr.io -u <username> -p <pat-token>
    docker run -p 8000:8000 --name my-api <container-image-name>
    ```
    

---

## 4. Github Actions Basic

- **GitHub Actions**는 GitHub에서 제공하는 자동화된 CI/CD 플랫폼
- YAML 파일로 정의된 커스텀 워크플로우 생성 및 실행

### 3-1. Location

- Repository 최상단 `.github` 폴더 아래에 존재
    
    ```yaml
    .github
    `-- workflows
        |-- workflow_1.yaml
        `-- workflow_2.yaml
    ```
    

### 3-2. Concepts

- 아래는 간략한 전체 흐름이 담긴 workflow
    
    ```yaml
    name: Python CI/CD
    
    on:
      push:
        branches: [main]
        paths:
          - ".github/workflows/second-ci.yaml"
          - "second-ci/**"
    
    env:
      PACKAGE: practice
      PROJECT_DIR: my-ci
    
    jobs:
      test:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v2
    
      build:
        runs-on: ubuntu-latest
        needs:
          - test
        permissions:
          contents: read
          packages: write
    
        steps:
          - uses: actions/checkout@v2
    ```
    

### 3-3. `on`

- Code 변경을 감지하는 조건
- 아래는 `main` `branch의` 특정 `path` 의 파일들에 변경이 일어 났을 때
    
    ```yaml
    on:
      push:
        branches: [main]
        paths:
          - ".github/workflows/second-ci.yaml"
          - "second-ci/**"
    ```
    

### 3-4. `jobs`

- Job은 독립된 환경에서 실행되며, 특정 작업을 수행하는 여러 단계(Steps)를 포함
- 아래는 `test`, `build` Job이 담긴 workflow의 일부
    
    ```yaml
    jobs:
      test:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v2
    
      build:
        runs-on: ubuntu-latest
        needs:
          - test  # Test가 성공해야 동작
        permissions:
          contents: read
          packages: write
    
        steps:
          - uses: actions/checkout@v2
    ```
    

### 3-5. Variables

- 아래는 Github에서 사전정의된 variable
    
    
    | 변수 이름 | 설명 |
    | --- | --- |
    | `${{ github.actor }}` | 워크플로우를 트리거한 GitHub 사용자의 이름 |
    | `${{ github.repository }}` | 현재 리포지토리의 이름 (`owner/repository` 형식) |
    | `${{ github.event_name }}` | 워크플로우를 트리거한 이벤트의 이름
    예) `push`, `pull_request` |
    | `${{ github.ref }}` | 트리거 이벤트의 브랜치나 태그의 참조 경로
    예) `refs/heads/main`, `refs/tags/v1.0.0` |
    | `${{ github.workflow }}` | 현재 실행 중인 워크플로우의 이름 |
    | `${{ github.run_id }}` | 현재 워크플로우 실행의 고유 ID |
    | `${{ github.run_number }}` | 워크플로우가 실행된 횟수를 나타내는 실행 번호 |
    | `${{ github.sha }}` | 워크플로우를 트리거한 커밋의 SHA |
- 각 변수는 `${{ }}` 문법으로 접근

---

## 5. CI Workflow

- 아래와 같이 workflow 위치
    
    ```yaml
    .github
    `-- workflows
        |-- my-app-ci.yaml
    ```
    
- 아래 workflow 파일을 참조하여 작성
    
    ```yaml
    name: Python CI/CD
    
    on:
      push:
        branches: [main]
        paths:
          - ".github/workflows/my-app-ci.yaml"
          - "my-app/**"
    
    env:
      PACKAGE: tta
      REGISTRY: ghcr.io
    
    jobs:
      test:
        runs-on: ubuntu-latest
        env:
          PROJECT_DIR: my-app
    
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
    
      build:
        runs-on: ubuntu-latest
        needs:
          - test
        permissions:
          contents: read
          packages: write
        env:
          PROJECT_DIR: my-app
    
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
                -t ghcr.io/${{ github.actor }}/${{ env.PACKAGE }}/${{ env.PROJECT_DIR }}:latest
    
    ```
    

---

## 6. CD w/ ArgoCD

- ArgoCD가 single source of truth로 사용할 Source 폴더 설정

### 6-1. Source

- `my-app-cd` 라는 폴더를 ArgoCD의 Source로 결정. 아래와 같은 프로젝트 폴더 구조
    
    ```yaml
    ├── my-app
    └── my-app-cd
    ```
    
    > **⚠️ NOTE:** *현재는 Source Code와 CD의 Source가 같은 repository에 존재. 하지만, 보통 별도의 다른 repository로 관리*
    > 
- https://argocd.gitops.mrml.xyz/ 페이지 접속
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/16403745-4036-49a5-bb36-d5a4c547d148/image.png)
    
- 로그인 후, Source Repository 등록. 아래 그림 참조
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/169ebf82-3764-461f-8f46-1c52b6087da6/image.png)
    
- 아래그림과 같이, ArgoCD에서 SSH를 이용하여 git repository 연결. 이때 SSH key pair가 사용
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/37a6cab6-9bc1-44d7-87e6-6d1801039e85/image.png)
    
    ```yaml
    ssh-keygen -t ed25519 -C "<MyGithubAccount@Email.com>" -f ~/.ssh/id_ed25519
    ```
    
- `CONNECT REPO` 버튼을 클릭하여 repository 연동. 연동시 위의 key값 반영 필요
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/392190ab-dcf1-498b-b64d-28ad0533f444/image.png)
    

### 6-2. `ImagePullSecret`

- Private container registry에서 contaier image 다운시, 로그인과 같은 인증 필요
- Kubernetes에서는 아래와 같이 인증에 사용되는 파일 생성 가능
    
    ```bash
    kubectl create secret docker-registry ghcr-secret \
      --docker-server=ghcr.io \
      --docker-username=<your-github-username> \
      --docker-password=<your-personal-access-token> \
      --docker-email=<your-email> \
      --namespace=seungbaeji \
      --dry-run=client -o yaml > ghcr-secret.yaml
      
    # example
    # kubectl create secret docker-registry ghcr-secret \
    #  --docker-server=ghcr.io \
    #  --docker-username=my-test \
    #  --docker-password=ghp_KEamh \
    #  --docker-email="my-test@gmail.com" \
    #  --namespace=my-test \
    #  --dry-run=client -o yaml > ghcr-secret.yaml  
    ```
    
- 아래는 위 명령어로 생성된 secret 파일. 이는 Manifest들에 명시되어 사용
    
    ```yaml
    apiVersion: v1
    data:
      .dockerconfigjson: eyJh...In19fQ==
    kind: Secret
    metadata:
      creationTimestamp: null
      name: ghcr-secret
      **namespace: <Your Github Unsername>**
    type: kubernetes.io/dockerconfigjson
    ```
    

### 6-3. Manifests

- 아래는 CI에서 생성한 container image를 활용한 manifest. Deployment와 Service를 정의
    
    ```yaml
    ---
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: fastapi-deployment
      **namespace: <Your Github Unsername>**
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: fastapi
      template:
        metadata:
          labels:
            app: fastapi
        spec:
          containers:
          - name: fastapi
            **image: <Your Images Address>  # GHCR 이미지 경로**
            ports:
            - containerPort: 8000
          imagePullSecrets:
          - name: ghcr-secret  # 생성한 ImagePullSecret 참조
    
    ---
    apiVersion: v1
    kind: Service
    metadata:
      name: fastapi-service
      **namespace: <Your Github Unsername>**
    spec:
      selector:
        app: fastapi
      ports:
        - protocol: TCP
          port: 80
          targetPort: 8000
          nodePort: 30173  # NodePort 직접 지정 (예시)
      type: NodePort
    ```
    
- 배포되는 Kubernetes node의 port번호로 접속 가능하도록 설정된 manifest

### 6-4. Argo Application

- Argo Application은 Source와 destination을 연결
- 아래 그림과 같이, NEW APP 버튼으로 생성 가능
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/0bc1252b-b61c-4550-acd1-7a16dc4f43e7/image.png)
    
- General 설정 화면. 자동으로 deploy가 되지 않고, 직접 배포를 설정하도록 `Manual` 로 설정
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/d9f6f018-4f41-44f1-acc4-fe17c84315f1/image.png)
    
- Source 설정 화면. 본인의 git repository를 설정
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/fcb6098d-a46d-44a4-8d92-8dd7e9d6b368/image.png)
    
- Destination 설정 화면. ArgoCD가 설치된 Kubernetes cluster가 아닌, 외부 kubernetes cluster로 배포
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/16d7dcf4-422b-48c5-b07b-efac6fca3322/image.png)
    
- General 섹션 상단에 위치한 `Create` 클릭 이후, 아래와 같이 application 생성
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/5f4ee841-b453-41a1-8b8d-c78fce3268e9/image.png)
    

### 6-5. Continuous Delivery

- 배포한 application을 클릭하여 세부 화면으로 진입
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/707a2d5e-9ea2-455a-80e3-9ff8a021f15b/image.png)
    
- 현재는 Kubernetes cluster에 아무것도 배포되지 않은 상황. 모든 resource가 `Missing` 표기
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/7f25d616-97cf-496a-9993-5d8c30050718/image.png)
    
- `SYNC` 버튼 클릭 후, 아래와 같은 화면이 나타남. `SYNCRONIZE` 버튼 클릭 이후 배포 진행
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/e02bba01-cf29-4be5-a422-279d43763231/image.png)
    
- 이후 아래와 같이 `Syncing` 과정이 진행
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/40a3adcd-d282-4294-85e3-2785aba8d44f/image.png)
    
- `Syncing` 이 끝나면, `Sync OK` 과정에 도달
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/698f80a0-da4e-4dcb-85de-6f7ce506e8e8/image.png)
    
- `<Kubernetes Cluster IP>:<NodePort>/docs` 접속시, 아래와 같은 화면이 나타남
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/3e570b3e-7434-464f-83bf-aaa7f04c4ca8/image.png)
    
    > **⚠️ NOTE:** `*nodePort` 는 앞서 작성한 manifest 중, Service 리소스에 기입. 아래 참고*
    ****---
    apiVersion: v1
    **kind: Service**
    metadata:
      name: fastapi-service
      **namespace: <Your Github Unsername>**
    spec:
      selector:
        app: fastapi
      ports:
        - protocol: TCP
          port: 80
          targetPort: 8000
          **nodePort: 30173  # NodePort 직접 지정 (예시)**
      type: NodePort
    > 

### 6-6. Continuous Deployment

- Manifest에 수정사항이 존재해야 ArgoCD에서 변경을 인지
- 보통 timestamp나 commit id 값을 manifest에 반영
- 그러기 위해선, CI 동작 이후, ArgoCD가 배포하는 manifest의 수정 필요
- 아래와 같이, Github Action에서 repository에 접근하여 수정할 수 있는 token이 필요.
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/4af6ab3e-bcf2-45fb-a3eb-be92eaf459e2/image.png)
    
- 생성된 token은 `Actions secrets` 에 등록되어, github action 수행시 환경변수로 활용
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/d361878b-42c6-4002-95d3-551d48cc3376/image.png)
    
- 아래는 build 성공 이후, ArgoCD가 사용하는 manifest의 정보를 변경하는 workflow
    
    ```yaml
      ...
    	test: ...
    	build: ...
      update_manifest:
        name: Update Manifets YAML for ArgoCD Sync
        runs-on: ubuntu-latest
        needs: build  # build job이 완료된 후 실행됨
        env:
          SOURCE_DIR: my-app-cd
    
        steps:
          - name: Checkout repository
            uses: actions/checkout@v4
    
          - name: Update timestamp and commit in manifests
            run: |
              TIMESTAMP=$(TZ=Asia/Seoul date '+%Y-%m-%d %H:%M:%S')
              COMMIT=${{ github.sha }}
    
              # 모든 매니페스트 파일에서 timestamp와 commit 업데이트
              for FILE in ./${{ env.SOURCE_DIR }}/*.yaml; do
                # timestamp 업데이트 또는 추가
                if grep -q "timestamp:" "$FILE"; then
                  sed -i "s/timestamp: .*/timestamp: ${TIMESTAMP}/" "$FILE"
                else
                  echo "  timestamp: ${TIMESTAMP}" >> "$FILE"
                fi
    
                # commit 업데이트 또는 추가
                if grep -q "commit:" "$FILE"; then
                  sed -i "s/commit: .*/commit: ${COMMIT}/" "$FILE"
                else
                  echo "  commit: ${COMMIT}" >> "$FILE"
                fi
              done
    
          - name: Commit changes
            run: |
              git config --global user.email "actionbot@example.com"
              git config --global user.name "ActionBot"
              git add ./${{ env.SOURCE_DIR }}/*.yaml
              git commit -m "Update timestamp and commit in manifests for ArgoCD sync"
    
          - name: Push changes
            uses: ad-m/github-push-action@master
            with:
              github_token: ${{ secrets.GH_ACTION_TOKEN }}
              branch: main
    ```
    

---