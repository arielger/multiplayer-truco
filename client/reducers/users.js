import { combineReducers } from 'redux';
import {
  LOAD_USERS,
  INIT_AUTH,
  SIGN_IN_SUCCESS,
  USER_DISCONNECT
} from '../actions/action-types';

const byId = (state = {}, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return action.payload || {};

    // Add the logged in user info to the connected users list
    case INIT_AUTH:
    case SIGN_IN_SUCCESS:
      if (!action.payload) return state;
      return Object.assign({}, state, {
        [action.payload.uid]: {
          name: action.payload.displayName,
          avatar: action.payload.photoURL
        }
      });

    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case LOAD_USERS:
      return action.payload ? Object.keys(action.payload) : [];

    case INIT_AUTH:
    case SIGN_IN_SUCCESS:
      if (!action.payload) return state;
      return [...state, action.payload.uid];

    default:
      return state;
  }
};

const users = combineReducers({
  byId,
  allIds
});

export default users;

// Selectors

export const getAllConnectedUsers = state =>
  state.users.allIds.map(userId => state.users.allIds[userId]);
