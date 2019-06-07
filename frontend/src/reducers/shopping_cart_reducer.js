import { 
    RECEIVE_CART,
    REMOVE_CART
  } from '../actions/shopping_cart_actions';
  
  const shoppingCartReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type) {
      case RECEIVE_CART: 
        return { [action.cart.id]: action.cart}
      case REMOVE_CART:  
        let newState = Object.assign({}, state)
        delete newState[action.cart_id]
        return newState
      default:
        return state
    }
  }
  
  export default shoppingCartReducer;