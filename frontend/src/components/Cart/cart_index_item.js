import React from 'react'
import './cart_index.css'
import {Link} from 'react-router-dom'
class CartIndexItem extends React.Component{

    render(){
        return(
            <li className="cart-item">
                <div className="cart-item-img">
                <img src="https://img0.etsystatic.com/182/0/13777101/il_170x135.1427234962_ge1m.jpg" />
                </div>
                <div className="cart-item-name">
                   <Link to="#"> Funny Congratulation Card (is a link) </Link>
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