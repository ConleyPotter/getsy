import React from 'react'
import './product_show.css';
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
        this.handleClick = this.handleClick.bind(this);
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
            this.props.openModal('deleteSuccess')
            // setTimeout(() => this.props.closeModal, 4000)
            // setTimeout(() => this.props.history.push('/products'), 5000)
          } else {
            this.props.openModal('deleteError')
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

    handleClick() {
      this.props.postCartItem(
        this.props.product._id,
        this.props.currentUser.id
      ).then(this.props.history.push(`/cart/${this.props.currentUser.id}`))
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
      let img = product.image_url
        ? product.image_url
        : "https://getsy-app.s3-us-west-2.amazonaws.com/markus-spiske-626757-unsplash.jpg";

        return (
          <div>
            <div className="product-detail-container">
              <img alt="" src={img} className="product-show-img"/>
              <div className="product-details">
                <div className="product-detail-name">{this.props.product.name}</div>
                <div className="product-detail-price">${this.props.product.price}</div>
                <button 
                  className="add-to-basket-button"
                  onClick={this.handleClick}
                >Add to basket</button>
                <div className="product-detail-description">{this.props.product.description}</div>
                <div className="buttons-container">
                  {deleteButton}
                  {editButton}
                </div>
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