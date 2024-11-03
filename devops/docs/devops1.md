Day 02 | CI/CD Remind
⚠️ NOTE: Click cmd/ctrl + option/alt + T to expand all toggles
1. Prepare Env
Linux VM 환경 접속
Github과 ssh key로 연동
1-1. VSCode Remote
VSCode 실행 후, 아래에 표시된 빨간 박스 클릭

Connec to Host... 를 선택하여, 원격서버 정보 입력 준비

Configure SSH Hosts... 를 선택하여, ssh 정보 설정

/Users/<USERNAME>/.ssh/config 파일을 선택하여 ssh config 파일 편집

User 는 usr1 ~ usr20 까지 존재. 아래를 참고하여 입력 후 저장
Host 5.78.67.227
    HostName 5.78.67.227
    User usr<1-20>

​
이후 아래와 같이 설정된 서버를 선택 가능

이후, 원격서버에 접속된 상태로 VSCode 사용가능

1-2. Git Clone Repository
실습에 사용하려고 했던 git repository를 다운로드
git clone <git repo address> 명령어를 이용하여 다운. 주소는 아래그림 참고

아래그림과 같이, 원격 접속한 vscode의 터미널에서 실행

이후, Open Folder 선택

아래그림을 참고하여, 본인의 다운받은 git repo directory를 선택

아래 화면과 같이, git repo directory 기준으로 VSCode 설정

아래와 같이, 해당 repository에만 적용되는 설정값 반영
git config user.email "you@example.com"
git config user.name "Your Name"
​
1-3. .gitignore
https://www.gitignore.io/ 페이지 접속. python 입력후, Create 버튼을 눌러 파일생성

아래와 같은 파일이 생성되며, 이는 git repo 디렉토리 아래에 .gitignore 파일로 저장
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
​
1-4. Creating SSH Key Pair
GitHub은 git 저장소에 접근할 때 보안 인증을 요구. 이를 SSH로 해결
https://docs.github.com/ko/authentication/connecting-to-github-with-ssh 접속하여, 새 SSH 키 생성 및 ssh-agent에 추가 클릭

ref. https://docs.github.com/ko/authentication/connecting-to-github-with-ssh
해당 Github 가이드라인을 따라, 아래의 명령어로 SSH 키 생성. ~/.ssh 폴더에 key pair 생성
ssh-keygen -t ed25519 -C "<MyGithubAccount@Email.com>" -f ~/.ssh/id_ed25519
​
Console에서 위 명령어 실행시, 아래와 같은 화면 출력

~/.ssh 폴더 아래에는 아래와 같이 두개의 파일 생성

각 파일은 아래와 같이, cat 명령어로 확인 가능
Public Key
cat ~/.ssh/id_ed25519.pub
>>> ssh-ed25519 AAAAC3Nzxx...szGfw4aMdqV//zQ xxxxxxxxx@gmail.com
​
Private Key
cat ~/.ssh/id_ed25519
>>> -----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXkxxxx...
...
zWfdbnw...==
-----END OPENSSH PRIVATE KEY-----
​
1-5. Adding SSH Public Key to GitHub
GitHub에는 SSH key pair 에서, public key만 등록 필요
1-3를 통한 Public key는 ~/.ssh/id_ed25519.pub 에 위치
~/.ssh/id_ed25519.pub의 값은 아래와 같이 cat 명령어로 확인 가능
cat ~/.ssh/id_ed25519.pub
>>> ssh-ed25519 AAAAC3Nzxx...szGfw4aMdqV//zQ xxxxxxxxx@gmail.com
​
GitHub 우측 상단의 프로필 아이콘 클릭, Settings 선택. 아래그림 참조

SSH and GPG Keys → New SSH Key 클릭. 아래 그림 참조

아래 그림과 같이, SSH public key 등록

2. Python App
CI 테스트를 위한 application
2-1. poetry new
poetry new my-app 실행. 아래 구조로 파일들이 생성
my-app
├── my_app
│   └── __init__.py
├── pyproject.toml
├── README.md
└── tests
    └── __init__.py
​
아래의 구조로 main.py 파일 생성
my-app
├── my_app
│   └── main.py
│   └── __init__.py
├── pyproject.toml
├── README.md
└── tests
    └── __init__.py
​
main.py는 아래와 같이 작성. add 라는 매우 단순한 기능을 정의
def add(a: int, b: int) -> int:
    """Adds two numbers and returns the result."""
    return a + b

if __name__ == "__main__":
    result = add(2, 3)
    print(f"2 + 3 = {result}")
​
python main.py 명령어 실행. 실행시, 아래 그림과 같이 결과 출력

2-2. Test Cases
아래의 구조로 test_main.py 파일 생성
my-app
├── my_app
│   └── main.py
│   └── __init__.py
├── pyproject.toml
├── README.md
└── tests
    ├── __init__.py
    └── test_main.py
​
test_main.py는 아래와 같이 작성. 기 개발한 add를 검증하는 기능
from my_app.main import add

def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0
    assert add(0, 0) == 0
​
2-3. Test
Pytest를 이용해서 테스트 실행 및 결과 도출
poetry add --dev pytest pytest-cov 를 실행. 

pyproject.toml파일에서, 개발 dependency에만 해당 패키지들이 추가
[tool.poetry]
name = "my-app"
version = "0.1.0"
description = ""
authors = ["XXXXXX XX <xxxxxx.xx@gmail.com>"]
readme = "README.md"

[tool.poetry.dependencies]
python = "^3.10"


[tool.poetry.group.dev.dependencies]
pytest = "^8.3.2"
pytest-cov = "^5.0.0"

[build-system]
requires = ["poetry-core"]
build-backend = "poetry.core.masonry.api"
​
아래 명령어로 pytest 실행
poetry run pytest
poetry run pytest --cov=./ --cov-report=html
​
2-4. API Server Code
현재 아래와 같은 프로젝트 구조
my-app
├── my_app
│   └── main.py
│   └── __init__.py
├── pyproject.toml
├── README.md
└── tests
    ├── __init__.py
    └── test_main.py
​
main.py 파일을 아래와 같이 수정
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def read_root():
    return {"message": "Hello, World!"}

@app.get("/items/{item_id}")
async def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "query": q}
​
test_main.py 파일을 아래와 같이 수정
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
​
아래 명령어로 필요한 패키지 추가
poetry add fastapi uvicorn
poetry add --dev httpx
​
아래 명령어로 test 진행
poetry run pytest
​
2-5. Python Packaging
poetry 를 이용하여 Python package를 쉽게 추출 가능
poetry build

poetry build -f wheel
poetry build -f sdist
​
build 시, 아래 경로로 패키지 생성
my-app
├── dist
│   ├── my_app-0.1.0-py3-none-any.whl
│   └── my_app-0.1.0.tar.gz
​
3. Container Image
Application을 배포할 수 있는 압축파일
docker build 명령어를 이용하여 파일생성
3-1. DockerFile
아래와 같이 작성. Multi-stage pattern을 이용하여, builder에서는 python package를 생성
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

# FastAPI 서버 실행
CMD ["uvicorn", "my_app.main:app", "--host", "0.0.0.0", "--port", "8000"]
​
3-2. docker build
아래를 참조하여 Dockerfile로 부터 container image build
docker build . -t ghcr.io/<USERNAME>/<PACKAGENAME>:latest
# ex) docker build . -t ghcr.io/seungbaeji/tta/my-app:latest
​
추후, Github Actions에서는 아래의 명령어를 활용하여 이미지 빌드
docker buildx build . \
  --platform linux/amd64,linux/arm64 \
  --push \
  -t ghcr.io/${{ github.actor }}/${{ env.PACKAGE }}/${{ env.PROJECT_DIR }}:latest
​
⚠️ NOTE: buildx 명령어를 이용하여 보통 진행. 
3-3. docker push
GitHub Container Registry에 container image 업로드시, 로그인 필요. 아래를 참고하여 로그인
docker login ghcr.io \
	-u <your-github-username> \
	-p <your-personal-access-token>
​
원하는 container image 이름으로 container image 업로드. 아래 명령어 참고
docker push docker.io/<username>/<package-name>:latest
# ex) docker push ghcr.io/seungbaeji/tta/my-app:latest
​
Login과 push 실행시, 아래화면과 같이 나타남

아래는 등록된 container image 화면

3-4. docker run
생성한 container image로 부터 container 실행. 아래 참고
docker run -p <host-port>:8000 \
	--name my-api \
  <image-name>

# docker run -p 30085:8000 --name my-api ghcr.io/seungbaeji/tta/my-app:latest
​
http://5.78.67.227:<host-port>/docs 주소로 접속

https://labs.play-with-docker.com/ 접속. Instance 생성 후, docker run 실행

docker login ghcr.io -u <username> -p <pat-token>
docker run -p 8000:8000 --name my-api <container-image-name>