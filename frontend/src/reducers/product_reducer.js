import {
	RECEIVE_PRODUCTS,
	RECEIVE_PRODUCT,
	RECEIVE_USER_PRODUCTS
} from "../actions/product_actions";

const ProductsReducer = (
	// here is where I think we might want to discuss some changes to our state
	// shape, it could look quite different from this. It could also stay this
	// way if we decide that's best.
	state = {},
	action
) => {
	Object.freeze(state);

	let newState = Object.assign({}, state);
	switch (action.type) {
		case RECEIVE_PRODUCTS:
			return action.products.data
		case RECEIVE_PRODUCT:
			return Object.assign({}, state, {[action.product.data._id]: action.product.data })
		case RECEIVE_USER_PRODUCTS:
			newState.all = action.products.data;
			return newState;
		default:
			return state;
	}
};

export default ProductsReducer;
