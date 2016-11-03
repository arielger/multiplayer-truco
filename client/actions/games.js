import { database } from '../firebase';

const gamesRef = database.ref('games');

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
