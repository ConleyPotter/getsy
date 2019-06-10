import { 
    RECEIVE_CART,
    REMOVE_CART,
    REMOVE_CART_ITEM,
    RECEIVE_CART_ITEM
  } from '../actions/shopping_cart_actions';
  
  const shoppingCartReducer = (state={}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch(action.type) {
      case RECEIVE_CART: 
        return { item: action.data.item, 
          total: action.data.totalPrice }
      case RECEIVE_CART_ITEM:
        return { [action.cart.id]: action.cart}
      case REMOVE_CART:  
        return {}
      case REMOVE_CART_ITEM:
        delete newState[action.data.id]    
        return newState;
      default:
        return state
    }
  }
  
  export default shoppingCartReducer;