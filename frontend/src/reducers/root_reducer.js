import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from "./errors_reducer";
import modal from "./modal_reducer";
import ProductsReducer from "./product_reducer";

const RootReducer = combineReducers({
	session,
	errors,
	products: ProductsReducer,
	modal
});

export default RootReducer;
