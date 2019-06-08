import React from 'react'
import './product_show.css';
import leicaImg from './leica.jpg';
import { Redirect } from 'react-router'

class ProductShow extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            notFound: false,
            errorMessage: "",
            showDeleteButton: false
        }
        this.handleDelete = this.handleDelete.bind(this)
    }
    componentDidMount(){
      this.props.fetchProduct(this.props.match.params.product_id);
    }
    
    componentDidUpdate(prevProps){
      if(prevProps.match.params.product_id !== this.props.match.params.product_id){
        this.props.fetchProduct(this.props.match.params.product_id);
      }
    }

    handleDelete(e) {
      debugger
      this.props.deleteProduct(this.props.product._id)
      this.props.history.push('/products')
    }

    render(){
      if (!this.props.product) return null;
      const product = this.props.product
      const user = this.props.user
      if (this.props.user._id === this.props.currentUser.id) {
        this.state.showDeleteButton = true
      }

      let deleteButton;
      if (this.state.showDeleteButton === true) {
        deleteButton = <button 
          className="delete-product-button"
          onClick={this.handleDelete}>
          Delete this item
        </button>
      } 
    
        return (
          <div>
            <div className="product-detail-container">
              <img src={leicaImg} className="product-show-img"/>
              <div className="product-details">
                <span>By: {user.fName}</span>
                <div className="product-detail-name">{product.name}</div>
                <div className="product-detail-price">${product.price}</div>
                <button className="add-to-basket-button">Add to basket</button>
                {deleteButton}
                <div className="product-detail-description">{product.description}</div>
              </div>
            </div>
          </div>
        )
    }
}

export default ProductShow;