import { combineReducers } from "redux";
import {
  SHOW_CREATE_GAME_MODAL,
  CLOSE_CREATE_GAME_MODAL
} from './actionTypes';

const showCreateGameModal = (state = false, action) => {
  switch (action.type) {
    case SHOW_CREATE_GAME_MODAL:
      return true;
    case CLOSE_CREATE_GAME_MODAL:
      return false;
    default:
      return state;
  }
}

export default combineReducers({ showCreateGameModal });
