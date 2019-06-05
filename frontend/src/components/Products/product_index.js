import React from 'react';
import ProductIndexItem from './product_index_item'
import './product_index.css'

class ProductIndex extends React.Component {
  
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchProducts();
  }

  renderProducts(){
    const pros = this.props.products.map(product => {
      return (
        <ProductIndexItem key={product._id} product={product} />
      )
    })
    return pros
  }

  render() {
    return (
      <div className="product-container">
        
        {this.renderProducts()}
      </div>
    )
  }
}

export default ProductIndex;