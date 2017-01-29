import { firebaseDatabase } from '../firebase';
import {
  LOAD_GAMES,
  UNLOAD_GAMES,
  JOIN_GAME,
  LEAVE_GAME,
  CREATE_GAME_REQUESTED,
  CREATE_GAME_FULFILLED,
  CREATE_GAME_REJECTED
} from './action-types';

const gamesRef = firebaseDatabase.ref('games');

export function joinGame(userId, gameId) {
  // Push new player to game ref
  gamesRef.child(`${gameId}/players`).push(userId);

  return {
    type: JOIN_GAME,
    payload: { userId, gameId }
  };
}

export function leaveGame(userId, gameId) {
  return {
    type: LEAVE_GAME,
    payload: { userId, gameId }
  };
}

function createGameRequested() {
  return { type: CREATE_GAME_REQUESTED };
}

function createGameFulfilled() {
  return { type: CREATE_GAME_FULFILLED };
}

function createGameRejected(error) {
  console.log(error); // eslint-disable-line no-console
  return { type: CREATE_GAME_REJECTED };
}

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
  // Remove games callback
  gamesRef.off();
  return { type: UNLOAD_GAMES };
}

export function createGame(game, userId) {
  return (dispatch) => {
    dispatch(createGameRequested());

    gamesRef.push(game)
      .then((data) => {
        dispatch(createGameFulfilled());
        dispatch(joinGame(userId, data.key));
      })
      .catch((error) => {
        dispatch(createGameRejected(error));
      });
  };
}
