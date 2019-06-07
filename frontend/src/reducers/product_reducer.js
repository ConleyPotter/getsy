import {
	RECEIVE_PRODUCTS,
	RECEIVE_PRODUCT,
	RECEIVE_USER_PRODUCTS,
	RECEIVE_PRODUCT_OWNER,
	RECEIVE_CATEGORY_PRODUCTS,
	CLEAR_PRODUCTS
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
			
			let oj = {};
			let products = action.products.data;
			Object.keys(products).forEach((product)=> {
				oj[products[product]._id] = products[product]
			})
			
			
			return Object.assign({}, state, oj)
		case RECEIVE_PRODUCT:
			
			return Object.assign({}, state, {[action.product.data.product._id]: action.product.data })
			
			
		case RECEIVE_CATEGORY_PRODUCTS:
      let tempObj = {};
      let categoryProducts = action.products.data;
      
      Object.keys(categoryProducts).forEach(product => {
        tempObj[categoryProducts[product]._id] =
          categoryProducts[product];
      });

			return Object.assign({}, newState, tempObj);
			
		case RECEIVE_USER_PRODUCTS:
			
			let obj = {}
			action.products.data.forEach(idx => {
				obj[idx._id] = idx
			});
			
			return Object.assign({}, state, obj)
		case CLEAR_PRODUCTS:
			newState = {}
			return Object.assign({},newState)
		default:
			return state;
	}
};

export default ProductsReducer;
