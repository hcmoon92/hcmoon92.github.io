# Tutorial
- [VS Code 다운로드](https://code.visualstudio.com/download)
- [Flutter SDK 설치](https://docs.flutter.dev/get-started/install)
--

[개발환경 구성](https://codelabs.developers.google.com/static/codelabs/flutter-codelab-first/img/d105428cb3aae7d5_856.png?hl=ko)
- source : https://codelabs.developers.google.com/codelabs/flutter-codelab-first?hl=ko#1

--
# 프로젝트 생성
```bash
flutter create flutter_new
flutter create --org=com.example flutter_new
```

```
flutter_new/
    ├── pubspec.yaml
    └── lib/main.dart
```

--
[App Design1](https://codelabs.developers.google.com/static/codelabs/flutter-codelab-first/img/2bbee054d81a3127_856.png?hl=ko)
[App Design2](https://codelabs.developers.google.com/static/codelabs/flutter-codelab-first/img/e6b01a8c90df8ffa_856.png?hl=ko)
[](https://codelabs.developers.google.com/static/codelabs/flutter-codelab-first/img/11981147e3497c77.gif?hl=ko)
[](https://codelabs.developers.google.com/static/codelabs/flutter-codelab-first/img/9320e50cad339e7b_856.png?hl=ko)
[](https://codelabs.developers.google.com/static/codelabs/flutter-codelab-first/img/bef3378cb73f9a40_856.png?hl=ko)
--

```java
// ...

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Row(
        children: [
          SafeArea(
            child: NavigationRail(
              extended: false,
              destinations: [
                NavigationRailDestination(
                  icon: Icon(Icons.home),
                  label: Text('Home'),
                ),
                NavigationRailDestination(
                  icon: Icon(Icons.favorite),
                  label: Text('Favorites'),
                ),
              ],
              selectedIndex: 0,
              onDestinationSelected: (value) {
                print('selected: $value');
              },
            ),
          ),
          Expanded(
            child: Container(
              color: Theme.of(context).colorScheme.primaryContainer,
              child: GeneratorPage(),
            ),
          ),
        ],
      ),
    );
  }
}

class GeneratorPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    var appState = context.watch<MyAppState>();
    var pair = appState.current;

    IconData icon;
    if (appState.favorites.contains(pair)) {
      icon = Icons.favorite;
    } else {
      icon = Icons.favorite_border;
    }

    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          BigCard(pair: pair),
          SizedBox(height: 10),
          Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              ElevatedButton.icon(
                onPressed: () {
                  appState.toggleFavorite();
                },
                icon: Icon(icon),
                label: Text('Like'),
              ),
              SizedBox(width: 10),
              ElevatedButton(
                onPressed: () {
                  appState.getNext();
                },
                child: Text('Next'),
              ),
            ],
          ),
        ],
      ),
    );
  }
}

// ...
```

--
LayoutBuilder

```java
// ...

class _MyHomePageState extends State<MyHomePage> {
  var selectedIndex = 0;

  @override
  Widget build(BuildContext context) {
    Widget page;
    switch (selectedIndex) {
      case 0:
        page = GeneratorPage();
        break;
      case 1:
        page = Placeholder();
        break;
      default:
        throw UnimplementedError('no widget for $selectedIndex');
    }

    return LayoutBuilder(builder: (context, constraints) {
      return Scaffold(
        body: Row(
          children: [
            SafeArea(
              child: NavigationRail(
                extended: constraints.maxWidth >= 600,  // ← Here.
                destinations: [
                  NavigationRailDestination(
                    icon: Icon(Icons.home),
                    label: Text('Home'),
                  ),
                  NavigationRailDestination(
                    icon: Icon(Icons.favorite),
                    label: Text('Favorites'),
                  ),
                ],
                selectedIndex: selectedIndex,
                onDestinationSelected: (value) {
                  setState(() {
                    selectedIndex = value;
                  });
                },
              ),
            ),
            Expanded(
              child: Container(
                color: Theme.of(context).colorScheme.primaryContainer,
                child: page,
              ),
            ),
          ],
        ),
      );
    });
  }
}
// ...
```

- source : https://codelabs.developers.google.com/codelabs/flutter-codelab-first?hl=ko#6

--

[Final](https://codelabs.developers.google.com/static/codelabs/flutter-codelab-first/img/d6e3d5f736411f13_856.png?hl=ko)

---

[고급](https://codelabs.developers.google.com/static/codelabs/flutter-codelab-first/img/d4afd1f43ab976f7.gif?hl=ko)

--

# ref
[Codelab Flutter](https://codelabs.developers.google.com/codelabs/flutter-codelab-first?hl=ko#0)
[Flutter Admob](https://codelabs.developers.google.com/codelabs/admob-ads-in-flutter?hl=ko)

---
# Links
- [Dart Pad](https://dartpad.dev/)
- [IDX Google](https://idx.google.com/)
- [AI Studio Google](https://aistudio.google.com/)  Gemini API
- [Console Google Developer](https://console.cloud.google.com/)