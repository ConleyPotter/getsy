import React from 'react'
import './cart_index.css'
class CartIndexItem extends React.Component{

    render(){
        return(
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
        )
    }
}

export default CartIndexItem