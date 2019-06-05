import React from 'react';
import ProductIndexItem from './product_index_item'
import './product_index.css'

class ProductIndex extends React.Component {
  componentDidMount(){
    this.props.fetchProducts();
  }

  renderProducts(){
    const products = this.props.products.map(product => {
      return (
        <ProductIndexItem key={product._id} product={product} />
      )
    })
    return products
  }

  render() {
    return (
      <div className="product-index-container">
        
        {this.renderProducts()}
      </div>
    )
  }
}

export default ProductIndex;