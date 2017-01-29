import { combineReducers } from 'redux';
import { LOAD_USERS } from '../actions/action-types';

const byId = (state = {}, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return action.payload || {};
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case LOAD_USERS:
      return action.payload ? Object.keys(action.payload) : [];
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
  state.users.allIds.map(userId => state.users.byId[userId]);

export const getUserById = (state, userId) => state.users.byId[userId];
