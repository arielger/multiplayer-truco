import Firebase from 'firebase';
import { apiKey, authDomain, databaseURL, storageBucket } from '../../firebase.json';

Firebase.initializeApp({
  apiKey,
  authDomain,
  databaseURL,
  storageBucket
});

const gamesRef = Firebase.database().ref('games');

export function fetchGames() {
  return (dispatch) => {
    gamesRef.on('value', (snapshot) => {
      dispatch({
        type: 'FETCH_GAMES',
        payload: snapshot.val()
      });
    });
  };
}

export function createGame(game) {
  return gamesRef.push(game);
}

// export function deleteGame(gameId) {
//
// }
