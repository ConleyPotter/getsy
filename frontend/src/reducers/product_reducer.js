import {
  RECEIVE_CATEGORY_PRODUCTS,
  CLEAR_PRODUCTS
} from '../actions/product_actions';

const ProductsReducer = (
  state = {},
  action
) => {
  Object.freeze(state);

  let newState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_CATEGORY_PRODUCTS:
      let newState = {};
      let products = action.products.data;
      Object.keys(products).forEach(product => {
        newState[products[product]._id] = products[product]
      });

      return Object.assign({}, state, newState);

    default: 
      return state;
  }
}

export default ProductsReducer;