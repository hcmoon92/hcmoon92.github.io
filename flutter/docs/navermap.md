# Naver Map Flutter build

## android\build.gradle
- android\build.gradle
- naver maven 추가

```yaml
allprojects {
    repositories {
        google()
        mavenCentral()

        ...
        maven {
            url 'https://repository.map.naver.com/archive/maven'
        } 
        ...
    }
}
```

## pubspec.yaml

```bash
flutter pub add flutter_naver_map:^1.2.2
```
