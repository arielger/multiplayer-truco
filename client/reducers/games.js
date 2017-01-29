import { combineReducers } from 'redux';
import { getUserById } from './users';
import {
  LOAD_GAMES,
  UNLOAD_GAMES
} from '../actions/action-types';

const byId = (state = {}, action) => {
  switch (action.type) {
    case LOAD_GAMES:
      return action.payload;
    case UNLOAD_GAMES:
      return {};
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case LOAD_GAMES:
      return action.payload ? Object.keys(action.payload) : [];
    case UNLOAD_GAMES:
      return [];
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
  const players = game.players ?
    Object.keys(game.players).map(key => getUserById(state, game.players[key])) : [];
  const creatorAvatar = getUserById(state, game.createdBy).avatar;

  return ({
    ...game,
    id,
    players,
    creatorAvatar
  });
});
