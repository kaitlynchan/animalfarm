 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC4sa5bUPRkMCdrEbZ5x8G_lg5uLuLwroQ",
    authDomain: "chat-app-4d538.firebaseapp.com",
    databaseURL: "https://chat-app-4d538.firebaseio.com",
    storageBucket: "chat-app-4d538.appspot.com",
    messagingSenderId: "895862420876"
  };
  firebase.initializeApp(config);

  var chatData = firebase.database().ref();
