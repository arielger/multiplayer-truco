import {
  LOAD_GAMES
} from '../actions/games-types';

const games = (state = [], action) => {
  switch (action.type) {
    case LOAD_GAMES:
      return action.payload;
    default:
      return state;
  }
};

export default games;
