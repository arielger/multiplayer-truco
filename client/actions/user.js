import { auth } from '../firebase';

export function signInAnonymously() {
  return (dispatch) => {
    auth.signInAnonymously().catch(error => console.error(error.code, error.message));
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        dispatch({
          type: 'LOG_IN',
          payload: user
        });
      } else {
        dispatch({
          type: 'LOG_OUT'
        });
      }
    });
  };
}
