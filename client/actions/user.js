import { auth } from '../firebase';

// http://blog.krawaller.se/posts/a-react-redux-firebase-app-with-authentication/
// startListeningToAuth is called att app start,
// setting upp the real-time updates from Firebase.
// This means we never have to bother catching the result of
// subsequent auth requests made to Firebase, this listener will catch them all!
export function listenToAuth() {
  return (dispatch, getState) => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user && getState().user != null) {
        dispatch({
          type: 'LOG_IN',
          payload: user
        });
      }
      if (user == null) {
        dispatch({
          type: 'LOG_OUT'
        });
      }
    });
  };
}

export function signInAnonymously() {
  return () => {
    auth.signInAnonymously().catch(
      error => console.error(error.code, error.message)
    );
  };
}
