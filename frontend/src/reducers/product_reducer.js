import {
	RECEIVE_PRODUCTS,
	RECEIVE_PRODUCT,
	RECEIVE_USER_PRODUCTS,
	RECEIVE_PRODUCT_OWNER
} from "../actions/product_actions";

const ProductsReducer = (
	state = {  },
	action
) => {
	Object.freeze(state);

	let newState = Object.assign({}, state);
	switch (action.type) {
		case RECEIVE_PRODUCTS:
			
			let oj = {};
			let products = action.products.data;
			Object.keys(products).forEach((product)=> {
				oj[products[product]._id] = products[product]
			})
			
			
			return Object.assign({}, state, oj)
		case RECEIVE_PRODUCT:
			
			return Object.assign({}, state, {[action.product.data.product._id]: action.product.data })
			
			
		case RECEIVE_USER_PRODUCTS:
			
			let obj = {}
			action.products.data.forEach(idx => {
				obj[idx._id] = idx
			});
			
			
			return Object.assign({}, state, obj)
		case RECEIVE_PRODUCT_OWNER:
			// newState.user = action.user.data;
			return newState
		default:
			return state;
	}
};

export default ProductsReducer;
