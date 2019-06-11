import React from 'react';
import './cart_index.css';
import {Link} from 'react-router-dom'
import CartIndexItem from './cart_index_item'

class CartIndex extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchCart(this.props.currentUser.id)
    }
    
    render(){
        const { cart } = this.props;
        let cartItems;
        if (cart) {
            cartItems = cart.map(item => {
                let productToPass;
                this.props.fetchProduct(item.product_id).then(product => {
                    debugger
                    productToPass = product;
                    return (
                        <CartIndexItem key={item._id} item={item} product={productToPass} />
                    )
                })
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
                            <span>${this.props.cartPrice}</span>
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