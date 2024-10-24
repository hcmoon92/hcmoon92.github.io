# Firebase Firestore Rules
-  In your Firebase Firestore settings, go to Rules and set it to allow read and write access for testing purposes:

```
service cloud.firestore {
  match /databases/{database}/documents {
    match /messages/{message} {
      allow read, write: if true;
    }
  }
}
```

