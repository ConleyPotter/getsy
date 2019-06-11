import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import modal from './modal_reducer';
import users from './users_reducer'
import products from "./product_reducer";
import shoppingCartReducer from "./shopping_cart_reducer"

const RootReducer = combineReducers({
  session, 
  errors,
  users,
	products,
	cart: shoppingCartReducer,
	modal
});

export default RootReducer;
