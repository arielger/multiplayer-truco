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
    const userRef = gamesRef.child(`${gameId}/players`).push(userId);

    // If the user disconnects from Firebase remove the user from the players list
    userRef.onDisconnect().remove();

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

    return userRef.key;
  };
}

export function leaveGame(userId, userKey, gameId, gameCreatorId, gameStarted) {
  const isCreator = (userId === gameCreatorId);

  gamesRef.child(`${gameId}/players/${userKey}`).remove();

  return {
    type: LEAVE_GAME
  };

  // Game not started
  //   If not creator -> do nothing (only remove from list)
  //   If creator -> show admin gone -> Remove game

  // Game started
  //   If creator / other player -> Show player gone -> Remove game
}
