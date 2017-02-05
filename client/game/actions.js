import { firebaseDatabase } from '../firebase';
import {
  JOIN_GAME,
  LEAVE_GAME,
  LOAD_GAME
} from './actionTypes';

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
