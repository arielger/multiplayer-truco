import firebase from 'firebase';
import { firebaseAuth } from '../firebase';
import {
  INIT_AUTH,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_OUT_SUCCESS
} from './action-types';

function signInSuccess(result) {
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

function authenticate(provider) {
  return (dispatch) => {
    firebaseAuth.signInWithPopup(provider)
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
      (user) => {
        dispatch(initializeAuth(user));
        unsuscribe();
        resolve();
      },
      (error) => {
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
  return (dispatch) => {
    firebaseAuth.signOut()
      .then(() => dispatch(signOutSuccess()));
  };
}
