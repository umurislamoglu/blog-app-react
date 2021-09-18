import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAx18cQ11oDjHlrBJiaHos68BU7sJQYtZs",
  authDomain: "react-blog-app-be10e.firebaseapp.com",
  databaseURL: "https://react-blog-app-be10e-default-rtdb.firebaseio.com",
  projectId: "react-blog-app-be10e",
  storageBucket: "react-blog-app-be10e.appspot.com",
  messagingSenderId: "311630833523",
  appId: "1:311630833523:web:27e9b11c7f7b5a7c9e8706",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { database as default, googleAuthProvider, firebase };
