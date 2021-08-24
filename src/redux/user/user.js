import { auth } from '../../firebase/Firebase';

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload,
      };

    case 'SIGN_OUT':
      console.log('susscceeed');
      return {
        currentUser: null,
      };

    default:
      return state;
  }
};

export default userReducer;
