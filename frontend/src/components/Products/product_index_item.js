import React from 'react'
import {Link} from 'react-router-dom'




class ProductIndexItem extends React.Component {

    render(){
        return (
          <div className="product-link-container">
            <Link to={`/products/${this.props.product._id}`}
              className="link-container">
              <img alt="" src={this.props.img} className="img" />
              <div className="product-label-container">
                <div className="product-name">{this.props.product.name}</div>
                {/* <div className="product-description">{this.props.product.description}</div> */}
                <div className="product-price">${this.props.product.price}</div>      
              </div>
            </Link>

          </div>
        )
    }


}


export default ProductIndexItem
