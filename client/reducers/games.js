import { combineReducers } from 'redux';
import {
  LOAD_GAMES,
  JOIN_GAME,
  LEAVE_GAME
} from '../actions/action-types';
import gameReducer from './game';

const byId = (state = {}, action) => {
  switch (action.type) {
    case LOAD_GAMES:
      return action.payload;
    case JOIN_GAME:
    case LEAVE_GAME:
      return {
        ...state,
        [action.id]: gameReducer(state[action.id], action)
      };
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case LOAD_GAMES:
      return action.payload ? Object.keys(action.payload) : [];
    default:
      return state;
  }
};

const games = combineReducers({
  byId,
  allIds
});

export default games;

// Selectors

export const getAllGames = state => state.games.allIds.map((id) => {
  const game = state.games.byId[id];
  const creatorAvatar = state.users.byId[game.createdBy].avatar;

  return ({
    ...game,
    id,
    creatorAvatar
  });
});
