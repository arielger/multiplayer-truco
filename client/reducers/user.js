import {
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS,
  INIT_AUTH
} from '../actions/action-types';

const initialState = {
  authenticated: false,
  loading: false,
  data: {}
};

const user = (state = Object.assign({}, initialState), action) => {
  switch (action.type) {

    case SIGN_IN_START:
      return Object.assign({}, state, {
        authenticated: false,
        loading: true
      });

    case INIT_AUTH:
    case SIGN_IN_SUCCESS:
      if (!action.payload) return state;
      return {
        loading: false,
        authenticated: true,
        data: {
          uid: action.payload.uid,
          name: action.payload.displayName,
          avatar: action.payload.photoURL
        }
      };

    case SIGN_OUT_SUCCESS:
      return Object.assign({}, initialState);

    default:
      return state;
  }
};

export default user;
