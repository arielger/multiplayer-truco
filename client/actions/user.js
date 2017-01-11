import firebase from 'firebase';
import { firebaseAuth } from '../firebase';
import {
  INIT_AUTH,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR
} from './user-types';

function signInSuccess(result) {
  return {
    type: SIGN_IN_SUCCESS,
    payload: result
  };
}

function signInError(error) {
  return {
    type: SIGN_IN_ERROR,
    payload: error
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
    firebaseAuth.onAuthStateChanged(
      (user) => {
        dispatch(initializeAuth(user));
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
