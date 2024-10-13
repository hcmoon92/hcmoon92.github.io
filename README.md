# flutter web
 
```bash
flutter config --enable-web
flutter devices
flutter build web

flutter build web --base-href /your-repo/

```

```bash
cd build/web
python -m http.server
```

```
http://localhost:8000
```

# git
```bash
git checkout -b gh-pages
git add -f build/web
git commit -m "Deploy Flutter web app to GitHub Pages"
git push -u origin gh-pages --force
```

# GitHub Pages 활성화
- GitHub 저장소의 Settings 탭으로 이동합니다.
- 왼쪽 메뉴에서 Pages를 클릭합니다.
- Source에서 gh-pages 브랜치를 선택합니다.
- 저장소에서 배포되는 사이트 주소가 표시됩니다. (예: `https://username.github.io/`)
- 이제 GitHub Pages에서 Flutter 웹 애플리케이션을 확인할 수 있습니다!