import {
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR, // @todo
  SIGN_OUT_SUCCESS,
  INIT_AUTH
} from '../actions/user-types';

const user = (state = null, action) => {
  switch (action.type) {
    case INIT_AUTH:
      return action.payload;

    case SIGN_IN_SUCCESS:
      return action.payload;

    case SIGN_OUT_SUCCESS:
      return null;

    default:
      return state;
  }
};

export default user;
