import {
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR, // @todo
  SIGN_OUT_SUCCESS, // @todo
  SIGN_OUT_ERROR, // @todo
  INIT_AUTH
} from '../actions/user-types';

const user = (state = null, action) => {
  switch (action.type) {
    case INIT_AUTH:
      return action.payload;

    case SIGN_IN_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};

export default user;
