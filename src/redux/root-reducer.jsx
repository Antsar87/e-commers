import { combineReducers } from 'redux';

import userREducer from './user/user';

export default combineReducers({
  user: userREducer,
});
