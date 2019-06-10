import * as ProductUtils from "../util/product_api_util";

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const RECEIVE_USER_PRODUCTS = "RECEIVE_USER_PRODUCTS";
export const RECEIVE_PRODUCT_ERRORS = "RECEIVE_PRODUCT_ERRORS";
export const RECEIVE_PRODUCT_OWNER = "RECEIVE_PRODUCT_OWNER"
export const CLEAR_PRODUCTS = "CLEAR_PRODUCTS"
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveProducts = products => {
	return {
		type: RECEIVE_PRODUCTS, 
		products
	}
};

export const receiveProduct = data => {
	
	return {
		type: RECEIVE_PRODUCT, 
		product: data.product,
		user: data.user
	}
};

export const receiveUserProducts = products => {
	return {
		type: RECEIVE_USER_PRODUCTS, 
		products
	}
};

export const receiveProductOwner = user => {
	return {
		type: RECEIVE_PRODUCT_OWNER,
		user
	}
}

export const clearProducts = () => {
	return {
		type: CLEAR_PRODUCTS
	}
}

export const receiveErrors = errors => {
	return {
		type: RECEIVE_PRODUCT_ERRORS,
		errors
	}
};

export const clearErrors = () => ({
	type: CLEAR_ERRORS
});

export const removeProduct = product_id => ({
  type: DELETE_PRODUCT,
  product_id
});

export const updateProduct = product => ({
  type: RECEIVE_PRODUCT,
  product
})

export const fetchProducts = () => dispatch => {
	return ProductUtils.getProducts()
		.then(products => {
			
			dispatch(receiveProducts(products.data))
		})
		.catch(err => console.log(err));
};
export const fetchUserProducts = user_id => dispatch => {
	return ProductUtils.getUserProducts(user_id)
		.then(products => dispatch(receiveUserProducts(products.data)))
		.catch(err => console.log(err));
};
export const fetchProduct = product_id => dispatch => {
	return ProductUtils.getProduct(product_id)
		.then(product => {
			dispatch(receiveProduct(product.data))
		})
		.catch(err => dispatch(receiveErrors(err)));
};

export const createProduct = data => dispatch => {
	
	return ProductUtils.createProduct(data)
		.then(product => {
			return dispatch(receiveProduct(product.data))
		})
		.catch(err => dispatch(receiveErrors(err.response.data)));
};

export const fetchProductOwner = user_id => dispatch => {
	return ProductUtils.getProductOwner(user_id)
	.then(user => dispatch(receiveProductOwner(user)))
	.catch(err => dispatch(receiveErrors(err.response.data)))
}

export const deleteProduct = product_id => dispatch => {
  return ProductUtils.deleteProduct(product_id)
  .then(() => dispatch(removeProduct(product_id)))
  .catch(err => dispatch(receiveErrors(err.response.data)))
}

export const editProduct = product => dispatch => {
  return ProductUtils.updateProduct(product)
  .then(product => dispatch(updateProduct(product)))
  .catch(err => dispatch(receiveErrors(err.response.data)))
}
