import React from 'react';
import './cart_index.css';
import {Link} from 'react-router-dom'
import CartIndexItem from './cart_index_item'

class CartIndex extends React.Component{
    constructor(props) {
        super(props) 
        this.state = { cart: [], totalPrice: 0 }
    }

    componentDidMount(){
        const data = this.props.fetchCart(this.props.currentUser._id)
        this.setState({ cart: data.items, totalPrice: data.total });
    }
    
    render(){
        debugger
        const { cart } = this.state;
        const totalPrice = 0
        let cartItems;
        if (cart) {
            cartItems = cart.map(item => {
                return (
                    <CartIndexItem key={item.id} item={item}/>
                )
            })
        } else {
            cartItems = null
        }
    
        return (
            <div className="cart-wrapper">
                <div className="upper-cart"> 
                    <span className="cart-quantity-span"> 1 item in your cart</span>
                    <Link to="/products">Keep Shopping</Link>
                </div>
                <div className="cart-main-display">
                    <div className="cart-left-size">
                        <ul className="cart-items-container">
                            {cartItems}
                        </ul>
                    </div>
                    <div className="cart-right-side">
                        <div className="cart-total-span">
                            <span>Item(s) total</span>
                            <span>${this.state.totalPrice}</span>
                        </div>
                        <Link to="#" className="checkout-btn">Proceed to Checkout</Link>
                    </div>
                </div>
                <span className="cart-bottom-message"><i className="fas fa-leaf"></i> Etsy offsets carbon emissions from every delivery</span>
            </div>
        )
    }
}

export default CartIndex;