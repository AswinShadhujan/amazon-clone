// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB5mMq91ksUjP2zHjc4FF9NtxWWE8C3v4A",
  authDomain: "clone-ec904.firebaseapp.com",
  projectId: "clone-ec904",
  storageBucket: "clone-ec904.appspot.com",
  messagingSenderId: "178065524682",
  appId: "1:178065524682:web:b76733e5fca4fd36efb133",
  measurementId: "G-WBFB1PS6NE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
