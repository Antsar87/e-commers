import { UserActionTypes } from './user.type';

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const setSignOut = () => ({
  type: UserActionTypes.SIGN_OUT,
});
