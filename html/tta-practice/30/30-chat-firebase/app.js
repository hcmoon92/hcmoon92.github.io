// app.js

// Firebase configuration (replace with your own config)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// DOM elements
const messagesDiv = document.getElementById('messages');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');

// Send message to Firestore
sendBtn.addEventListener('click', async () => {
    const message = messageInput.value.trim();
    if (message) {
        await db.collection('messages').add({
            text: message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        messageInput.value = '';
    }
});

// Fetch and display messages
db.collection('messages')
    .orderBy('timestamp', 'asc')
    .onSnapshot(snapshot => {
        messagesDiv.innerHTML = '';
        snapshot.forEach(doc => {
            const message = document.createElement('div');
            message.textContent = doc.data().text;
            messagesDiv.appendChild(message);
        });
    });
