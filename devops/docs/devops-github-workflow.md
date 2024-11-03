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