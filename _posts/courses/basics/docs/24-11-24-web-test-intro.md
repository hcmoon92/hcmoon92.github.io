---
layout: post
title: "Web Test"
#date: 2024-11-23
categories: [course]
tags: [web]
---

<!-- .slide: data-background="linear-gradient(to right, white, #0072ff)" -->

# 🔷 웹 테스트 소개 및 기초
--
<!-- .slide: data-background="linear-gradient(to right, white, #0072ff)" -->

## 🔘 웹 테스트 소개
### 🔸 웹 테스트란 무엇인가?
- 정의: 웹 테스트는 웹 애플리케이션의 기능, 성능, 보안을 확인하기 위한 프로세스.
- 목적: 웹 애플리케이션이 요구사항에 맞게 작동하는지 검증하고, 사용자에게 오류 없는 경험을 제공하기 위함.
### 🔸 웹 테스트의 중요성
- 품질 보증: 사용자가 웹 애플리케이션을 사용할 때 발생할 수 있는 문제를 사전에 발견하여 품질을 높임.
- 비용 절감: 초기 단계에서 오류를 찾아 수정함으로써, 나중에 발생할 수 있는 수리 비용을 절감.
- 사용자 신뢰: 안정적이고 신뢰할 수 있는 웹 애플리케이션을 통해 사용자에게 긍정적인 경험을 제공.
--
<!-- .slide: data-background="linear-gradient(to right, white, #0072ff)" -->

## 🔘 웹 테스트 소개
### 🔸 웹 테스트의 종류
- 기능 테스트: 애플리케이션의 기능이 올바르게 작동하는지 확인.
- 성능 테스트: 시스템이 부하를 처리할 수 있는 능력을 측정.
- 보안 테스트: 애플리케이션의 취약점을 식별하고 보안성을 검증.
- 호환성 테스트: 다양한 브라우저와 기기에서 애플리케이션이 잘 작동하는지 확인.
- 사용성 테스트: 사용자 경험을 평가하여 사용자 인터페이스의 직관성을 검증.
--
<!-- .slide: data-background="linear-gradient(to right, white, #0072ff)" -->

## 🔘 웹 테스트 소개

### 🔸 HTTP 프로토콜 이해
- HyperText Transfer Protocol(HTTP)은 클라이언트와 서버 간에 데이터를 전송하기 위한 규약.
- 작동 방식: 클라이언트가 서버에 요청을 보내고, 서버가 응답을 반환하는 방식으로 작동.
### 🔸 HTTP 요청의 구성
- 메서드: GET, POST, PUT, DELETE 등 요청의 종류를 정의.
- URL: 요청할 자원의 위치를 나타냅니다.
- 헤더: 요청에 대한 추가 정보를 제공.
### 🔸 HTTP 응답의 구성
- 상태 코드: 요청의 성공 여부를 나타내며, 200, 404, 500 등의 코드.
- 헤더: 응답에 대한 추가 정보를 포함.
- 본문: 요청된 데이터가 포함.
--
<!-- .slide: data-background="linear-gradient(to right, white, #0072ff)" -->

## 🔘 웹 테스트 소개

### 🔸 웹 애플리케이션 구조
- 클라이언트 측: HTML, CSS, JavaScript로 구성되어 사용자와 상호작용.
- 서버 측: 데이터베이스와 애플리케이션 로직을 처리하는 서버에서 실행.
### 🔸 웹 애플리케이션 아키텍처
- 프론트엔드: 사용자 인터페이스와 사용자 경험을 담당.
- 백엔드: 데이터 처리 및 비즈니스 로직을 처리.
- 데이터베이스: 데이터를 저장하고 관리.
--
<!-- .slide: data-background="linear-gradient(to right, white, #0072ff)" -->

## 🔘 웹 테스트 소개

### 🔸 클라이언트와 서버의 관계
- 클라이언트: 사용자 요청을 보내고, 서버로부터 응답을 받습니다.
- 서버: 클라이언트의 요청을 처리하고 필요한 데이터를 반환.
### 🔸 클라이언트-서버 모델
- 1단계: 클라이언트가 요청을 보냄
- 2단계: 서버가 요청을 처리
- 3단계: 서버가 응답을 클라이언트에 반환
--
<!-- .slide: data-background="linear-gradient(to right, white, #0072ff)" -->

## 🔘 웹 테스트 소개

### 🔸 웹 테스트의 역할
- 기능 검증: 각 기능이 의도한 대로 작동하는지 확인
- 버그 발견: 개발 단계에서 문제를 조기에 발견하여 수정
### 🔸 웹 테스트 도구 소개
- Selenium: 웹 애플리케이션 테스트 자동화 도구
- Postman: API 테스트를 위한 도구
- JMeter: 성능 테스트 도구
### 🔸 웹 테스트 프로세스
- 요구사항 분석: 테스트할 기능 및 요구사항 정리
- 테스트 계획 수립: 테스트 전략 및 리소스 계획
- 테스트 실행: 실제 테스트 수행
- 결과 분석: 결과 검토 및 보고서 작성
--
<!-- .slide: data-background="linear-gradient(to right, white, #0072ff)" -->

## 🔘 웹 테스트 소개

### 🔸 테스트 케이스 작성
- 정의: 특정 기능을 테스트하기 위한 단계 및 조건을 문서화.
- 형식: 테스트 목적, 입력 값, 예상 결과 등을 포함.
### 🔸 테스트 자동화의 이점
- 시간 절약: 반복적인 테스트 작업을 자동화하여 시간 절약
- 일관성: 동일한 테스트를 반복적으로 수행하여 결과의 일관성 보장
### 🔸 테스트 자동화 도구 소개
- Selenium WebDriver: 웹 브라우저를 자동으로 조작하는 도구
- JUnit/TestNG: Java 기반의 단위 테스트 프레임워크
- Cypress: 최신 웹 애플리케이션 테스트를 위한 도구
### 🔸 웹 테스트 실습
- 기본 실습: Selenium을 이용한 간단한 웹 자동화 테스트 예제
- API 테스트 실습: Postman을 활용한 API 테스트

---
<!-- .slide: data-background="linear-gradient(to right, #0072ff, white)" -->

# 🔷 테스트 계획 및 전략
--
<!-- .slide: data-background="linear-gradient(to right, #0072ff, white)" -->

## 🔘 테스트 계획 및 전략

### 🔸 테스트 계획의 정의
- 목적: 테스트 진행을 위한 명확한 방향성을 제공.
- 테스트 계획은 테스트 활동의 목표, 범위, 리소스 및 일정에 대한 문서화된 설명.
### 🔸 테스트 계획의 중요성
- 조직적 접근: 테스트 활동을 체계적으로 관리하고 조정.
- 리소스 관리: 필요한 인력과 도구를 사전에 계획하여 효율성을 높임.
### 🔸 테스트 계획의 주요 요소
- 테스트 목표: 테스트의 목적 및 기대 결과
- 테스트 범위: 테스트할 기능과 제외할 기능의 정의
- 리소스: 인력, 도구, 시간 등의 요구 사항
- 일정: 각 테스트 활동의 시작 및 종료 날짜
- 위험 관리: 프로젝트에서 발생할 수 있는 위험 요소와 대처 방안
--
<!-- .slide: data-background="linear-gradient(to right, #0072ff, white)" -->

## 🔘 테스트 계획 및 전략

### 🔸 테스트 전략의 정의
- 목적: 일관된 방식으로 테스트를 수행하고, 자원과 시간을 최적화.
- 테스트 전략은 테스트 목표를 달성하기 위한 방법론과 접근 방식을 규정하는 문서.
### 🔸 테스트 전략의 주요 구성 요소
- 테스트 종류: 기능 테스트, 성능 테스트, 보안 테스트 등
- 테스트 접근법: 수동 테스트 또는 자동화 테스트 선택
### 🔸 테스트 전략 수립 방법
- 요구사항 분석: 고객의 요구사항과 기대 결과 파악
- 테스트 범위 정의: 테스트할 영역과 제외할 영역 결정
- 리소스 평가: 필요한 인력, 도구 및 환경 확인
- 위험 요소 식별: 테스트 시 발생할 수 있는 위험 요소 파악
- 우선순위 설정: 테스트할 기능의 중요도에 따라 우선순위 결정
- 문서화: 모든 요소를 문서화하여 테스트 계획 수립
--
<!-- .slide: data-background="linear-gradient(to right, #0072ff, white)" -->

## 🔘 테스트 계획 및 전략

### 🔸 리스크 기반 테스트 접근법
- 목적: 위험이 큰 부분에 집중하여 자원을 효율적으로 사용.
- 리스크 기반 테스트는 프로젝트에서 발생할 수 있는 위험 요소에 따라 테스트 우선순위를 정하는 방법.
### 🔸 리스크 기반 테스트의 이점
- 효율성: 가장 중요한 기능에 집중하여 테스트 리소스를 최적화.
- 비용 절감: 리스크가 큰 영역에서 문제를 조기에 발견하여 수정 비용 절감
### 🔸 리스크 식별 단계
- 리스크 목록 작성: 프로젝트 관련 모든 리스크를 나열.
- 리스크 평가: 발생 가능성과 영향을 평가하여 우선순위 설정
--
<!-- .slide: data-background="linear-gradient(to right, #0072ff, white)" -->

## 🔘 테스트 계획 및 전략
### 🔸 리스크 평가 방법
- 발생 가능성: 리스크가 발생할 확률 (낮음, 중간, 높음)
- 영향도: 리스크가 발생했을 때 프로젝트에 미치는 영향 (경미, 중간, 심각)
### 🔸 리스크 기반 테스트 계획 수립
- 테스트 케이스 우선순위 설정: 리스크에 따라 테스트 케이스의 우선순위를 정함.
- 테스트 수행: 우선순위에 따라 테스트를 진행.
### 🔸 리스크 기반 테스트 사례
- 예시: 웹 애플리케이션에서 로그인 기능과 결제 기능은 높은 리스크가 있으므로 우선적으로 테스트.
- 결과: 리스크가 높은 기능에서 발생한 문제를 사전에 발견하고 수정.
--
<!-- .slide: data-background="linear-gradient(to right, #0072ff, white)" -->

## 🔘 테스트 계획 및 전략

### 🔸 테스트 문서화의 중요성
- 투명성: 모든 테스트 활동을 문서화하여 팀원 간의 이해를 돕습니다.
- 재사용성: 이전 테스트 계획을 바탕으로 새로운 프로젝트에 적용 가능
### 🔸 테스트 계획 문서의 예시 구성
- 테스트 목표: 테스트의 목적
- 테스트 범위: 포함 및 제외될 기능
- 테스트 방법론: 수동 및 자동화 방법
### 🔸 테스트 진행의 피드백
- 피드백 수집: 테스트 수행 후 팀원 및 고객으로부터 피드백을 받습니다.
- 계속 개선: 피드백을 바탕으로 테스트 계획 및 전략을 수정.
### 🔸 리소스 관리
- 인력 관리: 필요한 인력 배정 및 일정 조정
- 도구 관리: 필요한 테스트 도구의 확보 및 설치




---
<!-- .slide: data-background="linear-gradient(to bottom right, white, #e6ffee)" -->

# 🔷 웹 테스트 도구
--
<!-- .slide: data-background="linear-gradient(to bottom right, white, #e6ffee)" -->

## 🔘 웹 테스트 도구
### 🔸 웹 테스트 도구의 중요성
- 웹 테스트 도구는 웹 애플리케이션의 기능, 성능, 보안을 테스트하기 위한 소프트웨어.
- 테스트 과정을 자동화하고 효율성을 높이며, 오류를 조기에 발견하는 데 도움
### 🔸 Selenium 소개
- Selenium은 웹 애플리케이션을 자동으로 테스트하기 위한 오픈 소스 도구.
- 다양한 브라우저와 플랫폼에서 지원되며, 유연성과 확장성이 뛰어남.
### 🔸 Selenium의 구성 요소
- Selenium WebDriver: 웹 브라우저를 제어하여 테스트를 수행.
- Selenium IDE: 테스트 케이스를 녹화하고 재생할 수 있는 도구.
- Selenium Grid: 여러 환경에서 테스트를 동시에 실행할 수 있도록 지원.
--
<!-- .slide: data-background="linear-gradient(to bottom right, white, #e6ffee)" -->

## 🔘 웹 테스트 도구

### 🔸 Selenium의 장점
- 다양한 브라우저 지원: Chrome, Firefox, Safari 등 다양한 브라우저에서 테스트 가능.
- 언어 지원: Java, Python, C#, Ruby 등 여러 프로그래밍 언어에서 사용.
### 🔸 Selenium 설치 및 설정
- 필수 요구 사항:
- Java Development Kit (JDK) 설치
- IDE (IntelliJ, Eclipse 등) 설치
### 🔸 Selenium 설치 과정
- JDK 설치: Oracle 또는 OpenJDK에서 JDK 다운로드 및 설치.
- IDE 설치: 선호하는 IDE를 다운로드하여 설치.
### 🔸 Selenium WebDriver 다운로드
- WebDriver 다운로드: 브라우저에 맞는 WebDriver를 다운로드.
- Chrome: ChromeDriver
- Firefox: GeckoDriver
--
<!-- .slide: data-background="linear-gradient(to bottom right, white, #e6ffee)" -->

## 🔘 웹 테스트 도구

### 🔸 Selenium 환경 설정
- 환경 변수 설정: 시스템 환경 변수에 WebDriver 경로를 추가.
- IDE 프로젝트 설정: Selenium 라이브러리를 프로젝트에 추가.
### 🔸 기본적인 Selenium 스크립트 작성
- 스크립트 구조:
```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Test {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "chromedriver_path");
        WebDriver driver = new ChromeDriver();
        driver.get("http://example.com");
        driver.quit();
    }
}
```
--
<!-- .slide: data-background="linear-gradient(to bottom right, white, #e6ffee)" -->

## 🔘 웹 테스트 도구

### 🔸 Selenium 스크립트 설명
- WebDriver 객체 생성: WebDriver 인터페이스를 구현하는 ChromeDriver 객체를 생성.
- URL 열기: driver.get("URL") 메서드로 웹 페이지를 엽니다.
- 드라이버 종료: driver.quit() 메서드로 브라우저를 종료.
### 🔸 Selenium의 주요 명령어
- findElement: 요소 찾기
- click: 클릭 이벤트
- sendKeys: 입력 필드에 텍스트 입력
- getTitle: 현재 페이지의 제목 가져오기
--
<!-- .slide: data-background="linear-gradient(to bottom right, white, #e6ffee)" -->

## 🔘 웹 테스트 도구

### 🔸 JUnit 소개
- JUnit은 Java에서 단위 테스트를 위한 프레임워크.
- 테스트 케이스 작성 및 실행, 결과 보고가 용이.
### 🔸 JUnit 기본 구조
```java
import org.junit.Test;
import static org.junit.Assert.*;

public class ExampleTest {
    @Test
    public void testAddition() {
        assertEquals(2, 1 + 1);
    }
}
```
--
<!-- .slide: data-background="linear-gradient(to bottom right, white, #e6ffee)" -->

## 🔘 웹 테스트 도구

### 🔸 TestNG 소개
- TestNG는 JUnit을 기반으로 한 테스트 프레임워크로, 더 많은 기능을 제공.
- 병렬 테스트 실행, 데이터 주입, 다양한 테스트 그룹 설정 등이 가능.
### 🔸 TestNG 기본 구조
```java
import org.testng.annotations.Test;

public class ExampleTest {
    @Test
    public void testAddition() {
        assertEquals(2, 1 + 1);
    }
}
```
--
<!-- .slide: data-background="linear-gradient(to bottom right, white, #e6ffee)" -->

## 🔘 웹 테스트 도구

### 🔸 TestNG의 장점
- 유연한 테스트 구성: 다양한 테스트 방식 지원
- 병렬 실행: 여러 테스트를 동시에 실행 가능
- XML 파일을 통한 설정: 테스트 실행 및 설정을 XML로 관리
--
<!-- .slide: data-background="linear-gradient(to bottom right, white, #e6ffee)" -->

## 🔘 웹 테스트 도구

### 🔸 Postman 소개
- Postman은 API 테스트를 위한 강력한 도구.
- RESTful API에 대한 요청을 쉽게 만들고 테스트.
### 🔸 Postman의 기능
- 요청 생성: GET, POST, PUT, DELETE 등의 요청 작성
- 파라미터 설정: URL 및 본문에 파라미터 추가
- 테스트 스크립트 작성: 요청 후 응답 검증을 위한 테스트 스크립트 추가
### 🔸 Postman에서 API 테스트
- Postman 실행: Postman 앱을 실행.
- 새 요청 생성: 요청을 생성하여 URL 입력.
- HTTP 메서드 선택: GET, POST 등 선택.
- 요청 전송: "Send" 버튼 클릭하여 요청 전송.
--
<!-- .slide: data-background="linear-gradient(to bottom right, white, #e6ffee)" -->

## 🔘 웹 테스트 도구

### 🔸 Postman 응답 확인
- 상태 코드: 요청에 대한 서버 응답 상태 코드 확인
- 본문 내용: 서버로부터 받은 응답 데이터 확인
- 테스트 결과: 테스트 스크립트 결과 확인
### 🔸 Postman의 테스트 스크립트 예시
```javascript
pm.test("응답 상태가 200인지 확인", function () {
    pm.response.to.have.status(200);
});
```
--
<!-- .slide: data-background="linear-gradient(to bottom right, white, #e6ffee)" -->

## 🔘 웹 테스트 도구

### 🔸 Postman의 환경 변수
- 환경에 따라 변수를 변경하여 여러 환경에서 요청을 쉽게 테스트.
- API 요청에 사용할 변수(예: 토큰, URL 등)를 저장
### 🔸 Postman의 컬렉션 기능
- 테스트 시나리오를 정의하고, 문서화하여 팀원과 공유 가능
- 여러 API 요청을 그룹화하여 관리할 수 있는 기능
### 🔸 Selenium과 Postman의 차이
- Selenium: 주로 웹 애플리케이션의 UI 테스트에 사용
- Postman: API 요청 및 응답 테스트에 특화된 도구
--
<!-- .slide: data-background="linear-gradient(to bottom right, white, #e6ffee)" -->

## 🔘 웹 테스트 도구

### 🔸 웹 테스트 도구 통합
- 자동화: Selenium과 Postman을 함께 사용하여 웹 애플리케이션과 API의 통합 테스트 수행
- 효율성: 다양한 테스트 도구를 조합하여 테스트 범위를 넓힙니다.
### 🔸 웹 테스트 도구 선택 기준
- 프로젝트 요구 사항: 프로젝트의 특정 요구 사항에 맞는 도구 선택
- 팀의 기술 스택: 팀원들이 익숙한 언어 및 도구 기반 선택
- 커뮤니티 지원: 사용자가 많은 도구 선택하여 문제 해결의 용이성 확보
### 🔸 도구 설치 및 설정의 중요성
- 정확한 설치: 도구가 올바르게 설치되지 않으면 테스트 결과가 부정확.
- 정기적인 업데이트: 최신 버전으로 업데이트하여 보안 및 성능 유지
### 🔸 웹 테스트 도구의 활용
- 테스트 자동화: 반복적인 테스트 작업을 자동화하여 시간과 비용 절감
- 테스트 커버리지 향상: 다양한 도구를 통해 테스트 범위를 넓히고, 품질 향상
### 🔸 자주 발생하는 문제 및 해결 방법
- Selenium WebDriver 오류: 드라이버 버전 불일치 문제 해결
- Postman 응답 오류: API 문서와의 불일치 점검

---
<!-- .slide: data-background="linear-gradient(to bottom right, #e6ffee, white)" -->

# 🔷 수동 테스트
-- 
<!-- .slide: data-background="linear-gradient(to bottom right, #e6ffee, white)" -->

## 🔘 수동 테스트

### 🔸 수동 테스트의 정의
- 수동 테스트는 테스트 엔지니어가 수동으로 테스트를 수행하는 방법.
- 소프트웨어의 기능, 성능, 보안 등을 검증하여 품질을 보장.
### 🔸 수동 테스트의 중요성
- 빠른 피드백: 개발자에게 즉각적인 피드백을 제공.
- 복잡한 상황 테스트: 자동화 도구로는 확인하기 어려운 복잡한 사용 시나리오를 검증.
### 🔸 수동 테스트의 기본 원칙
- 테스트 계획 수립: 테스트의 목표와 범위를 명확히 설정.
- 명확한 기준: 테스트 성공 기준을 정의하여 결과를 평가.
- 테스트 환경 설정: 테스트를 위한 환경과 조건을 사전에 준비.
- 문서화: 테스트 수행 과정과 결과를 문서화하여 공유.
--
<!-- .slide: data-background="linear-gradient(to bottom right, #e6ffee, white)" -->

## 🔘 수동 테스트

### 🔸 테스트 케이스 작성의 중요성
- 테스트 케이스는 특정 기능을 검증하기 위해 필요한 조건, 입력, 결과를 정리한 문서.
- 일관된 방식으로 테스트를 수행하고, 재사용성을 높임.
### 🔸 테스트 케이스 작성 방법
- 테스트 목적 정의: 무엇을 검증할 것인지 명확히 함.
- 사전 조건 설정: 테스트를 수행하기 전에 충족해야 할 조건을 정의.
- 테스트 단계 명시: 테스트 수행의 각 단계를 구체적으로 기술.
- 예상 결과 설정: 각 단계에서 기대되는 결과를 명시.
--
<!-- .slide: data-background="linear-gradient(to bottom right, #e6ffee, white)" -->

## 🔘 수동 테스트

### 🔸 테스트 케이스 예시

| 테스트 케이스 ID | 테스트 목적         | 사전 조건          | 테스트 단계       | 예상 결과    |
|:---------------------|:------------------------|:------------------|:-------------------|:-------------------|
| TC-001           | 로그인 기능 검증      | 로그인 페이지 접근   | 1. URL 입력 <br> 2. 아이디/비밀번호 입력 <br> 3. 로그인 클릭   | 대시보드 페이지로 이동  |

### 🔸 버그 리포트 작성의 중요성
- 버그 리포트는 발견된 결함에 대한 정보를 기록한 문서.
- 개발팀이 결함을 이해하고 수정할 수 있도록 해줌.
--
<!-- .slide: data-background="linear-gradient(to bottom right, #e6ffee, white)" -->

## 🔘 수동 테스트

### 🔸 버그 리포트의 주요 요소
- 버그 ID: 각 결함에 대한 고유 식별 번호
- 제목: 결함의 간단한 설명
- 환경: 결함 발생 환경 (예: 운영 체제, 브라우저 버전)
- 재현 단계: 결함을 재현하기 위한 단계별 설명
- 예상 결과: 올바른 동작에 대한 기대 결과
- 실제 결과: 발생한 실제 결과
- 스크린샷/영상: 시각적 증거 제공
--
<!-- .slide: data-background="linear-gradient(to bottom right, #e6ffee, white)" -->

## 🔘 수동 테스트

### 🔸 버그 리포트 예시

|   항목   |    내용   |
|:-------------|:------------------|
|버그 ID | BUG-001 |
|제목|로그인 후 대시보드 페이지 미표시|
|환경|Chrome 92, Windows 10|
|재현 단계|1. 로그인 페이지 접근, <br> 2. 로그인 후 대시보드 클릭|
|예상 결과|대시보드 페이지가 정상적으로 표시됨|
|실제 결과|대시보드 페이지가 표시되지 않음|
|스크린샷|(첨부된 스크린샷)|


--
<!-- .slide: data-background="linear-gradient(to bottom right, #e6ffee, white)" -->

## 🔘 수동 테스트

### 🔸 수동 테스트 절차
- 테스트 계획 수립: 테스트 목표와 범위 설정
- 테스트 케이스 작성: 구체적인 테스트 케이스 개발
- 테스트 실행: 수동으로 테스트를 수행
- 버그 리포트 작성: 발견된 결함 기록 및 보고
--
<!-- .slide: data-background="linear-gradient(to bottom right, #e6ffee, white)" -->

## 🔘 수동 테스트

### 🔸 수동 테스트 도구
- JIRA: 결함 추적 및 관리 도구
- Trello: 테스트 케이스 및 버그 관리용 보드 도구
- Excel: 간단한 테스트 케이스 및 버그 관리 도구
### 🔸 수동 테스트의 장점
- 유연성: 테스트 환경이나 조건에 따라 즉각적인 변경이 가능.
- 직관성: 사용자의 관점에서 테스트를 수행하여 실제 사용 환경을 고려.
### 🔸 수동 테스트의 단점
- 시간 소요: 자동화 테스트에 비해 테스트 진행 시간이 길어짐.
- 인적 오류: 수동 테스트 과정에서 실수가 발생.
--
<!-- .slide: data-background="linear-gradient(to bottom right, #e6ffee, white)" -->

## 🔘 수동 테스트

### 🔸 수동 테스트와 자동화 테스트의 차이
- 수동 테스트: 사람이 직접 테스트 수행
- 자동화 테스트: 도구를 이용해 자동으로 테스트 진행
### 🔸 수동 테스트의 활용
- 프로토타입 검증: 초기 버전의 기능 검증에 효과적
- UI/UX 테스트: 사용자 경험과 인터페이스 검증에 적합
### 🔸 요약
- 수동 테스트는 소프트웨어 품질 보증의 중요한 부분
- 효과적인 테스트 계획, 케이스 작성, 버그 리포트 작성을 통해 품질 향상



---
<!-- .slide: data-background="linear-gradient(to bottom right, white, #ffffcc)" -->

# 🔷 자동화 테스트
--
<!-- .slide: data-background="linear-gradient(to bottom right, white, #ffffcc)" -->

## 🔘 자동화 테스트

### 🔸 자동화 테스트
- 자동화 테스트는 소프트웨어의 기능을 자동으로 검증하는 방법으로, 테스트 스크립트를 통해 수행.
- 반복적이고 시간 소모적인 테스트 작업을 효율적으로 처리하기 위함.
### 🔸 자동화 테스트의 필요성
- 테스트 효율성 향상: 수동 테스트에 비해 더 빠르고 일관되게 테스트를 수행.
- 신뢰성 향상: 자동화 테스트는 동일한 테스트를 반복 실행하여 신뢰성을 높임.
### 🔸 자동화 테스트의 장점
- 시간 절약: 반복적인 테스트 작업을 자동으로 수행하여 시간을 단축.
- 정확성: 인간의 실수로 인한 오류를 줄임.
- 테스트 범위 확장: 더 많은 테스트 케이스를 실행할 수 있어 전반적인 테스트 범위를 넓힘.
- 비용 절감: 장기적으로 테스트 비용을 줄임.
--
<!-- .slide: data-background="linear-gradient(to bottom right, white, #ffffcc)" -->

## 🔘 자동화 테스트

### 🔸 자동화 테스트의 단점
- 초기 투자 비용: 도구 구매 및 설정, 스크립트 작성에 초기 비용이 발생.
- 유지 보수: 테스트 스크립트의 유지 보수가 필요하며, 애플리케이션 변경 시 업데이트가 필요.
- 제한된 테스트 범위: 모든 테스트를 자동화할 수는 없으며, 복잡한 UI/UX 테스트에는 한계.
- 기술적 전문성 필요: 테스트 자동화를 위해 프로그래밍 기술이 필요.
### 🔸 Selenium을 활용한 웹 자동화 테스트
- Selenium은 웹 애플리케이션의 테스트를 자동화하기 위한 오픈 소스 도구.
- 지원하는 언어: Java, Python, C#, Ruby 등 다양한 프로그래밍 언어 지원
### 🔸 Selenium의 주요 기능
- 브라우저 제어: 다양한 브라우저에서 사용자 동작을 시뮬레이션.
- 스크립트 작성: 테스트 케이스를 위한 스크립트를 작성.
- API 지원: 테스트를 위한 다양한 API를 제공.
--
<!-- .slide: data-background="linear-gradient(to bottom right, white, #ffffcc)" -->

## 🔘 자동화 테스트

### 🔸 Selenium 설치 및 설정
- JDK 설치: Java Development Kit를 설치.
- IDE 설치: IntelliJ, Eclipse 등의 IDE를 설치.
### 🔸 Selenium WebDriver 다운로드
- WebDriver 다운로드: 테스트에 사용할 브라우저에 맞는 WebDriver를 다운로드.
- 예: ChromeDriver, GeckoDriver
### 🔸 Selenium으로 간단한 테스트 케이스 작성
- 예제 코드:
```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class SimpleTest {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver");
        WebDriver driver = new ChromeDriver();
        driver.get("http://example.com");
        System.out.println(driver.getTitle());
        driver.quit();
    }
}
```
--
<!-- .slide: data-background="linear-gradient(to bottom right, white, #ffffcc)" -->

## 🔘 자동화 테스트

### 🔸 Selenium의 스크립트 구조
- WebDriver 객체 생성: WebDriver driver = new ChromeDriver();
- 페이지 열기: driver.get("URL");
- 페이지 제목 출력: System.out.println(driver.getTitle());
- 드라이버 종료: driver.quit();
### 🔸 CI/CD와 자동화 테스트
- CI/CD: Continuous Integration/Continuous Deployment의 약자로, 소프트웨어 개발 및 배포 과정의 자동화.
- 자동화 테스트 통합: CI/CD 과정에 자동화 테스트를 포함하여 코드 변경 시 자동으로 테스트를 수행.
--
<!-- .slide: data-background="linear-gradient(to bottom right, white, #ffffcc)" -->

## 🔘 자동화 테스트

### 🔸 CI/CD의 중요성
- 신속한 피드백: 코드 변경 후 즉각적으로 피드백을 받음.
- 배포 안정성: 자동화된 테스트로 배포 전 소프트웨어의 품질을 보장.
### 🔸 CI/CD 도구 예시
- Jenkins: 오픈 소스 CI/CD 도구로, 자동화된 빌드 및 테스트 파이프라인 구축에 유용.
- GitLab CI: GitLab의 통합 CI/CD 도구로, GitLab 저장소와 연동하여 테스트를 자동화.
### 🔸 CI/CD에 Selenium 통합하기
- 테스트 스크립트 준비: Selenium으로 테스트 스크립트를 작성.
- CI/CD 도구 설정: Jenkins나 GitLab CI에 테스트 스크립트를 연동.
- 빌드 후 테스트 실행: 코드 변경 시 자동으로 테스트가 실행되도록 설정.
--
<!-- .slide: data-background="linear-gradient(to bottom right, white, #ffffcc)" -->

## 🔘 자동화 테스트

### 🔸 CI/CD 파이프라인 흐름
- 코드 커밋: 개발자가 코드 변경을 커밋.
- 자동 빌드: CI/CD 도구가 코드를 빌드.
- 자동 테스트 실행: 빌드 후 자동으로 Selenium 테스트가 실행.
- 결과 보고: 테스트 결과를 개발자에게 보고.
### 🔸 자동화 테스트 도구 선택 기준
- 프로젝트 요구 사항: 프로젝트에 적합한 도구 선택
- 언어 지원: 팀에서 사용하는 언어와의 호환성 고려
- 커뮤니티 및 지원: 사용자 커뮤니티와 문서화된 지원 확인
--
<!-- .slide: data-background="linear-gradient(to bottom right, white, #ffffcc)" -->

## 🔘 자동화 테스트

### 🔸 테스트 유지 관리
- 정기적인 검토: 테스트 스크립트를 주기적으로 검토하고 업데이트.
- 변경 사항 반영: 애플리케이션의 기능 변경에 맞추어 테스트 스크립트를 수정.
### 🔸 요약
- 자동화 테스트는 소프트웨어 품질 보증에 필수적인 도구
- Selenium과 CI/CD 통합으로 효율성을 높이고, 신뢰성을 강화.

---
<!-- .slide: data-background="linear-gradient(to bottom right, #ffffcc, white)" -->

# 🔷 성능 테스트

--
<!-- .slide: data-background="linear-gradient(to bottom right, #ffffcc, white)" -->

## 🔘 성능 테스트

### 🔸 성능 테스트란 무엇인가?
- 성능 테스트는 소프트웨어 애플리케이션의 성능을 평가하고, 최대한의 부하를 견딜 수 있는지 확인하는 테스트.
- 응답 시간, 처리량, 자원 사용률 등의 성능 특성을 측정.
### 🔸 성능 테스트의 중요성
- 사용자 경험 향상: 성능이 좋지 않으면 사용자 이탈이 증가.
- 비즈니스 연속성 보장: 서비스의 가용성과 안정성을 확보하여 비즈니스의 연속성을 보장.
### 🔸 성능 테스트의 종류
- 부하 테스트: 특정 수의 사용자가 동시에 시스템을 사용하는 경우를 시뮬레이션.
- 스트레스 테스트: 시스템의 한계를 초과하는 부하를 가하여 시스템의 안정성을 평가.
- 스파이크 테스트: 짧은 시간 동안 급격한 트래픽 증가를 시뮬레이션.
- 지속 테스트: 장시간 동안 시스템의 성능을 지속적으로 테스트.
--
<!-- .slide: data-background="linear-gradient(to bottom right, #ffffcc, white)" -->

## 🔘 성능 테스트

### 🔸 JMeter 소개
- Apache JMeter는 성능 테스트를 수행하기 위한 오픈 소스 도구.
- 웹 애플리케이션과 API 테스트 지원
- 다양한 프로토콜 지원 (HTTP, FTP, JDBC 등)
- GUI 기반의 사용 편의성
### 🔸 JMeter의 설치 및 설정
- Java 설치: JMeter는 Java로 작성되므로 Java가 설치되어 있어야 함.
- JMeter 다운로드: Apache JMeter 공식 웹사이트에서 다운로드.
- 압축 해제: 다운로드한 파일의 압축을 해제하고 bin 폴더로 이동.
--
<!-- .slide: data-background="linear-gradient(to bottom right, #ffffcc, white)" -->

## 🔘 성능 테스트

### 🔸 JMeter의 기본 구성 요소
- 테스트 플랜: 테스트 계획을 설정하는 기본 구조.
- 스레드 그룹: 동시 사용자 수를 설정하는 구성 요소.
- 샘플러: 요청할 HTTP 요청이나 다른 프로토콜을 정의.
- 리스너: 테스트 결과를 시각화하여 보여주는 도구.
### 🔸 성능 테스트 시나리오 작성
- 테스트 목표 설정: 성능 테스트의 목표를 명확히 정의합니다 (예: 최대 동시 사용자 수).
- 사용자 시나리오 정의: 실제 사용자의 행동을 기반으로 시나리오를 작성.
--
<!-- .slide: data-background="linear-gradient(to bottom right, #ffffcc, white)" -->

## 🔘 성능 테스트

### 🔸 성능 테스트 시나리오 예시
- 테스트 목표: 100명의 사용자가 동시에 로그인
- 테스트 시나리오:
  - 사용자가 로그인 페이지에 접근
  - 아이디와 비밀번호 입력
  - 로그인 버튼 클릭
  - 대시보드 페이지 확인
### 🔸 성능 테스트 실행 및 결과 분석
- 테스트 실행: JMeter에서 테스트 플랜을 실행하여 성능 테스트를 수행.
- 결과 분석: 리스너를 통해 응답 시간, 처리량 등을 분석.
--
<!-- .slide: data-background="linear-gradient(to bottom right, #ffffcc, white)" -->

## 🔘 성능 테스트

### 🔸 성능 테스트의 모범 사례
- 테스트 환경 준비: 실제 운영 환경과 유사한 테스트 환경을 설정.
- 정기적인 테스트 수행: 정기적으로 성능 테스트를 수행하여 문제를 조기에 발견.


---
<!-- .slide: data-background="linear-gradient(to right, white, gray)" -->

# 🔷 보안 테스트
--
<!-- .slide: data-background="linear-gradient(to right, white, gray)" -->

## 🔘 보안 테스트

### 🔸 보안 테스트란 무엇인가?
- 보안 테스트는 애플리케이션의 보안 취약점을 평가하고 확인하는 프로세스.
- 데이터 유출, 악성 공격 등으로부터 시스템을 보호하기 위한 방어 수단을 마련.
### 🔸 웹 보안의 기본 개념
- 인증: 사용자가 주장하는 신원을 확인하는 과정.
- 인가: 인증된 사용자가 어떤 리소스에 접근할 수 있는지를 결정하는 과정.
- 암호화: 데이터를 안전하게 보호하기 위해 정보를 변환하는 과정.
--
<!-- .slide: data-background="linear-gradient(to right, white, gray)" -->

## 🔘 보안 테스트

### 🔸 OWASP Top Ten 개요
- OWASP(Open Web Application Security Project)에서 발행한 웹 애플리케이션의 대표적인 보안 취약점 목록.
- 개발자와 보안 전문가가 가장 흔한 보안 위험을 인식하고 대응할 수 있도록 지원.
### 🔸 OWASP Top Ten (2021)
- A01:2021 - Broken Access Control
- A02:2021 - Cryptographic Failures
- A03:2021 - Injection
- A04:2021 - Insecure Design
- A05:2021 - Security Misconfiguration
- A06:2021 - Vulnerable and Outdated Components
- A07:2021 - Identification and Authentication Failures
- A08:2021 - Software and Data Integrity Failures
- A09:2021 - Security Logging and Monitoring Failures
- A10:2021 - Server-Side Request Forgery (SSRF)
--
<!-- .slide: data-background="linear-gradient(to right, white, gray)" -->

## 🔘 보안 테스트

### 🔸 보안 테스트 도구 소개
- OWASP ZAP: 오픈 소스 웹 애플리케이션 보안 스캐너
- Burp Suite: 웹 애플리케이션 테스트를 위한 통합 플랫폼
- Nikto: 웹 서버를 스캔하여 보안 취약점을 확인하는 도구
### 🔸 OWASP ZAP 설치 및 설정
- Java 설치: ZAP은 Java로 작성되므로 Java가 설치되어 있어야 함.
- ZAP 다운로드: OWASP ZAP 공식 웹사이트에서 다운로드.
- 실행: 다운로드한 파일을 실행하여 ZAP을 시작.
--
<!-- .slide: data-background="linear-gradient(to right, white, gray)" -->

## 🔘 보안 테스트

### 🔸 Burp Suite의 기본 구성 요소
- Proxy: 브라우저와 서버 간의 트래픽을 가로채어 분석.
- Scanner: 애플리케이션의 취약점을 자동으로 스캔.
- Intruder: 패턴을 수정하여 다양한 공격을 시뮬레이션.
### 🔸 보안 테스트 절차
- 정보 수집: 애플리케이션에 대한 정보를 수집.
- 취약점 분석: OWASP Top Ten과 같은 리스트를 기반으로 취약점을 평가.
- 테스트 수행: 다양한 도구를 사용하여 보안 테스트를 진행.
- 결과 보고: 발견된 취약점과 권장 사항을 문서화하여 보고.
### 🔸 보안 테스트의 중요성
- 데이터 보호: 사용자 데이터와 비즈니스 정보를 보호하는 데 필수적.
- 법적 준수: GDPR 등과 같은 법적 요건을 충족하기 위해 필요.

---
<!-- .slide: data-background="linear-gradient(to right, white, gray)" -->

# 🔷 웹 테스트 분야의 최신 동향
--
<!-- .slide: data-background="linear-gradient(to right, white, gray)" -->

## 🔘 웹 테스트 분야의 최신 동향
### 🔸 웹 테스트 분야의 최신 동향
- 디지털 트랜스포메이션: 비즈니스와 기술의 변화에 따라 웹 테스트의 중요성이 증가.
- 테스트 자동화의 확산: 기업들은 테스트 자동화를 통해 신속한 배포와 높은 품질을 유지.
### 🔸 AI 및 머신러닝의 활용
- AI 기반 테스트 도구: AI를 활용한 테스트 도구가 등장하여 테스트 케이스 생성, 결함 예측 및 자동화된 분석이 가능.
- 자연어 처리(NLP): 테스트 스크립트의 작성 및 이해를 돕기 위해 자연어 처리 기술이 사용.
### 🔸 클라우드 기반 테스트
- 클라우드 테스트 플랫폼: 다양한 환경에서의 테스트를 지원하는 클라우드 기반 플랫폼의 사용이 증가.
- 스케일링의 용이성: 클라우드 환경에서의 테스트는 손쉽게 리소스를 조정할 수 있어 성능 테스트에 적합.
--
<!-- .slide: data-background="linear-gradient(to right, white, gray)" -->

## 🔘 웹 테스트 분야의 최신 동향

### 🔸 DevOps 및 CI/CD의 통합
- DevOps 문화 확산: 개발과 운영의 통합으로 CI/CD 파이프라인에 테스트가 필수적으로 포함.
- 자동화 테스트: 코드 변경 시 자동으로 테스트가 수행되며, 배포 품질을 높임.
### 🔸 API 테스트의 중요성
- API 중심 개발: 마이크로서비스 아키텍처로 인해 API 테스트의 중요성 증가.
- 도구 사용 증가: Postman, SoapUI 등 API 테스트 도구의 사용이 증가.
### 🔸 보안 테스트의 필요성 증가
- 사이버 공격 증가: 웹 애플리케이션에 대한 사이버 공격이 증가하면서 보안 테스트의 필요성 증대.
- OWASP Top Ten 업데이트: OWASP는 보안 취약점을 정기적으로 업데이트하여 개발자와 보안 전문가에게 최신 정보를 제공.
--
<!-- .slide: data-background="linear-gradient(to right, white, gray)" -->

## 🔘 웹 테스트 분야의 최신 동향

### 🔸 성능 테스트의 진화
- 지속적 성능 테스트: 성능 테스트가 배포 주기와 함께 진행되어 성능 문제를 조기에 발견하는 문화 확산.
- 실시간 모니터링: 성능 모니터링 도구를 사용하여 운영 중인 애플리케이션의 성능을 실시간으로 감시.
### 🔸 최신 테스트 도구 및 프레임워크
- Cypress: 최신 프론트엔드 애플리케이션을 위한 자동화 테스트 도구로 주목
- Playwright: 다양한 브라우저에서 크로스 브라우저 테스트를 지원하는 도구로 인기
