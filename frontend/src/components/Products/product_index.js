import React from 'react';
import ProductIndexItem from './product_index_item'
import './product_index.css'
import leicaImg from './leica.jpg';

class ProductIndex extends React.Component {
  constructor(props) {
    super(props)
    this.images = [
      leicaImg
    ]
  }

  componentDidUpdate(){
    // redirect to next category 
  }

  componentDidMount(){
    const { indextype } = this.props
    if (indextype === 'user'){
      this.props.clearProducts();
      this.props.fetch(this.props.match.params.user_id);
    } else if (indextype === 'categories') {
      this.props.clearProducts();
      this.props.fetch(this.props.match.params.category);
    } else {
      this.props.fetch();
    }
  }

  renderProducts(){
    const products = this.props.products.map(product => {
      // this.images.forEach(img => {
        return (
          // <ProductIndexItem key={product._id} product={product} img={img}/>
          <ProductIndexItem key={product._id} product={product} />
        )
      // })
    })
    return products
  }

  render() {
    return (
      <div>
        <h1 className="product-index-category">Category Name</h1>
        <div className="product-index-container">
          <ul className="product-index-ul">
            {this.renderProducts()}
          </ul>
        </div>
      </div>
    )
  }
}

export default ProductIndex;