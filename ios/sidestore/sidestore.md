https://techtree.tistory.com/156#google_vignette
SideStore로 아이폰에 앱 설치하는 방법 (자세한 설명, 오류 해결방법, 후기)

SideStore로 아이폰에 앱 설치하는 방법 (자세한 설명, 오류 해결방법, 후기)
Alternative_TechTree 2024. 9. 22. 21:02

이번 글에서는 SideStore 사이드스토어 를 사용해 아이폰, 아이패드에 앱을 설치하는 방법에 대해 알아보겠습니다.


• SideStore란?
• SideStore 설치 방법
• 1. 다운로드
• 2. 설치
• 3. AltServer 실행
• 4. AltServer로 SideStore 설치
• 5. SideStore 허용
• 6. Jitterbug로 페어링 파일 만들기
• A. 윈도우
• B. 맥OS
• 7. 페어링 파일을 SideStore에 연결
• 8. Wireguard VPN 설정
• 9. 최종 설정
• SideStore로 앱 설치하는 방법
• SideStore 앱 리프레시 방법


SideStore란?
사이드스토어는 아이폰, 아이패드에 .ipa 파일로 된 앱을 설치할 수 있는 스토어입니다.

여러분의 애플 계정에 있는 무료 개발자 권한을 사용해서 사이드로딩 이라는 방식으로 앱을 설치합니다.

유명한 서드 파티 스토어인 Altstore를 기반으로 만들어졌습니다. Altstore와 다른 점은 세팅이 다 끝나고 나면 컴퓨터 없이도 '리프레시'를 할 수 있다는 것입니다. 리프레시는 일주일마다 한 번씩 애플의 인증을 받는 작업으로, 무료 개발자 계정의 경우 7일에 한 번씩은 설치한 앱을 리프레시 해주어야 앱을 계속 사용할 수 있습니다. Altstore는 이런 인증 과정을 위해 컴퓨터가 필요하지만, 사이드스토어는 컴퓨터 없이도 할 수 있습니다.


사이드스토어는 오픈 소스 프로그램으로, 정보가 투명하게 공개되어 있어 악성 코드나 바이러스가 있을 확률이 적습니다. 안심하고 사용해도 되는 프로그램입니다.

 

SideStore 설치 방법
1. 다운로드
컴퓨터(맥, 윈도우 둘 다 지원합니다)에서 아래 페이지로 들어갑니다.

https://sidestore.io/#get-started

 
SideStore

An alternative app store that aims to make sideloading apps as seamless as possible.

sidestore.io
아래와 같은 화면이 보이는데요. 우선 맥이라면 아래 버튼에서 Mac을, 윈도우 컴퓨터라면 Windows를 골라 주세요. 그 다음, 위에 뜨는 버튼을 모두 눌러 전부 다운받아주세요. 맥에서는 3개, 윈도우의 경우 아래에 iTunes, iCloud 다운로드 버튼까지 총 5개를 다운받으시면 됩니다.

![alt text](image.png)

2. 설치
윈도우의 경우에는 기존에 설치되어 있는 아이튠즈, 아이클라우드가 있다면 삭제하고 다운받은 파일로 아이튠즈, 아이클라우드를 둘 다 설치해 주세요. (아이튠즈 삭제 전 백업을 해 두세요)

그 다음 AltServer를 설치하세요. 윈도우는 압축파일을 풀고 Setup.exe를 실행해 설치하면 되고, 맥은 다운받은 AltServer.app을 '애플리케이션' 폴더로 옮기면 됩니다.



왼쪽: 윈도우 실행파일 / 오른쪽: 맥OS에서 앱 파일을 '애플리케이션' 폴더로 옮기기
3. AltServer 실행
설치된 AltServer를 실행해 주세요. 윈도우의 경우 시작 메뉴에서 AltServer를 찾고 우클릭을 눌러 '관리자 권한으로 실행'하면 되고, 맥은 애플리케이션 폴더에서 더블클릭해서 실행하면 됩니다.

4. AltServer로 SideStore 설치
SideStore를 설치하려는 아이폰/아이패드를 컴퓨터와 케이블로 연결합니다.

연결하면 '이 컴퓨터를 신뢰하겠습니까?'라는 팝업이 뜰 텐데, 왼쪽의 '신뢰'를 눌러 암호를 입력하면 됩니다. 신뢰하는 컴퓨터로 지정해야 컴퓨터와 통신이 되어서 AltServer와 연결할 수 있습니다.


윈도우의 경우 컴퓨터에서 아이튠즈를 실행시키고 연결하셔야 합니다. 아이튠즈를 실행하고 해도 잘 안 된다면, 3uTools를 설치하고 실행시킨 뒤 연결하면 됩니다.

그 다음,

- 윈도우에서는 트레이(시계 옆에 작은 아이콘들이 모여 있는 곳)에서 마름모꼴의 AltServer 아이콘을 찾아 Shift를 누르고 클릭합니다. 'Sideload .ipa'에서 연결된 기기를 선택한 뒤, 나오는 창에서 아까 다운받은 SideStore.ipa를 선택합니다. 애플 아이디를 묻는 창에서 내 애플 아이디와 비밀번호로 로그인합니다.

- 맥OS에서는 메뉴 바(상단 바) 오른쪽에서 마름모꼴의 AltServer 아이콘을 찾아 Option 키를 누르고 클릭합니다. 'Sideload .ipa'에서 연결된 기기를 선택한 뒤, 나오는 창에서 아까 다운받은 SideStore.ipa를 선택합니다. 애플 아이디를 묻는 창에서 내 애플 아이디와 비밀번호로 로그인합니다.



왼쪽: 윈도우 / 오른쪽: 맥OS // Install AltStore가 아니라 Sideload .ipa 라는 메뉴로 들어가야 합니다!
(위 사진에는 Install AltStore라는 메뉴로 들어갔으나, Shift/Option 키를 누르고 클릭했다면 저 자리에 Sideload .ipa 메뉴가 있어야 합니다. 확인하시고 클릭하세요!)

잘 되었다면 1분 정도 뒤 아이폰에 아래와 같이 SideStore가 설치됩니다.


5. SideStore 허용
하지만 앱을 눌러도 '신뢰하지 않는 개발자'라는 문구가 나오면서 실행이 되지 않습니다. 우선 설정 앱을 켜고 일반 - VPN 및 기기 관리 에 들어가 개발자 앱 밑에 있는 내 애플 아이디를 눌러야 합니다. 




'[내 애플 아이디] 신뢰' 버튼을 누르고 허용을 눌러주세요.



그 다음 설정 앱에서 개인정보 보호 및 보안 - 개발자 모드 로 들어가 개발자 모드를 켭니다. 




재시동하라는 팝업창이 뜨는데 재시동을 눌러 아이폰을 재부팅시켜줍시다. 아이폰이 켜질 때 '개발자 모드 활성화 준비 완료'라는 화면이 뜨며 위로 스와이프하라고 합니다. 스와이프하고 '활성화'를 누른 뒤, 아이폰 암호를 입력하면 됩니다.

6. Jitterbug로 페어링 파일 만들기
사이드스토어가 컴퓨터 연결 없이도 제대로 작동하기 위해서는 페어링 파일이란 걸 만들어야 합니다.

윈도우라면 이 링크, 맥OS라면 이 링크에서 페어링 파일을 만드는 도구를 다운받습니다.

A. 윈도우
컴퓨터와 아이폰을 연결하고, 아이폰을 잠금해제해서 홈 화면을 열어놓습니다.

컴퓨터에 다운받은 파일의 압축을 풀고, Jitterbugpair.exe가 있는 폴더의 빈 공간에 대고 Shift를 누르고 우클릭을 해 나오는 메뉴에서 '여기서 Powershell 창 열기'를 클릭합니다.

열리는 Powershell 창에서 아래 코드를 입력합니다.

./jitterbugpair.exe
제대로 되었다면 아래처럼 SUCCESS라는 글자가 뜹니다. 처음에는 SUCCESS 글자가 뜨지 않고 error라고 뜰 수 있는데, 이때 아이폰을 보면 아래처럼 이 컴퓨터를 신뢰하겠냐는 메세지가 떠 있을 겁니다. 신뢰 를 누르고 비밀번호를 입력한 후 Powershell 창에 코드를 다시 입력해 실행하시면 됩니다.



SUCCESS가 떴다면 폴더에 [긴 숫자와 문자].mobiledevicepairing 이라는 파일이 생깁니다. 이게 페어링 파일입니다.

만들어진 페어링 파일을 카카오톡 등을 통해 아이폰으로 보내세요.

카카오톡으로 보낼 때는 나와의 채팅으로 보낸 후, 아이폰 카톡에서 파일을 받고 다시 파일을 누르면 공유 창이 뜹니다. 여기서 '파일에 저장'을 누르고 적당한 위치(다운로드 등)에 저장해 주시면 됩니다.


B. 맥OS
컴퓨터와 아이폰을 연결하고, 아이폰을 잠금해제해서 홈 화면을 열어놓습니다.

컴퓨터에 다운받은 Jitterbugpair를 더블클릭하면 아래처럼 경고창이 뜨면서 실행이 안됩니다. 일단 완료를 누르세요.


그 다음 설정을 켜고 개인정보 및 보안으로 가셔서 아래로 쭉 스크롤하시면 아래 사진처럼 'Mac을 보호하기 위해 'jiterbugpair'을(를) 차단했습니다.' 라는 메세지가 있습니다. 옆에 있는 '그래도 열기'를 누르시고 맥 비밀번호를 입력하시면 Jiterbugpair가 실행됩니다.


제대로 되었다면 아래처럼 SUCCESS라는 글자가 뜹니다. 처음에는 SUCCESS 글자가 뜨지 않고 error라고 뜰 수 있는데, 이때 아이폰을 보면 아래처럼 이 컴퓨터를 신뢰하겠냐는 메세지가 떠 있을 겁니다. 신뢰 를 누르고 비밀번호를 입력한 후 Jitterbugpair를 다시 실행하시면 됩니다.



SUCCESS가 떴다면 Finder를 켜고 메뉴바에서 이동 - 홈을 누르시면 폴더에 [긴 숫자와 문자].mobiledevicepairing 이라는 파일이 생깁니다. 이게 페어링 파일입니다.


만들어진 페어링 파일을 에어드랍, 카카오톡 등을 통해 아이폰으로 보내세요.

카카오톡으로 보낼 때는 나와의 채팅으로 보낸 후, 아이폰 카톡에서 파일을 받고 다시 파일을 누르면 공유 창이 뜹니다. 여기서 '파일에 저장'을 누르고 적당한 위치(다운로드 등)에 저장해 주시면 됩니다.


 

7. 페어링 파일을 SideStore에 연결
이제 SideStore를 엽니다. 처음에 'Pairing File'이라는 팝업창이 뜨는데, 여기서 OK를 선택하고 뜨는 파일 앱에서 방금 아이폰으로 옮긴 페어링 파일을 선택해주면 됩니다.

파일 앱에서 페어링 파일이 보이지 않을 때는 아래 탭에서 '둘러보기'를 누르고 'iCloud Drive'를 누르면 아까 파일을 저장한 위치를 찾을 수 있습니다.



(이 6-7번의 페어링 파일 만들고 적용시키기가 컴퓨터가 필요하고 상당히 귀찮은데, 아쉽게도 iOS 업데이트를 할 때마다 이 작업을 다시 해 주어야 한다고 합니다.)

8. Wireguard VPN 설정
우선 아이폰에서 아래 설정 파일을 다운받으세요. 컴퓨터로 받은 뒤 아이폰으로 옮겨도 됩니다.

SideStore.conf
0.00MB
아이폰 앱스토어에서 Wireguard VPN을 검색해서 설치합니다. 붉은색 용 모양의 아이콘입니다.


WireGuard를 열고, 오른쪽 위 + 아이콘을 누른 뒤 Create from file or archive를 선택합니다. 뜨는 파일 앱 창에서 방금 다운받은 SideStore.conf를 선택합니다. 그러면 VPN 구성 추가에 대한 팝업창이 뜨는데, 허용을 누르고 암호를 입력하면 됩니다.



그러면 WireGuard 앱에 SideStore라는 항목과 함꼐 옆에 스위치가 생깁니다. 앞으로 사이드스토어를 통해 앱을 설치하거나 리프레시를 할 때는 WireGuard 앱에 들어가 이 스위치를 켜고 해야 합니다! 지금도 켜 두세요.


9. 최종 설정
SideStore 앱을 켜고, Settings 탭으로 들어가 Sign in with Apple ID를 눌러 애플 아이디로 로그인해주세요.


이중 인증 관련 알림이 오면 허용을 누르고, 나오는 숫자 여섯 자리를 기억한 뒤 확인을 누르고 나오는 창에 여섯 자리 숫자를 입력하면 됩니다.

마지막으로, My Apps 탭으로 들어가 SideStore 오른쪽의 초록색을 터치하세요.


로딩이 되다가 홈 화면으로 나가지고, 아래처럼 알림이 오고 SideStore 앱 설치 로딩창이 잠시 뜨다가 설치가 완료되면 설정이 제대로 되었다는 뜻입니다!


축하합니다! SideStore 세팅을 전부 마쳤습니다🥳

 

SideStore로 앱 설치하는 방법
먼저 WireGuard 앱에서 SideStore 스위치를 켭니다.

사이드스토어 앱을 열고 My Apps 탭으로 들어가 왼쪽 위 + 버튼을 누릅니다. 나오는 파일 선택 창에서 설치할 .ipa 파일을 선택합니다.


로딩이 좀 오래 걸리는데, 약 5-10분 정도 기다리면 설치가 완료됩니다.

설치 중에 아래와 같은 팝업창이 뜬다면 맨 위의 Keep App Extensions 를 선택하면 됩니다.


 

SideStore 앱 리프레시 방법
사이드스토어 자체와 사이드스토어로 설치한 앱들은 일주일(7일)에 한 번씩 리프레시 라는 작업을 해 주어야 합니다.

사이드스토어의 원리상 여러분의 애플 아이디로 만든 무료 개발자 계정으로 개발자 권한을 획득하고, 그 권한으로 다운받은 앱을 마치 내가 만들고 테스트하고 있는 앱처럼 설치하고 실행시키고 있는 것이기 때문입니다. 무료 계정은 애플의 정책상 설치된 앱을 7일 이상 실행시킬 수 없으며, 7일이 되기 전 다시 애플에 인증을 받아야 7일 더 사용할 수 있습니다.


리프레시를 하려면 먼저 WireGuard 앱에서 SideStore 스위치를 켠 후, 사이드스토어 앱을 열어 My Apps 탭에 들어가 Refresh All을 누르면 됩니다. 그러면 사이드스토어와 사이드스토어로 설치된 앱이 애플의 인증을 받아 모두 리프레시가 되며 7일 동안 사용할 수 있게 됩니다.


리프레시가 되고 나서는 WireGuard에서 SideStore 스위치를 다시 끄시면 됩니다. (켜 놓아도 무방하나 배터리 소모가 늘어날 수 있습니다)

아래 방법을 참고하면 이 리프레시 과정도 자동적으로 실행되게 할 수 있습니다.

https://techtree.tistory.com/155

 
SideStore 리프레시 자동으로 되게 하기 [단축어, 상세설명]

안녕하세요, Alternative입니다!SideStore는 아이폰에서 앱을 설치하고 관리할 수 있는 스토어입니다.사이드스토어는 Altstore의 단점을 해결해 컴퓨터 없이도 앱을 리프레시할 수 있다는 장점을 가졌

techtree.tistory.com
 

 

 

지금까지 SideStore를 설치하고, 이를 통해 아이폰에 앱을 설치하는 방법에 대해 알아보았습니다.

초기 설정이 좀 어렵긴 하지만, 한 번 설정하고 나면 컴퓨터 없이도 앱을 계속 사용할 수 있어 Altstore보다 편리합니다. 맨 마지막에 있는 자동화까지 세팅을 완료한다면 리프레시에 대한 귀찮음도 없이 편하게 사용할 수 있겠습니다!

궁금한 점이나 질문이 있다면 댓글로 달아주세요! 감사합니다.

 

