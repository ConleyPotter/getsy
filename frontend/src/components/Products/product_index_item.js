import React from "react";
import { Link } from "react-router-dom";
import "./product_index_item.css";
class ProductIndexItem extends React.Component {
  render() {
    return (
      <Link to={`/products/${this.props.product._id}`}>
        <div className="product-card">
          <div>
            <h3>Name: {this.props.product.name} image</h3>
          </div>
          <span className="product-tool-tip">
            {this.props.product.description}
          </span>
        </div>
        <div>
          <h3>Price: ${this.props.product.price}</h3>
        </div>
      </Link>
    );
  }
}

export default ProductIndexItem;
