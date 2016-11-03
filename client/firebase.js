import Firebase from 'firebase';
import { apiKey, authDomain, databaseURL, storageBucket } from '../firebase.json';

Firebase.initializeApp({
  apiKey,
  authDomain,
  databaseURL,
  storageBucket
});

export const database = Firebase.database();
export const auth = Firebase.auth();
