import { UserActionTypes } from './user.type';

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    case UserActionTypes.SIGN_OUT:
      console.log('susscceeed');
      return {
        currentUser: null,
      };

    case UserActionTypes.GET_IP:
      return {
        api: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
