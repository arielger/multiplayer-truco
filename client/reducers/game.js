import {
  JOIN_GAME,
  LEAVE_GAME
} from '../actions/action-types';

const game = (state = null, action) => {
  switch (action.type) {
    case JOIN_GAME:
      return state;
    case LEAVE_GAME:
      return state;
    default:
      return state;
  }
};

export default game;
