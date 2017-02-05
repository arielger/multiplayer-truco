import { combineReducers } from 'redux';
import { LOAD_USERS } from './actionTypes';

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
