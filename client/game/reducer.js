import { LEAVE_GAME, LOAD_GAME } from "./actionTypes";

const game = (state = null, action) => {
  switch (action.type) {
    case LEAVE_GAME:
      return null;
    case LOAD_GAME:
      return action.payload;
    default:
      return state;
  }
};

export default game;
