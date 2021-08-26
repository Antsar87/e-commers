import { combineReducers } from 'redux';

import userREducer from './user/user';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
  user: userREducer,
  cart: cartReducer,
});
