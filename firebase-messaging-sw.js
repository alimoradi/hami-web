// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyCsPCmdxIh8mtrrrzKAUyym_mY4Y-fcGBk",
    authDomain: "hami-a7e39.firebaseapp.com",
    databaseURL: "https://hami-a7e39.firebaseio.com",
    projectId: "hami-a7e39",
    storageBucket: "hami-a7e39.appspot.com",
    messagingSenderId: "92310210926",
    appId: "1:92310210926:web:4bf75a8482aa17db7d197f",
  });

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(event => {
    var payload = JSON.parse(event.data.payload);
    return self.registration.showNotification('Incoming call', {
        body: 'You have a call',
        requireInteraction: true,
        data: payload
    });
});
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    console.log("Notification clicked", event);
    if (clients.openWindow) {
        return clients.openWindow(`${baseSampleURL}#/call/${event.notification.data.callId}/${event.notification.data.accessToken}`);
    }
});