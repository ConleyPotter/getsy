import React from 'react'
import './product_show.css';
import leicaImg from './leica.jpg';
import { Redirect } from 'react-router'
import EditProductContainer from '../Product_Form/product_edit_container';

class ProductShow extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            notFound: false,
            errorMessage: "",
            showButtons: false,
            showDeletionError: false,
            showDeletionSuccess: false,
            createClicked: "hidden"
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.renderProductForm = this.renderProductForm.bind(this);
        this.renderDeleteSuccess = this.renderDeleteSuccess.bind(this);
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
      e.preventDefault()
      this.props.deleteProduct(this.props.product._id)
        .then((res) => {
          if (res.type === "DELETE_PRODUCT") {
            this.renderDeleteSuccess()
            setTimeout(() => this.props.history.push('/products'), 5000)
          } else {
            this.setState({ showDeletionError: true })
          }
        })
    }

    renderProductForm() {
      if (this.state.createClicked === "product-form") {
        this.setState({
          createClicked: "hidden"
        })
      } else {
        this.setState({
          createClicked: "product-form"
        })
      }
    }

    renderDeleteSuccess() {
      this.setState({ showDeletionSuccess: true })
    }

    render(){
      if (!this.props.product) return null;
      const product = this.props.product
      const user = this.props.user
      if (this.props.user._id === this.props.currentUser.id && !this.state.showButtons) {
        this.setState({ showButtons: true })
      }

      let deleteButton;
      if (this.state.showButtons === true) {
        deleteButton = <button 
          className="delete-product-button"
          onClick={this.handleDelete}>
          Delete this item
        </button>
      } 

      let editButton;
      if (this.state.showButtons === true) {
        editButton = <button
          className="edit-product-button"
          onClick={this.renderProductForm}>
          Edit this item
        </button>
      }

      let deletionError;
      if (this.state.showDeletionError === true) {
        deletionError = 
        <div>
          <label className="prod-deletion-error">
            There was a problem with your request. Please try again.
          </label>
          <div 
            className="prod-deletion-error-ok"
            onClick={this.state.showDeletionError === false}>
            OK
          </div>
        </div>
      }

      let deletionSuccess;
      if (this.state.showDeletionSuccess === true) {
        deletionSuccess = <label className="prod-deletion-error">
          This product was deleted succesfully.
        </label>
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
                <div className="buttons-container">
                  {deleteButton}
                  {editButton}
                </div>
                {deletionError}
                {deletionSuccess}
                <div className="product-detail-description">{product.description}</div>
              </div>
            </div>
            <div 
              id="products-and-reviews"
              className={this.state.createClicked}>
              <EditProductContainer product={this.props.product}/>
            </div>
          </div>
        )
    }
}

export default ProductShow;