import React from "react";
import ProductIndexItem from "./product_index_item";
import "./product_index_by_category.css";

class ProductIndex extends React.Component {

  componentDidMount() {
    if (this.props.indextype == "user") {
      this.props.clearProducts();
      this.props.fetch(this.props.match.params.user_id);
    } else {
      this.props.fetch();
    }
  }

  renderProducts() {
    const pros = this.props.products.map(product => {
      return <ProductIndexItem key={product._id} product={product} />;
    });
    return pros;
  }

  render() {
    return <div className="product-container">{this.renderProducts()}</div>;
  }
}

export default ProductIndex;
