import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import modal from './modal_reducer';
import users from './users_reducer'
import products from "./product_reducer";

const RootReducer = combineReducers({
  session, 
  errors,
  users,
	products,
  modal
})

export default RootReducer;
