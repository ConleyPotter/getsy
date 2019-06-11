import * as CartUtil from '../util/shopping_cart_api_util'
export const RECEIVE_CART = "RECEIVE_CART"
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM"
export const REMOVE_CART = "REMOVE_CART"
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM"


const receiveCart = data => {
    return {
        type: RECEIVE_CART,
        data
    }
}

const receiveCartItem = cartItem => {
    return {
        type: RECEIVE_CART_ITEM,
        cartItem
    }
}

const removeCart = (user_id) => {
    return {
        type: REMOVE_CART,
        user_id
    }
}

const removeCartItem = (id) => {
    return {
        type: REMOVE_CART_ITEM,
        id
    }
}

export const fetchCart = (user_id) => dispatch => {
    return CartUtil.getShoppingCart(user_id)
        .then(data => dispatch(receiveCart(data.data)))
        .catch(err => console.log(err))
}

export const addProductToCart = data => dispatch => {
    return CartUtil.addProductToCart(data)
    .then(cartItem => dispatch(receiveCartItem(cartItem)))
    .catch(err => console.log(err))
}

export const deleteShoppingCart = (user_id) => dispatch => {
    return CartUtil.deleteShoppingCart(user_id)
      .then(cart => dispatch(removeCart(cart)))
      .catch(err => console.log(err));
}

export const deleteItem = (id) => dispatch => {
    return CartUtil.deleteItem(id)
      .then((id) => dispatch(removeCartItem(id)))
      .catch(err => console.log(err));
}