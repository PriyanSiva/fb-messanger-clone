import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCPvlUerHcA8pUAH9sj1y-x62YeIufcNi4",
  authDomain: "fb-messanger-clone-b1ef4.firebaseapp.com",
  databaseURL: "https://fb-messanger-clone-b1ef4.firebaseio.com",
  projectId: "fb-messanger-clone-b1ef4",
  storageBucket: "fb-messanger-clone-b1ef4.appspot.com",
  messagingSenderId: "31790646365",
  appId: "1:31790646365:web:6a5abf31b006ee8e26b9b4",
  measurementId: "G-YVBC6RY452",
});

const db = firebaseApp.firestore();
export default db;
