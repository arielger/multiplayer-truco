import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import game from './game';
import games from './games';
import user from './user';
import users from './users';

const trucoApp = combineReducers({
  game,
  games,
  user,
  users,
  form
});

export default trucoApp;
