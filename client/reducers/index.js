import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { reducer as ui } from 'redux-ui';
import games from './games';
import user from './user';
import users from './users';

const trucoApp = combineReducers({
  games,
  user,
  users,
  ui,
  form
});

export default trucoApp;
