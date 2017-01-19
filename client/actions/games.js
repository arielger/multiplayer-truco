import { firebaseDatabase } from '../firebase';
import {
  LOAD_GAMES,
  CREATE_GAME
} from './action-types';

const gamesRef = firebaseDatabase.ref('games');

export function loadGames() {
  return (dispatch) => {
    gamesRef.on('value', (snapshot) => {
      dispatch({
        type: LOAD_GAMES,
        payload: snapshot.val()
      });
    });
  };
}

export function unloadGames() {

}

export function createGame(game) {
  gamesRef.push(game);
  return {
    type: CREATE_GAME,
    payload: game
  };
}
