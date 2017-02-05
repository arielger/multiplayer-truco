import { combineReducers } from 'redux';
import {
  LOAD_GAMES,
  UNLOAD_GAMES
} from './actionTypes';

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

export default combineReducers({ byId, allIds });
