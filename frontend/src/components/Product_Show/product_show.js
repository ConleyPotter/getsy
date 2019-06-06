import React from 'react'
import './product_show.css';
import leicaImg from './leica.jpg';


class ProductShow extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            notFound: false,
            errorMessage: ""
        }
    }

    componentDidMount(){

      this.props.fetchProduct(this.props.match.params.product_id);
    }

    render(){
      if (!this.props.product.product) return null;
      const product = this.props.product.product
      const user = this.props.product.user
        return (
          <div>
            <div className="product-detail-container">
              <img src={leicaImg} className="product-show-img"/>
              <div className="product-details">
                <span>by: {user.fName}</span>
                <div className="product-detail-name">{product.name}</div>
                <div className="product-detail-price">${product.price}</div>
                <button className="add-to-basket-button">Add to basket</button>
                <div className="product-detail-description">{product.description}</div>
              </div>
            </div>
          </div>
        )
    }
}

export default ProductShow;