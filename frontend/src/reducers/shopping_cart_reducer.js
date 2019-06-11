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
        return { items: action.data.items, 
          total: action.data.totalPrice }
      case RECEIVE_CART_ITEM:
        debugger
        return { [action.cartItem.data._id]: action.cartItem.data}
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