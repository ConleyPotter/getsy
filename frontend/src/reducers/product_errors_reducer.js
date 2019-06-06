import {
    RECEIVE_PRODUCT_ERRORS,
    CLEAR_ERRORS
  } from '../actions/product_actions';
  
  const _nullErrors = [];
  
  const ProductErrors = (state= _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_PRODUCT_ERRORS:
        return action.errors;
      case "CLEAR_ERRORS":
        return _nullErrors;
      default:
        return state;
    }
  };
  
  export default ProductErrors;