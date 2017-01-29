import {
  LOAD_GAME,
  LEAVE_GAME
} from '../actions/action-types';

const game = (state = null, action) => {
  switch (action.type) {
    case LOAD_GAME:
      return action.payload;
    case LEAVE_GAME:
      return null;
    default:
      return state;
  }
};

export default game;
