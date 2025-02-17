---
layout: post
title: "Web SQA"
#date: 2024-11-23
categories: [course]
tags: [web, sqa]
---

# 🔷 소프트웨어 품질 보증(SQA)
--
## 🔘 소프트웨어 품질의 정의
### 🔸 일반적인 품질의 개념: 품질이란 무엇인가?

- 품질은 제품이나 서비스가 특정 요구 사항을 충족하는 정도를 의미
- 일반적으로 품질은 고객의 기대를 초과하거나 만족시키는 특성을 보유.
### 🔸 일적적인 품질의 주요특성
- 성능: 시스템의 기능이 요구사항을 얼마나 잘 충족하는가
- 신뢰성: 시스템의 안정성 및 결함 발생 빈도
- 사용성: 사용자 친화성 및 직관적인 인터페이스
- 효율성: 자원(시간, 메모리 등)을 얼마나 효율적으로 사용하는가
- 유지보수성: 소프트웨어 수정의 용이성

### 🔸 소프트웨어에서의 품질의 의미
- 소프트웨어 제품이 고객의 요구사항 및 기대에 부합하는지를 평가.
- 기능적 요구사항(어떤 기능을 제공해야 하는가)뿐만 아니라 비기능적 요구사항(성능, 보안, 사용성 등)을 포함.
- 프로젝트의 성공과 고객의 만족도에 직접적 영향.
--  
## 🔘 SQA의 개념 및 중요성

### 🔸 SQA가 왜 필요한가?

- 소프트웨어 복잡성: 현대 소프트웨어는 복잡도로 인한 오류와 결함이 발생할 가능성 증대.
 -> SQA는 오류를 사전에 예방하고 관리
- 비용 절감: 초기 단계에서 품질 문제를 발견하면 후속 단계에서 발생할 수 있는 수정 비용을 절감.
- 고객 신뢰 구축: 품질 보증을 통해 안정적이고 신뢰할 수 있는 소프트웨어를 제공함으로써 고객의 신뢰를 구축.
### 🔸SQA와 소프트웨어 개발 생명 주기(SDLC)의 관계
- SQA는 SDLC의 모든 단계에서 수행
- 요구사항 분석, 설계, 개발, 테스트, 배포 및 유지보수 단계 모두에 적용
- 각 단계에서 SQA 활동을 수행함으로써 품질 기준을 충족하고, 최종 제품의 품질을 보장

--
## 🔘 SQA의 목표
### 🔸오류 방지 및 발견
- SQA의 주요 목표 중 하나는 소프트웨어 개발 프로세스 중 발생할 수 있는 오류를 사전에 방지
- 결함 예방을 위한 다양한 방법론과 도구를 사용하여 초기 단계에서부터 품질을 강화.

### 🔸고객 만족도 향상
- 고객의 요구사항을 충족하는 소프트웨어를 개발함으로써 고객의 만족도를 높이는 것이 SQA의 핵심 목표.
- 고객 피드백을 반영하여 지속적으로 품질을 개선
### 🔸시간 및 비용 절감
- 품질 보증을 통해 프로젝트의 진행 과정에서 발생할 수 있는 리스크를 최소화 함으로써 시간과 비용을 절감할 수 있습니다.
- 결함을 조기에 발견하고 수정함으로써 전체 프로젝트 일정의 지연을 방지.
--
## 🔘 SQA와 품질 관리
### 🔸SQA와 품질 보증(QA)의 차이점

- SQA: 소프트웨어 개발 프로세스 전반에 걸쳐 품질을 보장하기 위한 활동으로, 품질 목표 달성을 위한 절차와 방법을 포함.
- QA: 주로 제품이 개발된 후의 품질 검사를 중심으로 하며, 제품이 요구된 품질 기준을 충족하는지를 평가.
### 🔸SQA와 품질 관리(QC)와의 차이점
- SQA: 예방적 접근법으로, 소프트웨어 개발 과정에서 품질을 보장하고 향상시키기 위한 모든 활동.
- QC: 제품의 최종 품질을 확인하기 위한 검사 및 테스트 과정으로, 주로 제품의 기능과 성능을 확인하는 데 집중.

---
# 🔷 SQA 프로세스
--
## 🔘 소프트웨어 품질 보증의 단계 및 절차
### 🔸 SQA의 세 가지 주요 단계
계획: SQA 활동을 위한 목표 및 전략 수립
실행: 계획에 따라 품질 보증 활동 수행
검토 및 개선: 활동 결과를 평가하고 향후 개선사항 도출

### 🔸 계획 단계
- 목표 설정: 품질 목표 및 기준 정의
- 리소스 배분: 필요한 인력, 도구 및 예산 계획
### 🔸 실행 단계
- 활동 수행: 계획된 SQA 활동을 기반으로 실행
- 문서화: 진행 과정 및 결과 문서화
### 🔸 검토 및 개선 단계
- 검토 회의: 결과 및 성과 평가
- 개선 사항 도출: 향후 활동을 위한 개선 방안 제시
--
## 🔘 소프트웨어 품질 보증의 단계 및 절차
### 🔸 SQA 계획 수립 : 품질 계획서 작성법
- 품질 목표
- 활동 계획
- 리소스 배분
- 일정
### 🔸 품질 목표 설정 : SMART 목표 설정
- 구체적(Specific)
- 측정 가능(Measurable)
- 달성 가능(Achievable)
- 관련성(Relevant)
- 시간 기반(Time-bound)
--
## 🔘 품질 평가(QA) 활동
### 🔸 검토(리뷰) 및 테스트 전략 수립
- 검토의 중요성: 결함 조기 발견 및 예방
- 테스트 전략 수립: 테스트 범위, 방법, 및 도구 정의
### 🔸 소프트웨어 검토 : 개발 과정에서의 품질 확인
- 동료 리뷰 : 동료 간 코드 및 문서 검토, 결함 발견 및 지식 공유
- 감사: 품질 관리 절차의 검토, 규정 준수 및 프로세스 개선
- 공식 검토 : 구조화된 검토 절차, 참가자, 역할, 결과 문서화
--
## 🔘 위험 관리 및 품질 보증
### 🔸 품질 관련 위험 평가
- 위험의 정의: 품질에 영향을 미칠 수 있는 불확실성
- 위험 평가 방법: 영향도 및 발생 가능성 평가
### 🔸 위험 관리 기법
- 회피(Avoidance): 위험 회피 전략
- 경감(Mitigation): 위험 영향 줄이기
- 수용(Acceptance): 위험 수용
### 🔸 SQA 도구 및 기법
- JIRA: 결함 추적 및 프로젝트 관리
- Jenkins: CI/CD 자동화 도구
- Selenium: 자동화 테스트 도구
--
### 🔸 SQA의 도전 과제
- 커뮤니케이션 부족
- 명확한 요구사항 부족
- 시간 및 비용 제약
### 🔸 SQA 프로세스 개선 방법
- 지속적인 교육 및 훈련
- 피드백 수집 및 반영
- 프로세스 자동화

---
# 🔷 소프트웨어 테스트 개요
--
## 🔘 소프트웨어 테스트의 기본 개념
-  소프트웨어 테스트의 기본 개념 및 중요성
### 🔸 테스트의 목적
- 소프트웨어 제품의 품질을 보장하기 위해 수행되는 과정
- 주요 목적:
  - 요구사항 충족 여부 확인
  - 제품의 신뢰성 보장
  - 고객의 만족도 향상
### 🔸 오류 탐지 및 예방
- 오류 탐지: 소프트웨어 개발 단계에서 발생할 수 있는 결함 발견
- 오류 예방: 품질 관리 활동을 통해 향후 결함 발생 가능성 감소
- 초기 테스트를 통한 결함 발견률 증가
--
## 🔘 테스트의 유형
### 🔸 단위 테스트 (Unit Testing)
- 개별 모듈이나 컴포넌트를 독립적으로 테스트
- 목적: 각 모듈의 기능이 정확하게 작동하는지 확인
- 도구: JUnit, NUnit
### 🔸 통합 테스트 (Integration Testing)
- 여러 모듈 간의 상호작용을 테스트
- 목적: 모듈 간의 데이터 흐름과 인터페이스 문제 확인
- 도구: TestNG, Postman
### 🔸 시스템 테스트 (System Testing)
- 전체 시스템이 요구사항을 충족하는지 테스트
- 목적: 시스템의 기능, 성능, 보안, 사용성 확인
- 도구: Selenium, LoadRunner
--
## 🔘 테스트의 유형
### 🔸 인수 테스트 (Acceptance Testing)
- 최종 사용자가 시스템을 수용할 준비가 되었는지 테스트
- 목적: 고객의 요구사항 및 비즈니스 목표에 부합하는지 확인
- 유형: 알파 테스트, 베타 테스트
## 🔘 테스트 기법
### 🔸 블랙박스 테스트
- 내부 구조나 동작을 무시하고 기능만을 테스트
- 장점: 사용자 관점에서의 검증 가능
- 예시: 기능 테스트, 시스템 테스트
--
## 🔘 테스트 기법
### 🔸 화이트박스 테스트
- 내부 구조와 동작을 기반으로 테스트
- 장점: 코드의 경로, 조건, 루프 등을 검증 가능
- 예시: 코드 커버리지 테스트, 경로 테스트
### 🔸 회귀 테스트 (Regression Testing)
- 기존 기능이 변경 후에도 정상 작동하는지 확인
- 목적: 소프트웨어 변경 후 발생할 수 있는 결함 발견
- 사례: 소프트웨어 업데이트 후 테스트 수행
--
## 🔘 테스트 케이스 작성
### 🔸 테스트 케이스의 정의
- 특정 테스트 목표를 달성하기 위한 문서화된 절차
- 구성 요소: 테스트 ID, 설명, 입력값, 예상 결과
### 🔸 효과적인 테스트 케이스 설계 방법
- 기법: 동등 분할, 경계 값 분석, 상태 전이 테스트
- 팁: 명확하고 구체적인 테스트 케이스 작성
--
## 🔘 테스트 케이스 작성
### 🔸 동등 분할 (Equivalence Partitioning)
- 입력 데이터를 유사한 그룹(동등 분할)으로 나누어 각 그룹에서 하나의 테스트 케이스만 선택하여 테스트하는 기법.
- 중복된 테스트를 줄이고 효율적으로 다양한 입력을 테스트.
- 장점: 테스트 케이스 수를 줄이면서 효과적인 커버리지 달성.
<pre>
  예시:
    사용자 비밀번호 입력 필드: 비밀번호는 최소 8자 이상, 최대 20자 이하의 입력을 허용한다고 가정.
  동등 분할:
    8자 미만 (비유효 범위), 8~20자 (유효 범위), 20자 초과 (비유효 범위)
  각 범위에서 하나씩 테스트: 7자, 10자, 21자로 테스트.
</pre>
--
## 🔘 테스트 케이스 작성
### 🔸 경계 값 분석 (Boundary Value Analysis)
- 입력 값의 경계에서 오류가 발생하기 쉽다는 점을 이용해 경계 주변 값(최소, 최대 값)을 테스트하는 기법.
- 목적: 경계 근처에서 발생할 수 있는 결함을 발견.
- 예시: 나이 범위가 0~100이라면, 0, 1, 99, 100, 그 외 경계 주변 값을 테스트.
- 장점: 경계에서 발생하는 오류를 쉽게 발견 가능.
--
## 🔘 테스트 케이스 작성
### 🔸 상태 전이 테스트 (State Transition Testing)
- 시스템이 특정 상태에서 다른 상태로 전이할 때의 동작을 테스트하는 기법. 상태 간의 전이 규칙에 따라 테스트 케이스 설계.
- 목적: 상태 변화에 따른 시스템의 올바른 동작 여부를 검증.
- 예시: ATM 기기에서 로그인 후 잔액 조회 -> 출금 -> 로그아웃 상태 전이.
- 장점: 시스템이 복잡한 상태 변화를 처리하는지 검증 가능.
--
## 🔘 테스트 케이스 작성
### 🔸테스트 기법 비교
- 동등 분할: [특징] 입력 데이터를 그룹화하여 대표 케이스 테스트. [장점] 테스트 수를 줄여 효율성 증가.
- 경계 값 분석: [특징] 경계 값을 중심으로 테스트, [장점] 경계 값에서 오류 발견 확률 높음.
- 상태 전이 테스트: [특징] 상태 변화에 중점을 둔 테스트. [장점] 복잡한 상태 전이 시스템에 적합.
--
## 🔘 테스트 자동화
### 🔸 자동화 도구 개요
- 테스트 프로세스의 효율성 향상
- 장점: 시간 절약, 반복 가능성, 신뢰성 향상
### 🔸 주요 테스트 자동화 도구
- Selenium: 웹 애플리케이션 테스트
- JUnit: Java 단위 테스트
- TestNG: 테스트 프레임워크
### 🔸 선택 기준
- 기능: 도구가 지원하는 기능
- 사용자 편의성: 사용의 용이성 및 학습 곤란도
- 커뮤니티 지원: 사용자 및 개발자 커뮤니티의 크기
- 비용: 라이센스 및 유지 보수 비용

---
# 🔷 결함 관리 (Bug Tracking)
--
## 🔘결함 관리 (Bug Tracking)
### 🔸 결함과 오류의 차이
- 결함(Defect): 요구사항을 충족하지 못하는 소프트웨어의 상태
- 오류(Error): 소프트웨어가 잘못된 방식으로 작동하게 하는 코드의 문제
- 결함: 사용자의 요구에 비추어 볼 때 문제
- 오류: 프로그래머의 실수로 인한 코드의 잘못된 동작
### 🔸 결함 관리의 프로세스
- 발견, 기록, 분석, 수정, 검증 및 폐기
### 🔸 발견
- 방법: 테스트, 사용자 피드백, 코드 리뷰 등
- 중요성: 결함 발견이 조기 해결의 첫걸음
### 🔸 기록
내용: 결함 발생 시 기록해야 할 사항
예시: 결함 ID, 설명, 발견 날짜 등
--
## 🔘결함 관리 (Bug Tracking)
### 🔸 분석
- 분석 기법: 결함의 원인 파악 및 재발 방지
- 도구 활용: Root Cause Analysis (RCA)
### 🔸 수정
- 과정: 결함 수정 후 새로운 버전 배포
- 문서화: 수정 내용 및 관련 문서 업데이트
### 🔸 검증 및 폐기
- 검증: 수정된 결함이 정상적으로 작동하는지 확인
- 폐기: 검증 후 결함 목록에서 제거

--
## 🔘 결함 추적 도구
### 🔸 JIRA 소개
- 기능: 결함 추적, 프로젝트 관리, 팀 협업
- 장점: 사용자 친화적인 인터페이스, 강력한 보고 기능
### 🔸 Bugzilla 소개
- 기능: 결함 기록, 수정 요청, 추적
- 장점: 오픈 소스, 다양한 플러그인 지원
### 🔸 그 외 주요 도구
- Mantis: 사용자 친화적인 인터페이스
- Redmine: 프로젝트 관리 및 결함 추적 통합
- Trello: 비주얼 관리 및 간단한 결함 추적
--
## 🔘 결함 보고서 작성법
### 🔸 효과적인 결함 보고서 작성 가이드
- 결함 ID
- 결함 제목
- 설명
- 재현 단계
- 예상 결과 및 실제 결과
--  
## 🔘 결함 관리
### 🔸 결함 우선순위 정하기
- 우선순위 기준: 고객 영향도, 비즈니스 목표와의 관계, 해결 시간
### 🔸 심각도 수준: 
- 심각도 1: 치명적 결함 (즉각적 수정 필요)
- 심각도 2: 중요 결함 (조속한 수정 필요)
- 심각도 3: 경미한 결함 (예정된 수정 가능)
### 🔸 결함 관리 시 유의사항
- 지속적인 개선 : 결함 관리 과정에서 얻은 교훈을 통한 개선
- 결함 통계 및 보고 : 결함 통계 분석을 통한 품질 관리, 결함 분석 리포트
### 🔸 결함 관리의 도전 과제
- 결함 우선순위 조정의 어려움
- 팀 간 커뮤니케이션 부족
---
# 🔷 SQA 도구 및 자동화
--
## 🔘 주요 SQA 도구 소개
### 🔸 소스 코드 관리 도구
- 소스 코드의 버전 관리를 통해 팀 협업을 지원
- 코드 변경 이력 관리, 팀원 간 협업 촉진
- 주요 도구: Git, SVN
### 🔸 정적 분석 도구
- 코드의 오류를 사전에 발견하기 위한 도구
- 코드 품질 향상, 결함 조기 발견
- 주요 도구: SonarQube, Checkstyle
### 🔸 결함 추적 도구
- 소프트웨어 결함을 기록하고 관리하는 도구
- 결함 상태 추적, 우선순위 지정
- 주요 도구: JIRA, Bugzilla
--
## 🔘 주요 SQA 도구 소개
### 🔸 Jenkins
- 오픈 소스 CI/CD 도구
- 자동화된 빌드 및 배포
- 플러그인 지원, 다양한 CI/CD 통합 가능
### 🔸 Selenium
- 웹 애플리케이션 자동화 테스트 도구
- 다양한 브라우저에서 자동화된 테스트 수행
- 여러 언어 지원, 강력한 커뮤니티
### 🔸 SonarQube
- 코드 품질 분석 도구
- 코드 품질 및 보안 취약점 분석
- 지속적인 품질 관리를 위한 통합 대시보드 제공
--
## 🔘 자동화된 테스트
### 🔸 자동화 테스트의 장점
- 효율성: 반복적인 테스트 자동화로 시간 절약
- 신뢰성: 동일한 테스트를 여러 번 수행 가능
- 범위 확장: 더 많은 테스트 케이스를 처리할 수 있음
### 🔸 자동화 테스트의 단점
- 비용: 초기 설정 및 도구 구입에 드는 비용
- 유지 보수: 테스트 스크립트의 지속적인 업데이트 필요
- 복잡성: 테스트 자동화 환경 설정의 복잡성
### 🔸 스크립트 작성 기법
- 효과적인 스크립트 작성 요령:
- 모듈화: 재사용 가능한 스크립트 작성
- 주석: 코드에 대한 충분한 설명 추가
- 예외 처리: 예외 상황을 고려한 코드 작성
--
## 🔘 CI/CD와 품질 보증
### 🔸 지속적 통합(CI)
- 개발자들이 코드 변경을 빈번하게 병합하여 지속적으로 테스트하는 프로세스.
### 🔸 지속적 배포(CD)
- 코드가 배포될 준비가 완료된 후 자동으로 배포되거나 수동으로 승인되는 프로세스.
### 🔸 SQA의 중요성:
- 개발과 배포의 효율성 향상, 빠른 피드백 제공, 품질 보증 향상.
- CI/CD 파이프라인에 SQA를 통합하여 품질 기준을 유지하고 잠재적 결함을 조기에 발견.
### 🔸 CI/CD 파이프라인과 SQA
- CI/CD 파이프라인 프로세스 흐름
  1. 코드 커밋: 버그나 성능 문제를 초기 단계에서 발견하고, 코드 품질을 보장. 커밋 시점에 정적 코드 분석 도구(SonarQube 등)를 사용해 코드 표준 준수 여부 확인.
  2. 빌드 단계: 변경된 코드가 다른 모듈과 충돌하지 않고 정상적으로 동작하는지 검증. 자동화된 테스트 수행 (유닛 테스트, 빌드 유효성 테스트 등). 
  3. 테스트 단계: 새로운 변경 사항이 기존 기능에 영향을 미치지 않도록 보장.다양한 테스트 케이스와 시나리오를 통해 코드가 요구사항을 충족하는지 확인.  기능, 회귀 테스트 및 통합 테스트 수행. 
  4. 배포 단계: 배포된 시스템이 실환경에서 안정적으로 동작하는지 확인. 성능 테스트, 사용자 인수 테스트(UAT), 모니터링을 통한 품질 보증.
- SQA는 CI/CD 파이프라인 전반에서 중요한 역할을 하며, 품질을 보증하면서도 배포 속도를 저해하지 않아야 함.
---
# 🔷 SQA 실무 적용
--
## 🔘 실무에서의 SQA 역할
### 🔸 SQA 팀의 역할과 책임
- 책임: 품질 기준 설정, 결함 관리, 품질 평가
- 팀의 기능: 테스트 계획 수립, 테스트 실행, 품질 개선
### 🔸 SQA와 다른 부서의 협업
- 중요성: 개발팀, 운영팀과의 협업을 통해 품질 보장
- 협업 방안: 정기적인 회의, 피드백 세션
## 🔘  SQA 프로젝트 관리
### 🔸 품질 관련 리소스 관리
- 리소스 관리: 인력, 도구, 시간 관리
- 성과 측정: 품질 지표와 성과 분석
### 🔸 SQA 적용 방법
- Agile, Waterfall에서의 SQA 적용
--
## 🔘 소프트웨어 인증
### 🔸 ISO 9001
- 품질 경영 시스템 인증
- 고객 만족 및 지속적인 개선
### 🔸 CMMI
- 프로세스 개선을 위한 모델
- 레벨: 초기, 관리, 정의, 정량적 관리, 최적화
### 🔸 인증의 중요성
- 품질 향상, 고객 신뢰 증대, 경쟁력 강화
--
### 🔸 SQA 실무 적용의 어려움
- 품질 기준 충족의 어려움
- 인력 부족 및 훈련 문제
### 🔸 SQA의 미래
- 자동화 및 AI의 역할 증대