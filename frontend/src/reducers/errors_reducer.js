import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import ProductErrorsReducer from './product_errors_reducer';

export default combineReducers({
  session: SessionErrorsReducer,
  product: ProductErrorsReducer
});

