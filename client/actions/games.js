import { firebaseDatabase } from '../firebase';
import {
  LOAD_GAMES,
  UNLOAD_GAMES
} from './games-types';

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
  // @todo: complete
  console.log('@todo: complete unloadGames action creator');
}


export function createGame(game) {
  return gamesRef.push(game);
}
