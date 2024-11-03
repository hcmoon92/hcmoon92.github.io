# Day 02 | 모니터링 실습자료

---

> **⚠️ NOTE:** *Click **`cmd/ctrl`** + **`option/alt`** + **`T`** to expand all toggles*
> 

## 1. Grafana Cloud

- Logs, Traces, Profiles 각각 50GB 무료 사용 제공 (14일 기준)

### 1-1. Create Account

- https://grafana.com/auth/sign-in/ 접속
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/3e1b4e09-5de0-45f6-9ec9-94dd95cbcd2c/image.png)
    
- 계정 생성 후, 아래와 같은 화면 후 Grafana Cloud의 instance 생성
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/b36b8798-516b-4d9f-b580-7eb7e612f8c4/image.png)
    
- https://grafana.com/pricing/ 에서 가격정보 확인가능
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/2c7655a0-8057-452b-ae42-2eda10cfc7be/image.png)
    

### 1-2. Launch Dashboard

- `Grafana is loading...` 화면 이후, 아래와 같은 dashboard 확인 가능
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/090168a6-b229-4d18-8d98-364c3d04ef1a/image.png)
    
- ***혹시 나타나지 않는다면 아래 단계로 접속가능***
- https://grafana.com/auth/sign-in/ 접속 후, `Launch` 버튼을 클릭
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/a8bfa408-cbbc-47ae-94d7-8265a98d414a/image.png)
    
- `Grafana` 서비서의 `Launch` 버튼 클릭
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/ba6a3217-fc7a-402a-8653-469032a9ad45/image.png)
    
- 아래와 같은 화면이 나타나면서, Grafana 로딩완료
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/05b17229-c9a6-47ff-a767-0e25daa79407/image.png)
    

### 1-3. Demo Dashboard

- Grafana에서는 Monitoring, Observability의 데모화면 제공
- `Explore` → `Demo Data` 클릭
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/f838caf3-b807-4eef-8649-f09a75eff54b/image.png)
    
- Demo Data에서는 아래 네가지와 같은 예시 제공
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/636c9273-8d24-41ea-aa7a-d3c09d671f8a/image.png)
    
- `4` 번 클릭시, 아래 네가지 Dashboard 선택 가능
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/a55572fc-e0cc-4b29-9bca-d168599ff279/c530aca9-5ffe-4b58-a5b0-1311718598bd.png)
    
- 네가지 중, `2` 번 클릭시, 목표로 하는 Log dashboard를 볼 수 있음
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/1e80f624-ce86-476f-a1a5-8fe43d0fbd02/image.png)
    
- 아래는 각 번호에 대한 Demo Dashboard
    - Business Health
        
        ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/4a76debe-ad3b-4b06-ae1e-c224f44467e3/image.png)
        
    - Overview
        
        ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/5dc6bda3-522a-4fde-a006-d3e605200291/image.png)
        
    - Performance Stats
        
        ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/fe75c596-22a9-469f-abc5-948a6acf5f44/image.png)
        

### 1-4. Log, Traces, Metrics, and Profiles

- 아래는 간단한 정리표
    
    
    | 항목 | 정의 | 주요 목적 | 예시 |
    | --- | --- | --- | --- |
    | Logs | 시스템의 이벤트나 상태를 기록한 시퀀셜 데이터 | 문제 진단, 이벤트 추적 | 오류 로그, 상태 로그, 사용자 활동 로그 |
    | Traces | 분산 시스템에서 요청이 통과하는 경로와 시간을 추적 | 시스템 성능 분석, 병목 현상 발견 | 서비스 간 호출 경로 추적, 지연 시간 분석 |
    | Metrics | 시스템 성능을 수치로 표현한 데이터 | 성능 모니터링, 자원 최적화 | CPU 사용률, 메모리 사용량, 요청 속도 |
    | Profiles | 애플리케이션의 실행 시 성능 데이터를 수집한 것 | 성능 최적화, 코드 병목 제거 | 함수 호출 빈도, 메모리 할당 패턴, CPU 사용 시간 |

---

## 2. Logging

- Log에는 필수적으로 담기는 field가 존재
- 구조화된 로그는 로그 데이터를 보다 체계적으로 관리하고 분석할 수 있게 해줌

### 2-1. Logging Sample Code

- https://github.com/seungbaeji/practice_devops
    
    https://github.com/seungbaeji/practice_devops
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/95ce0036-2bab-4892-8371-41a0889f8498/image.png)
    
- `loki-cloud` 에 해당 코드 위치. 아래의 프로젝트 구조를 가짐
    
    ```
    .
    ├── README.md
    ├── debug.log
    ├── logger.toml
    ├── loki_cloud
    │   └── __init__.py
    ├── main.py
    ├── promtail
    │   └── config.yaml
    ├── pyproject.toml
    ├── tests
    │   └── __init__.py
    └── tmp
        ├── critical.log
        ├── debug.log
        ├── errors.log
        ├── info.log
        └── warn.log
    ```
    
- 기존과 코드에 변경이 없을시, 아래 명령어로 다운로드
    
    ```bash
    git pull
    ```
    
- 아래 명령어로 실행
    
    ```bash
    poetry install  # install dependency
    poetry run python main.py  # run logging module
    ```
    

### 2-2. Declarative Config

- Python은 아래와 같이 선언형으로 log 설정 가능
    
    ```toml
    version = 1
    disable_existing_loggers = true
    
    [formatters.default]
    class = "logging.Formatter"
    datefmt = "%Y-%m-%d %H:%M:%S"
    tzname = "Asia/Seoul"
    format = "%(asctime)-s - %(name)-15s - %(levelname)-8s - %(message)s"
    
    [formatters.json]
    class = "logging.Formatter"
    format = '{"time": "%(asctime)s", "level": "%(levelname)s", "msg": "%(message)s", "func": "%(funcName)s", "logger": "%(name)s", "line": "%(lineno)d", "process": "%(process)d"}'
    datefmt = "%Y-%m-%dT%H:%M:%S.%fZ"
    tzname = "Asia/Seoul"
    
    [formatters.logfmt]
    class = "logging.Formatter"
    format = "time=%(asctime)s level=%(levelname)s msg=\"%(message)s\" func=%(funcName)s logger=%(name)s line=%(lineno)d process=%(process)d"
    datefmt = "%Y-%m-%dT%H:%M:%S.%fZ"
    tzname = "Asia/Seoul"
    
    [handlers.console]
    class = "logging.StreamHandler"
    level = "INFO"
    formatter = "json"
    stream = "ext://sys.stdout"
    
    [handlers.info_file_handler]
    class = "logging.handlers.RotatingFileHandler"
    level = "INFO"
    formatter = "default"
    filename = "./tmp/info.log"
    maxBytes = 10485760
    backupCount = 20
    encoding = "utf8"
    
    [handlers.error_file_handler]
    class = "logging.handlers.RotatingFileHandler"
    level = "ERROR"
    formatter = "logfmt"
    filename = "./tmp/errors.log"
    maxBytes = 10485760
    backupCount = 20
    encoding = "utf8"
    
    [handlers.debug_file_handler]
    class = "logging.handlers.RotatingFileHandler"
    level = "DEBUG"
    formatter = "logfmt"
    filename = "./tmp/debug.log"
    maxBytes = 10485760
    backupCount = 20
    encoding = "utf8"
    
    [handlers.critical_file_handler]
    class = "logging.handlers.RotatingFileHandler"
    level = "CRITICAL"
    formatter = "logfmt"
    filename = "./tmp/critical.log"
    maxBytes = 10485760
    backupCount = 20
    encoding = "utf8"
    
    [handlers.warn_file_handler]
    class = "logging.handlers.RotatingFileHandler"
    level = "WARN"
    formatter = "logfmt"
    filename = "./tmp/warn.log"
    maxBytes = 10485760
    backupCount = 20
    encoding = "utf8"
    
    [loggers.tests]
    level = "INFO"
    handlers = [
        "console",
    ]
    
    [root]
    level = "DEBUG"
    handlers = [
        "console",
        "info_file_handler",
        "debug_file_handler",
    ]
    ```
    
- 아래는 해당 설정의 간략한 설명. 다양한 handler가 존재
    
    
    | 항목 | 설명 |
    | --- | --- |
    | `version` | 설정 파일의 버전. `logging.config.dictConfig()`에서 요구하며 보통 `1`로 설정. |
    | `disable_existing_loggers` | 기존의 로거를 비활성화할지 여부. `True`로 설정하면 기존 로거가 비활성화됨. |
    | `formatters` | 로그 메시지의 출력 형식을 정의하는 부분. 시간 형식과 메시지 구조를 설정. |
    | `handlers` | 로그를 출력할 방식(예: 콘솔, 파일)을 정의하는 부분. 여러 핸들러를 추가 가능. |
    | `handlers.console` | 콘솔에 로그를 출력하는 핸들러. `logging.StreamHandler`로 설정. |
    | `handlers.info_file_handler` | 로그 파일의 경로. 예시: `./tmp/info.log` |

### 2-3. Log Fields

- 로그에는 주로 사용되는 필드가 존재. 표준은 없으나, 업계에서 권장하는 field들이 존재
- 아래는 주로 사용되는 field들
    
    
    | 필드명 | 설명 | 예시 |
    | --- | --- | --- |
    | `time` | 로그가 기록된 시간. ISO 8601 형식 사용. | `2024-09-09T13:48:42.400Z` |
    | `level` | 로그의 심각도 수준. (예: DEBUG, INFO, WARN, ERROR, CRITICAL) | `INFO` |
    | `msg` | 실제 로그 메시지. 로그의 내용이나 설명을 포함. | `"Names requested"` |
    | `logger` | 로그를 생성한 로거의 이름. 출처를 명확히 함. | `main` |
    | `func` | 로그가 발생한 함수 이름. 코드 흐름을 추적하는 데 도움. | `get_user_data` |
    | `line` | 로그가 발생한 코드의 라인 번호. 문제의 정확한 위치 파악. | `42` |
    | `process` | 로그를 생성한 프로세스 ID. 로그의 출처를 구분. | `15424` |
    | `traceID` | 요청 추적을 위한 고유 ID. 분산 시스템에서의 요청 상관관계 파악 용이. | `eebed7305ac4595dca74bd7e7f846822` |
    | `user` | 로그와 관련된 사용자 정보. 사용자 관련 이벤트 추적 시 유용. | `user=15424` |
    | `source` | 로그의 출처나 소스 파일. | `/path/to/source/file.py` |
- Python `logging.Formatter`에서는 아래의 정보들을 제공
    
    
    | 필드명 | 설명 | 사용 예시 |
    | --- | --- | --- |
    | `asctime` | 로그가 기록된 시간 (형식은 `datefmt`에 따라 설정 가능). | `asctime=%(asctime)s` |
    | `levelname` | 로그의 레벨 이름 (DEBUG, INFO, WARN, ERROR, CRITICAL 등). | `level=%(levelname)s` |
    | `message` | 실제 로그 메시지. | `msg=%(message)s` |
    | `name` | 로그를 기록한 로거의 이름. | `logger=%(name)s` |
    | `module` | 로그를 생성한 모듈의 이름. | `module=%(module)s` |
    | `funcName` | 로그가 발생한 함수의 이름. | `func=%(funcName)s` |
    | `lineno` | 로그가 발생한 라인 번호. | `line=%(lineno)d` |
    | `pathname` | 로그가 발생한 코드의 전체 파일 경로. | `pathname=%(pathname)s` |
    | `process` | 로그를 생성한 프로세스의 ID. | `process=%(process)d` |
    | `processName` | 로그를 생성한 프로세스의 이름. | `processName=%(processName)s` |
    | `thread` | 로그를 생성한 스레드의 ID. | `thread=%(thread)d` |
    | `threadName` | 로그를 생성한 스레드의 이름. | `threadName=%(threadName)s` |
    | `levelno` | 로그 레벨의 숫자 표현 (DEBUG=10, INFO=20, etc.). | `levelno=%(levelno)d` |
    | `created` | 로그가 생성된 시간의 Unix 타임스탬프 (초 단위). | `created=%(created)f` |
    | `msecs` | 로그 생성 시의 밀리초 단위 시간. | `msecs=%(msecs)d` |
    | `relativeCreated` | 프로그램 시작 후 경과된 시간 (밀리초 단위). | `relativeCreated=%(relativeCreated)d` |
    | `exc_info` | 예외 발생 시 예외 정보. | `exc_info=%(exc_info)s` |
    | `exc_text` | 예외 발생 시 예외의 텍스트 표현. | `exc_text=%(exc_text)s` |
    | `args` | 로그 메시지의 형식화되지 않은 인수들. | `args=%(args)s` |
    | `stack_info` | 로그에 포함된 스택 정보 (디버깅 시 유용). | `stack_info=%(stack_info)s` |
    | `filename` | 로그가 발생한 파일의 이름 (파일 경로가 아닌 이름만). | `filename=%(filename)s` |

### 2-4. 전통적인 로그의 한계

- 전통적인 텍스트 로그는 비구조화로 인해 의미 파악이 어렵고, 특정 로그 검색 및 필터링에 많은 시간소요
- 예를 들어, 아래와 같은 로그 포맷은 비정형 로그의 대표적인 예:
    
    ```toml
    tomlCopy code
    [formatters.default]
    class = "logging.Formatter"
    datefmt = "%Y-%m-%d %H:%M:%S"
    tzname = "Asia/Seoul"
    format = "%(asctime)-s - %(name)-15s - %(levelname)-8s - %(message)s"
    
    [formatters.debug]
    class = "logging.Formatter"
    datefmt = "%Y-%m-%d %H:%M:%S"
    format = "%(asctime)-s - %(name)-15s - %(levelname)-8s - %(funcName)s - %(message)s"
    ```
    
- 위와 같은 포맷은 `time`, `name`, `level`, `message` 등의 정보가 단순한 문자열 형태로 나열되어 있으며, 각 필드의 구분이 명확하지 않아 로그 파싱과 분석에 어려움이 발생
- 이러한 비정형 로그는 파싱 오류와 분석 일관성 문제를 야기하며, 특히 대규모 클라우드 환경에서 심각한 문제. **로그에서 특정 정보를 추출하려면 복잡한 파싱 로직이 필요**
- 결국, 실시간 모니터링과 로그 간 상관관계 파악이 어렵고, 특정 이벤트 추적에 많은 시간과 자원이 소요 됨. 이는 시스템 문제의 신속한 해결을 방해

### 2-5. Structured Logging (구조화된 로그)

- 구조화된 로그는 로그 데이터를 보다 체계적으로 관리하고 분석할 수 있게 해주는 방식. 전통적인 비정형 로그의 한계를 극복하기 위해 도입
- 구조화된 로그는 각 로그 항목을 명확한 키-값 쌍으로 표현하여, 자동화된 처리와 분석에 최적화된 형태 제공
- 아래는 대표적인 구조화된 로그의 예:
    
    ```toml
    [formatters.json]
    class = "logging.Formatter"
    format = '{"time": "%(asctime)s", "level": "%(levelname)s", "msg": "%(message)s", "func": "%(funcName)s", "logger": "%(name)s", "line": "%(lineno)d", "process": "%(process)d"}'
    datefmt = "%Y-%m-%dT%H:%M:%S.%fZ"
    tzname = "Asia/Seoul"
    
    [formatters.logfmt]
    class = "logging.Formatter"
    format = "time=%(asctime)s level=%(levelname)s msg=\\"%(message)s\\" func=%(funcName)s logger=%(name)s line=%(lineno)d process=%(process)d"
    datefmt = "%Y-%m-%dT%H:%M:%S.%fZ"
    tzname = "Asia/Seoul"
    ```
    
    - JSON 형식: 로그를 구조화된 JSON으로 기록. `time`, `level`, `msg` 등 주요 필드 포함. 쉬운 파싱과 분석 가능. 중앙화된 로그 관리와 클라우드 분석 도구 통합에 적합.
    - key-value 형식: `key=value` 형태로 로그 항목 나열. JSON보다 간결하고 가독성 높음. 파싱과 필터링에 효과적. 간단한 로그나 텍스트 기반 시스템에 적합.
- 구조화된 로그의 주요 장점:
    
    
    | 장점 | 설명 |
    | --- | --- |
    | 효율적인 파싱 및 검색 | 명확한 로그 구조로 간편한 데이터 처리와 빠른 검색 가능. |
    | 일관된 로그 관리 | 통일된 형식으로 다양한 시스템 로그의 통합 분석 용이. 자동화된 분석의 정확성 향상. |
    | 향상된 분석 및 모니터링 | JSON/key-value 형식으로 로그 도구와 쉽게 통합. 실시간 모니터링, 알림, 로그 집계 효율화. |

### 2-6. Practice Logging

- 아래의 `handlers.console`의 `formatter` 를 변경
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/4535a5f7-061c-43f8-885b-34cee3543bf9/image.png)
    
- `default`, `json`, `logfmt` 를 선택 가능. 아래와 같이 formatter가 정의
    
    ```toml
    [formatters.default]
    class = "logging.Formatter"
    datefmt = "%Y-%m-%d %H:%M:%S"
    tzname = "Asia/Seoul"
    format = "%(asctime)-s - %(name)-15s - %(levelname)-8s - %(message)s"
    
    [formatters.json]
    class = "logging.Formatter"
    format = '{"time": "%(asctime)s", "level": "%(levelname)s", "msg": "%(message)s", "func": "%(funcName)s", "logger": "%(name)s", "line": "%(lineno)d", "process": "%(process)d"}'
    datefmt = "%Y-%m-%dT%H:%M:%S.%fZ"
    tzname = "Asia/Seoul"
    
    [formatters.logfmt]
    class = "logging.Formatter"
    format = "time=%(asctime)s level=%(levelname)s msg=\"%(message)s\" func=%(funcName)s logger=%(name)s line=%(lineno)d process=%(process)d"
    datefmt = "%Y-%m-%dT%H:%M:%S.%fZ"
    tzname = "Asia/Seoul"
    ```
    
- 아래 명령어 실행시, 로그 포맷이 변경된 로그가 기록
    
    ```bash
    poetry run python main.py
    ```
    
- 아래는 로그 기록
    
    ```bash
    {"time": "2024-09-10T01:15:44.fZ", "level": "INFO", "msg": "This is an INFO log message from my application.", "func": "<module>", "logger": "root", "line": "18", "process": "8784"}
    {"time": "2024-09-10T01:15:44.fZ", "level": "WARNING", "msg": "This is a WARNING log message!", "func": "<module>", "logger": "root", "line": "22", "process": "8784"}
    
    time=2024-09-10T01:24:21.fZ level=INFO msg="This is an INFO log message from my application." func=<module> logger=root line=18 process=16636
    
    2024-09-10 01:24:44 - root            - INFO     - This is an INFO log message from my application.
    ```
    
- Python formatter는 custom으로 설정된 formatter 사용가능. 아래는 third-party 적용사례
    
    ```toml
    [formatters.adv-json]
    class = "pythonjsonlogger.jsonlogger.JsonFormatter"
    format = '{"time": "%(asctime)s", "level": "%(levelname)s", "msg": "%(message)s", "func": "%(funcName)s", "line": "%(lineno)d", "exception": "%(exc_info)s"}'
    datefmt = "%Y-%m-%dT%H:%M:%S.%fZ"
    tzname = "Asia/Seoul"
    ```
    
    > [*https://github.com/madzak/python-json-logger*](https://github.com/madzak/python-json-logger)
    > 
- Python의 formatter에서 수집 가능한 정보를 추가하여, formatter를 변경 실습
    
    ```toml
    [formatters.enhanced-json]
    class = "logging.Formatter"
    format = '{"time": "%(asctime)s", "level": "%(levelname)s", "msg": "%(message)s", "module": "%(module)s", "func": "%(funcName)s", "line": "%(lineno)d", "process": "%(process)d", "thread": "%(thread)d"}'
    datefmt = "%Y-%m-%dT%H:%M:%S.%fZ"
    tzname = "Asia/Seoul"
    ```
    

---

## 3. Loki

- Log를 수집처리하는 system
- Promtail은 로그파일을 읽고, Loki로 발송

### 3-1. Access Policies

- Cloud API Keys 기능이 삭제. Cloud Access Policies 를 이용하여 token 생성
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/aea0ff26-f91b-4f54-be72-b5e35f3914bb/image.png)
    
- 아래 그림과 같이, `Access Policies` → `Create access policy` 클릭
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/c6631d30-2f94-4e2b-b802-4004783614c7/image.png)
    
- 아래 그림을 참조, 필요 항목들을 모두 입력
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/f19dd872-f848-4686-a6bd-92ffa87bf701/image.png)
    
- `logs`의 `Write` 권한만 부여하고 `Create` 버튼을 클릭하여 생성
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/b49855da-711b-4f57-877f-eb937db2ec8a/image.png)
    
- Policy 생성 후, `Add token`을 클릭하여 token 생성 시작
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/aab0852e-f1cb-4e3a-bacc-65955805d23e/image.png)
    
- 아래를 참고하여 필수 정보 입력 후, `Create` 버튼을 클릭하여 생성
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/0e9abe06-c546-476a-a9dd-9247695a45fb/image.png)
    
- 생성 후, `Copy to clipboard` 버튼을 클릭하여 별도 보관
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/ee203c3c-18d0-4f9c-a1f2-fd8fbc851cfb/image.png)
    
    > **⚠️ NOTE:** *위 화면 이후 token 값은 확인 불가*
    > 

### 3-2. Download Promtail

- Promtail은 Log 파일을 읽고,  Loki로 송신하는 agent
- https://grafana.com/docs/loki/latest/send-data/promtail/installation/ 페이지에 Promtail의 다양한 설치 방법 안내. 아래 표 참고
    
    
    | 설치 방법 | 설명 |
    | --- | --- |
    | Binary | Grafana Loki 릴리스 페이지에서 Promtail 바이너리를 다운로드하여 직접 실행 |
    | **APT/RPM 패키지** | Debian/Ubuntu에서는 APT, Red Hat/CentOS에서는 RPM을 사용하여 설치 |
    | **Docker** | Docker 컨테이너로 Promtail을 실행 |
    | **Helm** | Helm 차트를 사용하여 Kubernetes 클러스터에 Promtail 배포 |
- https://github.com/grafana/loki/releases/download/v3.1.1/promtail-windows-amd64.exe.zip 클릭 후, Windows 설치파일 다운로드
- 아래그림과 같이, `promtail-windows-amd64.exe` 파일이 다운됨
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/e9d31b69-5ffe-4273-87b0-2b77d72afdc0/image.png)
    
    > ⚠️ **NOTE**: *아래 메세지가 나타날시, 압축을 해제하고 명령어 수행*
    > 
    > 
    > \promtail\promtail-windows-amd64.exe :
    > '.\promtail\promtail-windows-amd64.exe' 용어가 cmdlet, 함수,
    > 
    > 스크립트 파일 또는 실행할 수 있는 프로그램 이름으로 인식되지
    > 
    > 않습니다. 이름이 정확한지 확인하고 경로가 포함된 경우 경로가
    > 
    > 올바른지 검증한 다음 다시 시도하십시오.
    > 위치 줄:1 문자:1
    > 
    > - .\promtail\promtail-windows-amd64.exe
    > --config.file=.\promtail\config ...
    > - `+ CategoryInfo : ObjectNotFound: (.\\promtail\\promtail -windows-amd64.exe:String) [], CommandNotFoundException + FullyQualifiedErrorId : CommandNotFoundException`
- `promtail-windows-amd64.exe` 파일은 실습 폴더로 이동. `practice-devops/loki-cloud/promtail` 폴더 아래로 이동
    
    ```toml
    practice-devops
    ├── loki-cloud
    │   ├── README.md
    ....
    **│   ├── promtail**
    ...
        └── tmp
    ```
    

### 3-3. Setup Promtail

- Promtail 실행시, 설정파일 필요. Grafana Cloud의 Loki로 보내는 방법은 별도로 안내
- 아래 순서를 참고하여 설정파일 확인
    - https://grafana.com/auth/sign-in/ 접속 후, `Launch` 버튼을 클릭
        
        ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/a8bfa408-cbbc-47ae-94d7-8265a98d414a/image.png)
        
    - Loki의 `Send Logs` 클릭
        
        ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/227a4324-b596-444d-9655-e127cc86ec54/image.png)
        
    - Promtail을 이용하여 log를 전송하는 방법 소개. 설정파일 내용과 실행 방법을 안내
        
        ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/13169e1f-8408-4de1-8fef-b568a798e102/image.png)
        
        > **⚠️ NOTE:** *설정파일에서 `clients` 의 `url`부분은 사용자마다 다름. 반드시 위 페이지까지 방문하여, `url` 값 획득 필요*
        > 
- 아래는 container 사용시의 Promtail의 설정파일. `url` 부분은 반드시 변경
    
    ```yaml
    server:
      http_listen_port: 9080
      grpc_listen_port: 0
    
    positions:
      filename: /tmp/positions.yaml  # log 를 어디까지 읽었는지 기록
    
    clients:
      - url: https://<Your Unique Value>:**<Your Grafana.com API Token>**@logs-prod-<Your Value>.grafana.net/loki/api/v1/push
    
    scrape_configs:
      - job_name: app_logs
        static_configs:
          - targets:
              - localhost
            labels:
              job: my-devops-practice
              host: my-laptop
              __path__: /var/log/*.log
    ```
    
- 아래는 windows에서의 Promtail 설정파일. `url` 부분은 반드시 변경
    
    ```yaml
    server:
      http_listen_port: 9080
      grpc_listen_port: 0
    
    positions:
      filename: ./tmp/positions.yaml  # log 를 어디까지 읽었는지 기록
    
    clients:
      - url: https://<Your Unique Value>:**<Your Grafana.com API Token>**@logs-prod-<Your Value>.grafana.net/loki/api/v1/push
    
    scrape_configs:
      - job_name: app_logs
        static_configs:
          - targets:
              - localhost
            labels:
              job: my-devops-practice
              host: my-laptop
              __path__: ./tmp/*.log  # DIRPATH for log files
    ```
    
- **설정파일의 `<Your Grafana.com API Token>` 부분에 기존에 발급 받았던 API Key 입력**
- Promtail은 `__path__: /var/log/*.log` 에 존재하는 log 파일들을 모두 Loki 로 전송

### 3-4. Run Logging & Promtail

- 아래 명령어로 log 생성 모듈 실행
    
    ```powershell
    poetry run python main.py
    ```
    
- 실행시, `tmp` 폴더 아래에 각종 log들을 생성
    
    ```
    tmp
    ├── critical.log
    ├── debug.log
    ├── errors.log
    ├── info.log
    └── warn.log
    ```
    
- 다운받은 Promtail 실행파일을 이용하여 Promtail 실행. 현재 폴더를 `pratice-devops/loki-cloud` 에 위치 시킨후, 아래 명령어 수행
    
    ```powershell
    .\promtail\promtail-windows-amd64.exe --config.file=.\promtail\config.yaml
    ```
    

### 3-5. Loki Explore (전통적 로그)

- https://grafana.com/auth/sign-in/ 접속 후, Grafana URL 클릭
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/a4b7442f-d053-49e4-bce1-5c2dbfa6433e/image.png)
    
- `Explore` → `grafanacloud-<username>-logs` 클릭
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/e36a9052-ce65-4a7d-899d-f01ab062f1b5/image.png)
    
- `Label filters` 에서 Promtail에서 설정했던 label로 검색. 현재는 job, host 존재
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/2448f517-aadd-4826-9f1d-25d6eef66c52/image.png)
    
- 현재는 여러 라인을 차지하는 에러 메세지 존재. 이런 부분들이 로그의 검색을 힘들게 만드는 주범
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/5b86ba74-cbf5-4dc6-9bb6-b2d70699ddc0/image.png)
    

### 3-6. Log Formatter 설정

- 아래와 같이 file을 작성하는 Handler의 formatter 변경
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/ac7317b7-cc41-483f-8947-00258fab8bba/image.png)
    

> **⚠️ NOTE:** *Kubernetes 배포시에는 console에 나타나는 log들이 파일로 저장. 별도 filehandler 필요 없음*
> 

### 3-7. Loki Explore (구조화된 로그)

- `Explore` → `grafanacloud-<username>-logs` 클릭
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/e36a9052-ce65-4a7d-899d-f01ab062f1b5/image.png)
    
- `Label filters` 에서 Promtail에서 설정했던 label로 검색. 현재는 job, host 존재
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/2448f517-aadd-4826-9f1d-25d6eef66c52/image.png)
    
- 동일한 상황이지만, 로그가 정확하게 인식되기 시작
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/3abd3e50-148f-4c40-8364-e05ec3fc62da/image.png)
    

---

## 4. Log Dashboard

- Grafana에서 제공하는 Demo Dashboard의 설정을 따라할 수 있음
- 해당 설정을 참고해서, dashboard 설정
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/01b77496-d8d7-46cc-9fa5-3cea7ee05aa5/image.png)
    

### 4-1. Clone Target Dashboard

- `Explore` → `Demo Data` 클릭
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/f838caf3-b807-4eef-8649-f09a75eff54b/image.png)
    
- 4번 대시보드 클릭
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/636c9273-8d24-41ea-aa7a-d3c09d671f8a/image.png)
    
- `4` 번 클릭후, 아래의 화면에서 2번 대시보드 클릭
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/a55572fc-e0cc-4b29-9bca-d168599ff279/c530aca9-5ffe-4b58-a5b0-1311718598bd.png)
    
- 아래는 목표하는 Log Demo Dashboard
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/1e80f624-ce86-476f-a1a5-8fe43d0fbd02/image.png)
    

### 4-2. Init Dashboard

- 아래 그림을 참고하여 초기 dashboard 생성
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/cef3a139-f3bf-4b9e-9c4f-45196dd2885d/image.png)
    
- 이후, `+ Add visulazation` 버튼 클릭. 아래그림 참조
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/79a83e1a-8a52-470f-8846-59e7b9d1e573/image.png)
    
- `grafanacloud-<username>-logs` 를 데이터소스로 선택. 아래그림 참조
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/701d6008-512f-4541-8c00-d5c60807f21e/image.png)
    

### 4-3. Refer to the Logs Demo Dashboard

- Grafana에서 제공하는 Demo Dashboard의 설정을 따라할 수 있음
- 아래 그림과 같이, 따라할 화면의 우측 상단을 클릭
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/c6f09d54-f31d-4ce1-b300-a3bc0cbd2c20/image.png)
    
- 아래 그림과 같이, `Edit` 을 클릭
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/ba08f987-cc77-4228-936b-d8d80ebaaccc/image.png)
    
- 이후, 해당 화면의 설정 값들을 확인할 수 있음. 주요 설정값은 아래 그림의 빨간색 박스와 같음
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/950d6168-68a2-4b22-a2c5-71a483769b61/image.png)
    
    ```
    sum by(level)(count_over_time({cluster="do-nyc1-demo-infra"} |~ "info|INFO" [$__interval]))
    ```
    

### 4-4. Add More Logs Dashboard

- `Add` → `Visualization` 클릭하여 생성화면으로 이동
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/ca9d95e1-fc74-44cf-98a4-606c58c7fa1e/image.png)
    
- `Query` → `grafanacloud-<username>-logs` 선택
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/ab9fa7a7-467b-4307-a24e-18f6d7521091/image.png)
    
- 아래 그림을 참고하여, 참조할 dashboard의 설정을 가져옴
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/c5922833-7a8a-4eb4-95e1-7d4ae3dded56/image.png)
    
    ```
    sum by(levelname)(count_over_time({host="my-labtop"} |~ "INFO" [$__interval]))
    ```
    
- ERROR는 INFO와 다른 threshold 설정가능. 아래 그림과 같이 글자 색이 변함
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/f70834f7-b749-4b24-8646-5aa9494d2e21/image.png)
    
- 다양한 색상 선택 가능
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/1fe1a385-ea22-4fe6-8734-837896fd7aa0/image.png)
    
- Legend와 각 query 마다 별칭 설정 가능
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/73fa608c-0eb2-43a3-ae98-e934535f6c5a/04a347c4-cccd-4b9f-a059-1bfeb42d297c.png)
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/75adb1fb-c220-4d34-ae1a-a83a512c9ba6/image.png)
    

### 4-5. Duplicate Dashboard

- 동일 data로 visualization만 다른경우, 복제하여 활용 가능
- 아래 그림과 같이, `More...` → `Duplicate` 선택
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/57d78963-485a-46e5-b4f7-398d86e6f003/image.png)
    
- 복제된 chart로 간뒤, 원하는 `Visualizations` 선택
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/a07847af-78d0-428c-a7dc-05fc7da50b36/image.png)
    

---

## 5. Log Normalization

- 오픈소스는 log를 직접 정규화 할 수 없는 경우들이 존재
- Promtail에서 정규표현식을 사용하여 필드를 추출하고, 이를 정규화한 후 전송

### 5-1. Unstructured Logs in OpenSoruce

- 많은 오픈 소스들은 여전히 비구조화된 로그 양식을 사용
- 비구조화된 로그는 필드 의미가 불명확하고 일관성이 없어 분석이 어려움
- 아래는 몇가지 예시
    - PostgreSQL
        
        ```bash
        2024-09-14 14:23:45.678 UTC [12345] LOG:  connection received: host=192.168.1.10 port=5432
        2024-09-14 14:23:45.680 UTC [12345] LOG:  connection authorized: user=postgres database=mydb
        2024-09-14 14:23:46.123 UTC [12345] ERROR:  syntax error at or near "SELECTS" at character 15
        2024-09-14 14:23:46.123 UTC [12345] STATEMENT:  SELECTS * FROM users;
        ```
        
    - MySQL
        
        ```bash
        2024-09-14T14:23:45.678913Z 12345 [Note] Access denied for user 'root'@'localhost' (using password: YES)
        2024-09-14T14:24:00.123456Z 12346 [Warning] Aborted connection 12346 to db: 'mydb' user: 'myuser' host: 'localhost' (Got an error reading communication packets)
        ```
        
    - Apache HTTP Server
        
        ```bash
        192.168.1.10 - - [14/Sep/2024:14:23:45 +0000] "GET /index.html HTTP/1.1" 200 1024
        192.168.1.11 - - [14/Sep/2024:14:23:50 +0000] "POST /form HTTP/1.1" 404 512
        ```
        
    - Nginx
        
        ```bash
        192.168.1.12 - - [14/Sep/2024:14:23:45 +0000] "GET /about.html HTTP/1.1" 200 512 "-" "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
        192.168.1.13 - - [14/Sep/2024:14:23:50 +0000] "POST /api/login HTTP/1.1" 401 1024 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
        ```
        
    - MongoDB
        
        ```bash
        2024-09-14T14:23:45.678+0000 I  NETWORK  [conn12345] received client metadata from 192.168.1.14:63784 conn: { driver: { name: "MongoDB Internal Client", version: "4.4.0" }, os: { type: "Linux", name: "Ubuntu", architecture: "x86_64", version: "20.04" } }
        2024-09-14T14:23:46.123+0000 I  COMMAND  [conn12345] command mydb.users command: find { find: "users", filter: { } } planSummary: COLLSCAN keysExamined:0 docsExamined:100 numYields:0 nreturned:10 reslen:514 locks:{ Global: { acquireCount: { r: 1 } }, Database: { acquireCount: { r: 1 } }, Collection: { acquireCount: { r: 1 } } } protocol:op_msg 456ms
        ```
        
- 위 예시와 같이, 비구조화된 로그는 각 필드의 의미와 순서가 일정하지 않아 데이터 분석이 어려움

### 5-2. Normalization in Promtail

- 비구조화된 로그는 Promtail의 기능을 이용하여 구조화 가능
- Promtail의 `pipeline_stages` 기능을 사용하여 로그 데이터를 정규화
- 아래는 비구조화된 로그를 구조화하는 과정:
    - **로그 수집**: `scrape_configs`로 로그 파일 경로 설정, Promtail이 수집
    - **파이프라인 처리**: `pipeline_stages`로 로그 데이터 구조화, `regex`로 필드 추출
    - **JSON 변환**: `template`과 `output`으로 JSON 형식 변환, Loki로 전송
- 아래는 Promtail 의 설정 예시
    
    ```yaml
    server:
      http_listen_port: 9080
      grpc_listen_port: 0
    
    positions:
      filename: ./tmp/positions.yaml # log 를 어디까지 읽었는지 기록
    
    clients:
      - url: https://363390:<Your Grafana.com API Token>@logs-prod-011.grafana.net/loki/api/v1/push
    
    scrape_configs:
      # PostgreSQL 로그 수집 설정
      - job_name: postgresql_logs
        static_configs:
          - targets:
              - localhost
            labels:
              job: my-devops-practice
              host: my-laptop
              application: postgresql
              # __path__: ./tmp/postgresql.log # 로그 파일 경로
              __path__: /var/log/postgresql.log # PostgreSQL 로그 파일 경로
        pipeline_stages:
          - match:
              selector: '{application="postgresql"}'
              stages:
                - regex:
                    expression: '^(?P<asctime>\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\.\d{3}) (?P<timezone>[A-Za-z/_]+) \[(?P<lineno>\d+)\] (?P<levelname>[A-Z]+): (?P<message>.*)$'
                - timestamp:
                    source: asctime
                    format: "2006-01-02 15:04:05.000" # 타임스탬프에서 타임존 제외
                    location: Asia/Seoul
                    fallback_now: true # 타임스탬프 파싱 실패 시 현재 시간 사용
                - template:
                    source: message
                    template: |
                      {
                        "asctime": "{{ .asctime }}",
                        "levelname": "{{ .levelname }}",
                        "message": "{{ .message | toJson }}",
                        "funcName": "N/A",
                        "lineno": {{ .lineno }},
                        "exc_info": "null"
                      }
                - output:
                    source: message
                    format: json
    
      # MySQL 로그 수집 설정
      - job_name: mysql_logs
        static_configs:
          - targets:
              - localhost
            labels:
              job: my-devops-practice
              host: my-laptop
              application: mysql
              # __path__: ./tmp/mysql.log # 로그 파일 경로
              __path__: /var/log/mysql.log # MySQL 로그 파일 경로
        pipeline_stages:
          - match:
              selector: '{application="mysql"}'
              stages:
                - regex:
                    expression: '^(?P<asctime>\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{6}Z) (?P<lineno>\d+) \[(?P<levelname>\w+)\] (?P<message>.*)$'
                - timestamp:
                    source: asctime
                    format: "2006-01-02T15:04:05.000000Z" # 밀리초 자릿수를 6자리로 맞춤
                    location: Asia/Seoul
                    fallback_now: true # 타임스탬프 파싱 실패 시 현재 시간 사용. 과거로그 사용시 테스트 용
                - template:
                    source: message
                    template: |
                      {
                        "asctime": "{{ .asctime }}",
                        "levelname": "{{ .levelname }}",
                        "message": "{{ .message | toJson }}",
                        "funcName": "N/A",
                        "lineno": {{ .lineno }},
                        "exc_info": "null"
                      }
                - output:
                    source: message
                    format: json
    
      # Nginx 로그 수집 설정
      - job_name: nginx_logs
        static_configs:
          - targets:
              - localhost
            labels:
              job: my-devops-practice
              host: my-laptop
              application: nginx
              # __path__: ./tmp/nginx.log # 로그 파일 경로
              __path__: /var/log/nginx.log # Nginx 로그 파일 경로
        pipeline_stages:
          - match:
              selector: '{application="nginx"}'
              stages:
                - regex:
                    expression: '^(?P<message>(?P<client_ip>\d+\.\d+\.\d+\.\d+) - - \[(?P<asctime>[^\]]+)\] "(?P<method>\w+) (?P<url>[^"]+) HTTP/1\.\d" (?P<status_code>\d+) (?P<size>\d+) "(?P<referrer>[^"]*)" "(?P<user_agent>[^"]*)")$'
                - timestamp:
                    source: asctime
                    format: "02/Jan/2006:15:04:05 0000"
                    location: Asia/Seoul
                    fallback_now: true # 타임스탬프 파싱 실패 시 현재 시간 사용. 과거로그 사용시 테스트 용
                - template:
                    source: message
                    template: |
                      {
                        "asctime": "{{ .asctime }}",
                        "levelname": "INFO",
                        "message": "{{ .message | toJson }}",
                        "funcName": "N/A",
                        "lineno": "N/A",
                        "exc_info": "null"
                      }
                - output:
                    source: message
                    format: json
    ```
    
- 아래는 구조화 이후, Loki에서 수집된 로그
    - PostgreSQL
        
        ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/f8c1399e-1e57-456f-8f1d-cb8c872289fc/image.png)
        
    - MySQL
        
        ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/9794ce81-3004-4fb2-8808-bd1d96693e62/image.png)
        
    - Nginx
        
        ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/8762f1d3-f9b8-403a-88f9-a5d4005f2296/image.png)
        
- 아래 링크에서 관련 예시 참조
    - https://github.com/seungbaeji/practice_devops/tree/main/loki-cloud
        
        [practice_devops/loki-cloud at main · seungbaeji/practice_devops](https://github.com/seungbaeji/practice_devops/tree/main/loki-cloud)
        
        > ***⚠️ NOTE:** Loki에서는 너무 과거/미래의 log 는 수집하지 않음. 시간정보를 현재시간에 맞게 수정하여 실습 필요*
        > 

### 5-3. Log Prefix in Kubernetes

- 아래 그림과 같이, Kubernetes에서는 보통 `/var/log/pods`에 `pod` 들의 로그를 파일로 기록
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/346a4049-d7fa-47a1-8def-f004734e3e53/bb2c61a6-180d-4d1d-8714-6f033c0686c7/image.png)
    
- 아래는 Kubernetes에서 발생한 Log 예시
    
    ```bash
    2024-07-01T15:20:30.768518434Z stderr F W0701 15:20:30.768406       1 reflector.go:424] k8s.io/client-go@v0.26.3/tools/cache/reflector.go:169: failed to list *v1.Endpoints: apiserver not ready
    2024-08-27T19:33:12.916603383Z stdout F time="2024-08-27T19:33:12Z" level=error msg="Error while Peeking first byte: read tcp 10.42.0.8:8000->10.42.0.1:55366: read: connection timed out"
    2024-09-13T14:30:30.208400665Z stderr F time="2024-09-13T14:30:30Z" level=info msg="Alloc=11428 TotalAlloc=273683160 Sys=32101 NumGC=53088 Goroutines=106"
    ```
    
- Application에서 발생한 log 이외에, 세 개의 prefix가 붙어 있음을 알 수 있음
- Kubernetes 로그 prefix의 주요 요소
    
    
    | 요소 | 설명 | 예시 |
    | --- | --- | --- |
    | 타임스탬프 (Timestamp) | 로그가 기록된 시간을 나타내며, ISO 8601 형식으로 제공 | `2024-09-14T14:23:45.678Z` |
    | 출력 스트림 (Log Stream) | 로그가 어느 출력 스트림에서 발생했는지 나타냄 (`stdout` 또는 `stderr`) | `stdout` 또는 `stderr` |
    | 접미사 (Suffix) | 로그 메시지의 완전성을 나타내는 접미사로 `F`(완전) 또는 `P`(조각) 사용 | `F` (Full), `P` (Partial) |
- Promtail에서 log 정규화 시, prefix와 log message를 구분하여 정규화 필요. 아래는 관련 예시
    
    ```yaml
    ...
    snippets:
      pipelineStages:
        # Frontend
        - match:
            selector: '{app="kube-postgresql"}'
            stages:
              # Split prefix and extract log message
              - regex:
                  expression: '^(?P<asctime>\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+Z) (stdout|stderr) (F|P) (?P<log_message>.*)$'
              - timestamp:
                  source: asctime
                  format: "2006-01-02T15:04:05.000000000Z"
                  location: UTC
    
              - regex:
                  expression: '^(?P<asctime>\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\.\d{3}) (?P<timezone>[A-Za-z/_]+) \[(?P<lineno>\d+)\] (?P<levelname>[A-Z]+): (?P<message>.*)$'
                  source: log_message
    ```
    

---