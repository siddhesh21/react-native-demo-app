// import * as firebase from "firebase";s
import "firebase/firestore";
import { firebase } from "@firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDxouyUgmG6QdZBPJUN_eG3oTvWL8jwb0o",
  authDomain: "react-native-app-780d5.firebaseapp.com",
  projectId: "react-native-app-780d5",
  storageBucket: "react-native-app-780d5.appspot.com",
  messagingSenderId: "891187415676",
  appId: "1:891187415676:web:38c4780e5dc9a6c75797f9",
  measurementId: "G-L5H7V93WT1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export { db };
