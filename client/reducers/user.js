import {
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR, // @todo
  SIGN_OUT_SUCCESS,
  INIT_AUTH
} from '../actions/action-types';

const user = (state = null, action) => {
  switch (action.type) {
    case INIT_AUTH:
    case SIGN_IN_SUCCESS:
      if (!action.payload) return state;
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
        avatar: action.payload.photoURL
      };

    case SIGN_OUT_SUCCESS:
      return null;

    default:
      return state;
  }
};

export default user;
