import React from 'react';
import ProductIndexItem from './product_index_item'
import './product_index.css'
import soupsImg from './soups.jpg';
import avocadosImg from './avocados.jpg';
import cameraImg from './camera.jpg';
import glassesImg from './glasses.jpg';
import recordPlayerImg from './recordPlayer.jpg';
import leicaImg from './leica.jpg';
import teacupsImg from './teacups.jpg';

class ProductIndex extends React.Component {
  constructor(props) {
    super(props)
    this.images = [
      soupsImg, avocadosImg, cameraImg, glassesImg, recordPlayerImg, leicaImg, teacupsImg
    ]
  }

  componentDidMount(){
    this.props.fetchProducts();
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