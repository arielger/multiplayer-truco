import { firebaseDatabase } from '../firebase';
import {
  LOAD_USERS
} from './actionTypes';

const usersRef = firebaseDatabase.ref('users');

export function loadUsers(dispatch) {
  return new Promise((resolve) => {
    usersRef.on('value', (snapshot) => {
      dispatch({
        type: LOAD_USERS,
        payload: snapshot.val()
      });
      resolve();
    });
  });
}
