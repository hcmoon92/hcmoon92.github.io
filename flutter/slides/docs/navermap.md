# Naver Map

## android\build.gradle
- android\build.gradle
- naver manven 추가

```yaml
allprojects {
    repositories {
        google()
        mavenCentral()
        maven {
            url 'https://repository.map.naver.com/archive/maven'
        } 
    }
}
```

## 