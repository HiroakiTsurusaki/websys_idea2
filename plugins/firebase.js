import firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCbBdCyt0YjQgv02o0YtjBsA8VvzZktEb4",
    authDomain: "websysex4.firebaseapp.com",
    databaseURL: "https://websysex4-default-rtdb.firebaseio.com",
    projectId: "websysex4",
    storageBucket: "websysex4.appspot.com",
    messagingSenderId: "13258159395",
    appId: "1:13258159395:web:1835527a3e76746e528896",
    measurementId: "G-RYRL5F1CFB"
  });
}

export default firebase;
