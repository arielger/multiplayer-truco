import firebase from "firebase";
import _ from "lodash";
import { firebaseAuth, firebaseDatabase } from "../firebase";
import {
  INIT_AUTH,
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_OUT_SUCCESS
} from "./actionTypes";

const usersRef = firebaseDatabase.ref("users");

function addConnectedUser(user) {
  const userRef = usersRef.child(user.uid);

  userRef.once("value").then(snapshot => {
    if (snapshot.val()) return;

    // If the user disconnects from Firebase remove the user from the list
    userRef.onDisconnect().remove();

    userRef.set({
      id: user.uid,
      name: user.displayName,
      avatar: user.providerData[0].photoURL
    });
  });
}

function signInSuccess(result) {
  if (_.get(result, "user.uid")) addConnectedUser(result.user);

  return {
    type: SIGN_IN_SUCCESS,
    payload: result.user
  };
}

function signInError(error) {
  return {
    type: SIGN_IN_ERROR,
    payload: error
  };
}

function signOutSuccess() {
  return {
    type: SIGN_OUT_SUCCESS
  };
}

function startSignIn() {
  return {
    type: SIGN_IN_START
  };
}

function authenticate(provider) {
  return dispatch => {
    dispatch(startSignIn());
    firebaseAuth
      .signInWithPopup(provider)
      .then(result => dispatch(signInSuccess(result)))
      .catch(error => dispatch(signInError(error)));
  };
}

function initializeAuth(user) {
  return {
    type: INIT_AUTH,
    payload: user
  };
}

export function initAuth(dispatch) {
  return new Promise((resolve, reject) => {
    const unsuscribe = firebaseAuth.onAuthStateChanged(
      user => {
        dispatch(initializeAuth(user));

        // Add user to connected users list if he is already authenticated
        if (_.get(user, "uid")) addConnectedUser(user);

        unsuscribe();
        resolve();
      },
      error => {
        reject(error);
      }
    );
  });
}

export function signInWithFacebook() {
  return authenticate(new firebase.auth.FacebookAuthProvider());
}

export function signInWithTwitter() {
  return authenticate(new firebase.auth.TwitterAuthProvider());
}

export function signInWithGithub() {
  return authenticate(new firebase.auth.GithubAuthProvider());
}

export function signOut() {
  return dispatch => {
    firebaseAuth.signOut().then(() => dispatch(signOutSuccess()));
  };
}
