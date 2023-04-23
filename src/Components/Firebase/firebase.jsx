import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2Kn4njhEbEW1ZnwqhTOIuSuypcoORvYs",

  authDomain: "mental-health-57cc3.firebaseapp.com",

  projectId: "mental-health-57cc3",

  storageBucket: "mental-health-57cc3.appspot.com",

  messagingSenderId: "722539200292",

  appId: "1:722539200292:web:4339171e1db574a6f57db1",

  measurementId: "G-RP0HBJZBE6",
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
