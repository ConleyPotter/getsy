import React from 'react'
import { connect } from 'react-redux';
import { editProduct, fetchProduct } from '../../actions/product_actions';
import ProductForm from './product_form';

class EditProductForm extends React.Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.product.id)
  }

  render() {
    return (
      <ProductForm 
        product={this.props.product}
        editProduct={this.props.editProduct}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  product: state.products[0] || {},
  formType: "edit",
  errors: state.errors.product
})

const mapDispatchToProps = dispatch => ({
  fetchProduct: product_id => dispatch(fetchProduct(product_id)),
  action: product => dispatch(editProduct(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm)