import * as ProductUtils from "../util/product_api_util";

export const RECEIVE_CATEGORY_PRODUCTS = "RECEIVE_CATEGORY_PRODUCTS";
export const CLEAR_PRODUCTS = "CLEAR_PRODUCTS";
export const RECEIVE_PRODUCT_ERRORS = "RECEIVE_PRODUCT_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveCategoryProducts = products => {
  return {
    type: RECEIVE_CATEGORY_PRODUCTS,
    products
  }
};

export const clearProducts = () => {
  return {
    type: CLEAR_PRODUCTS
  };
};

export const receiveErrors = errors => ({
  type: RECEIVE_PRODUCT_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: "CLEAR_ERRORS"
});

export const fetchCategoryProducts = category => dispatch => {
  return ProductUtils.getProductsByCategory(category)
    .then(products => dispatch(receiveCategoryProducts(products)))
    .catch(err => dispatch(receiveErrors(err)));
}