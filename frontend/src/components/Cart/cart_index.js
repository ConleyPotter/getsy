import React from 'react';
import './cart_index.css';
import {Link} from 'react-router-dom'
import CartIndexItem from './cart_index_item'

class CartIndex extends React.Component{
    render(){
        return (
            <div className="cart-wrapper">
                <div className="upper-cart"> 
                    <span className="cart-quantity-span"> 1 item in your cart</span>
                    <Link to="/products">Keep Shopping</Link>
                </div>
                <div className="cart-main-display">
                    <div className="cart-left-size">
                        <ul className="cart-items-container">
                            <li className="cart-item">
                                <div className="cart-item-img">
                                    image here
                                </div>
                                <div className="cart-item-name">
                                    Funny Congratulation Card (is a link)
                                    <div className="cart-item-save-remove">
                                        <span>save for later   </span>
                                        <span>Remove</span>
                                    </div>
                                </div>
                                    <span>quantity</span>
                                <div className="cart-item-price">
                                    <span>$4.99</span>
                                </div>
                            </li>
                            <CartIndexItem />
                        </ul>
                    </div>
                    <div className="cart-right-side">
                        <div className="cart-total-span">
                            <span>Item(s) total</span>
                            <span>$10.24</span>
                        </div>
                        <Link to="#" className="checkout-btn">Proceed to Checkout</Link>
                    </div>
                </div>
                <span className="cart-bottom-message">[leaf] Etsy offsets carbon emissions from every delivery</span>
            </div>
        )
    }
}

export default CartIndex;