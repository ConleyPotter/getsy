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

        return (
          <div>
            <div className="product-detail-container">
              <img src={leicaImg} className="product-show-img"/>
              <div className="product-details">
                <div className="product-detail-name">{this.props.product.name}</div>
                <div className="product-detail-price">${this.props.product.price}</div>
                <button className="add-to-basket-button">Add to basket</button>
                <div className="product-detail-description">{this.props.product.description}</div>
              </div>
            </div>
          </div>
        )
    }
}

export default ProductShow;