importScripts("https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCqr8cCSO_RZRxNWdz75DAJJsHxNLXS9Jc",
  authDomain: "mallouk-bike.firebaseapp.com",
  projectId: "mallouk-bike",
  messagingSenderId: "847523992830",
  appId: "1:847523992830:web:210166ba53b3220bc281af"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  self.registration.showNotification(
    payload.notification.title,
    {
      body: payload.notification.body,
      icon: "https://i.postimg.cc/kgrvnzGZ/image-2-Photoroom.png"
    }
  );
});
