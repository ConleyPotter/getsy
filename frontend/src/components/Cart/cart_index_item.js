import React from 'react'
import './cart_index.css'
import {Link} from 'react-router-dom'
class CartIndexItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            item: {}
        }
    }

    render(){
        debugger
        return (
          <li className="cart-item">
            <div className="cart-item-img">
              <img src="https://getsy-app.s3-us-west-2.amazonaws.com/asphalt-colored-concrete-841369.jpg" />
            </div>
            <div className="cart-item-name">
              <Link to={`/products/${this.props.product._id}`}>
                {this.props.product.name}
              </Link>
              <div className="cart-item-save-remove">
                <span>save for later </span>
                <span>Remove</span>
              </div>
            </div>
            <span>quantity</span>
            <div className="cart-item-price">
              <span>$4.99</span>
            </div>
          </li>
        );
    }
}

export default CartIndexItem