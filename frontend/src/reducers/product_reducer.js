import {
	RECEIVE_PRODUCTS,
	RECEIVE_PRODUCT,
	RECEIVE_USER_PRODUCTS
} from "../actions/product_actions";

const ProductsReducer = (
	state = { all: {}, user: {}, new: undefined },
	action
) => {
	Object.freeze(state);

	let newState = Object.assign({}, state);
	switch (action.type) {
		case RECEIVE_PRODUCTS:
			newState.all = action.products.data;
			return newState;
		case RECEIVE_PRODUCT:
			newState.all = action.product.data;
			return newState;
		case RECEIVE_USER_PRODUCTS:
			newState.all = action.products.data;
			return newState;
		default:
			return state;
	}
};

export default ProductsReducer;
