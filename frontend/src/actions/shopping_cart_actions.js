import * as CartUtil from '../util/shopping_cart_api_util'
export const RECEIVE_CART = "RECEIVE_CART"
export const REMOVE_CART = "REMOVE_CART"

const receiveCart = cart => {
    return {
        type: RECEIVE_CART,
        cart
    }
}

const removeCart = (cart) => {
    return {
        type: REMOVE_CART,
        cart_id: cart._id
    }
}

export const fetchCart = (user_id) => dispatch => {
    return CartUtil.getShoppingCart(user_id)
            .then(cart => dispatch(receiveCart(cart)))
            .catch(err => console.log(err))
}

export const addCart = data => dispatch => {
    return CartUtil.addProductToCart(data)
    .then(cart => dispatch(receiveCart(cart)))
    .catch(err => console.log(err))
}

export const updateCart = (id,data) => dispatch => {
    return CartUtil.updateShoppingCart(id,data)
    .then(cart => dispatch(receiveCart(cart)))
    .catch(err => console.log(err))
}

export const emptyCart = (id) => dispatch => {
    return CartUtil.emptyCart(id)
    .then(cart => dispatch(removeCart(cart)))
}