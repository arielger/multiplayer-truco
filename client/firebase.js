import firebase from "firebase";
import firebaseConfig from "../firebase.json";

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseDatabase = firebase.database();
export const firebaseAuth = firebase.auth();
