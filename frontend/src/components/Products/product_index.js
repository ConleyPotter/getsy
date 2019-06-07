import React from 'react';
import ProductIndexItem from './product_index_item'
import './product_index.css'
import leicaImg from './leica.jpg';

class ProductIndex extends React.Component {
  constructor(props) {
    super(props)
    this.productImages = [
      `https://getsy-app.s3-us-west-2.amazonaws.com/alcohol-blue-bottle-5939.jpg`,
      `https://getsy-app.s3-us-west-2.amazonaws.com/animals-assorted-background-1043520.jpg`,
      `https://getsy-app.s3-us-west-2.amazonaws.com/animals-bear-chicken-59720.jpg`,
      `https://getsy-app.s3-us-west-2.amazonaws.com/animals-boxes-close-up-997728.jpg`,
      `https://getsy-app.s3-us-west-2.amazonaws.com/art-art-materials-artistic-1327716.jpg`,
      `https://getsy-app.s3-us-west-2.amazonaws.com/asphalt-colored-concrete-841369.jpg`,
      `https://getsy-app.s3-us-west-2.amazonaws.com/birthday-bow-card-264771.jpg`,
      `https://getsy-app.s3-us-west-2.amazonaws.com/blank-card-cardboard-697059.jpg`,
      `https://getsy-app.s3-us-west-2.amazonaws.com/blur-blurry-character-163157.jpg`,
      `https://getsy-app.s3-us-west-2.amazonaws.com/communication-connection-dial-207444.jpg`,
      `https://getsy-app.s3-us-west-2.amazonaws.com/flatlay-pen-typewriter-875513.jpg`,
      `https://getsy-app.s3-us-west-2.amazonaws.com/freddy-g-1574575-unsplash.jpg`,
      `https://getsy-app.s3-us-west-2.amazonaws.com/kelly-sikkema-1444039-unsplash.jpg`,
      `https://getsy-app.s3-us-west-2.amazonaws.com/pawel-czerwinski-736056-unsplash.jpg`,
      `https://getsy-app.s3-us-west-2.amazonaws.com/markus-spiske-626757-unsplash.jpg`,
      `https://getsy-app.s3-us-west-2.amazonaws.com/phoenix-han-1386167-unsplash.jpg`,
      `https://getsy-app.s3-us-west-2.amazonaws.com/markus-spiske-784097-unsplash.jpg`,
      `https://getsy-app.s3-us-west-2.amazonaws.com/alarm-clock-analog-analogue-1065712.jpg`
    ]
  }

  componentDidMount(){
    if (this.props.indextype == 'user'){
      this.props.clearProducts();
      this.props.fetch(this.props.match.params.user_id);
    } else {
      this.props.fetch();
    }
  }

  renderProducts(){
    const products = this.props.products.map(product => {
      this.productImages.forEach(img => {
        return (
          <ProductIndexItem key={product._id} product={product} img={img} />
        )
      })
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