import { firebaseDatabase } from '../firebase';
import {
  LOAD_GAMES,
  UNLOAD_GAMES,
  CREATE_GAME_REQUESTED,
  CREATE_GAME_FULFILLED,
  CREATE_GAME_REJECTED,
  JOIN_GAME,
  LEAVE_GAME,
  LOAD_GAME
} from './action-types';

const gamesRef = firebaseDatabase.ref('games');

export function joinGame(userId, gameId) {
  return (dispatch) => {
    dispatch({ type: JOIN_GAME });

    // Push new player to game ref
    gamesRef.child(`${gameId}/players`).push(userId);

    // Get firebase current game value
    gamesRef.child(gameId).on('value', (snapshot) => {
      dispatch({
        type: LOAD_GAME,
        payload: {
          ...snapshot.val(),
          id: gameId
        }
      });
    });
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

export function createGame(game, userId, router) {
  return (dispatch) => {
    dispatch(createGameRequested());

    gamesRef.push(game)
      .then((data) => {
        dispatch(createGameFulfilled());

        // Transition to game waiting-room
        router.transitionTo(`/partida/${data.key}`);
      })
      .catch((error) => {
        dispatch(createGameRejected(error));
      });
  };
}
