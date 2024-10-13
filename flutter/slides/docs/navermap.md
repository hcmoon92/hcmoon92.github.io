# Naver Map Flutter build

- flutter 3.22.3 추천
- android\settings.gradle

```
id "org.jetbrains.kotlin.android" version "1.8.0"

plugins {
    id "dev.flutter.flutter-plugin-loader" version "1.0.0"
    id "com.android.application" version "7.3.0" apply false
    id "org.jetbrains.kotlin.android" version "1.8.0" apply false
}

```

--
- flutter 3.16.0 이하에서 사용
  
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
- pubspec.yaml
  
```bash
flutter pub add flutter_naver_map:^1.2.2
```
