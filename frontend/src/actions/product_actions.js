import * as ProductUtils from "../util/product_api_util";

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const RECEIVE_USER_PRODUCTS = "RECEIVE_USER_PRODUCTS";
export const RECEIVE_PRODUCT_ERRORS = "RECEIVE_PRODUCT_ERRORS";

export const receiveProducts = products => {
	return {
		type: RECEIVE_PRODUCTS, 
		products
	}
};

export const receiveProduct = product => {
	return {
		type: RECEIVE_PRODUCT, 
		product
	}
};

export const receiveUserProducts = products => {
	return {
		type: RECEIVE_USER_PRODUCTS, 
		products
	}
};

export const receiveErrors = errors => ({
	type: RECEIVE_PRODUCT_ERRORS,
	errors
});

export const clearErrors = () => ({
	type: "CLEAR_ERRORS"
});

export const fetchProducts = () => dispatch => {
	return ProductUtils.getProducts()
		.then(products => dispatch(receiveProducts(products)))
		.catch(err => console.log(err));
};
export const fetchUserProducts = user_id => dispatch => {
	return ProductUtils.getUserProducts(user_id)
		.then(products => dispatch(receiveUserProducts(products)))
		.catch(err => console.log(err));
};
export const fetchProduct = product_id => dispatch => {
	return ProductUtils.getProduct(product_id)
		.then(product => dispatch(receiveProduct(product)))
		.catch(err => console.log(err));
};

export const createProduct = data => dispatch => {
	return ProductUtils.createProduct(data)
		.then(product => dispatch(receiveProduct(product)))
		.catch(err => dispatch(receiveErrors(err.response.data)));
};
