import { combineReducers } from 'redux';
import games from './games';
import user from './user';

const trucoApp = combineReducers({
  games,
  user
});

export default trucoApp;
