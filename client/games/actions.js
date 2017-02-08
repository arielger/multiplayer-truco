import { firebaseDatabase } from '../firebase';
import {
  LOAD_GAMES,
  UNLOAD_GAMES,
  CREATE_GAME_REQUESTED,
  CREATE_GAME_FULFILLED,
  CREATE_GAME_REJECTED
} from './actionTypes';

const gamesRef = firebaseDatabase.ref('games');

// Load and unload games

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
  gamesRef.off(); // Remove games callback
  return { type: UNLOAD_GAMES };
}

// Create a new game

function createGameRequested() {
  return { type: CREATE_GAME_REQUESTED };
}

function createGameFulfilled() {
  return { type: CREATE_GAME_FULFILLED };
}

function createGameRejected(error) {
  console.error(error); // eslint-disable-line no-console
  return { type: CREATE_GAME_REJECTED };
}

export function createGame(game, userId, router) {
  return (dispatch) => {
    dispatch(createGameRequested());

    gamesRef.push(game)
      .then((data) => {
        dispatch(createGameFulfilled());

        // Transition to game waiting-room
        router.push(`/partida/${data.key}`);
      })
      .catch((error) => {
        dispatch(createGameRejected(error));
      });
  };
}
