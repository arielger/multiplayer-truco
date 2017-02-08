import {
  JOIN_GAME_FULFILLED,
  LEAVE_GAME
} from './actionTypes';

const game = (state = null, action) => {
  switch (action.type) {
    case JOIN_GAME_FULFILLED:
      return action.payload;
    case LEAVE_GAME:
      return null;
    default:
      return state;
  }
};

export default game;
