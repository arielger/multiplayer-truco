import { firebaseDatabase } from '../firebase';
import {
  JOIN_GAME_REQUESTED,
  JOIN_GAME_FULFILLED,
  JOIN_GAME_REJECTED,
  LEAVE_GAME
} from './actionTypes';

const gamesRef = firebaseDatabase.ref('games');

//  Join game

function joinGameRequested() {
  return { type: JOIN_GAME_REQUESTED };
}

function joinGameFulfilled(game) {
  return {
    type: JOIN_GAME_FULFILLED,
    payload: game
  };
}

function joinGameRejected(error) {
  console.error('ERROR joining game: ', error); // eslint-disable-line no-console
  return {
    type: JOIN_GAME_REJECTED,
    payload: error
  };
}

export function joinGame(userId, gameId) {
  return (dispatch) => {
    const gameRef = gamesRef.child(gameId);

    dispatch(joinGameRequested());

    const joinedUserRef = gameRef.child('players').push(userId);

    joinedUserRef
      .then((data) => {
        // Remove user from players list if disconnected
        data.ref.onDisconnect().remove();

        // Load created game firebase info into redux store
        gameRef.on('value', (snapshot) => {
          const game = snapshot.val();

          dispatch(joinGameFulfilled({
            ...game,
            id: gameId
          }));

          // Set the game as started if the players are fulfilled
          if (Object.keys(game.players).length === game.configuration.playersCount) {
            gameRef.update({
              started: true
            });
          }
        });
      })
      .catch((error) => {
        dispatch(joinGameRejected(error));
      });

    return joinedUserRef.key;
  };
}

// Leave game

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
