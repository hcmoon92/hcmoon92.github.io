```
flutter config --enable-web
flutter devices
flutter build web
```

```
cd build/web
python -m http.server

http://localhost:8000
```

```
git checkout -b gh-pages
git add -f build/web
git commit -m "Deploy Flutter web app to GitHub Pages"
git push -u origin gh-pages --force
```
