import {connect} from 'react-redux';
import {fetchProduct, clearErrors, deleteProduct } from '../../actions/product_actions'
import { openModal, closeModal } from '../../actions/modal_actions';
import ProductShow from './product_show'

const mapStateToProps = (state, ownProps) => {
    if (!state.products[ownProps.match.params.product_id]){
        return {}
    }
    return {
        product: state.products[ownProps.match.params.product_id].product,
        user: state.products[ownProps.match.params.product_id].user,
        currentUser: state.session.user,
        errors: state.errors.product
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProduct: (product_id) => dispatch(fetchProduct(product_id)),
        clearErrors: () => dispatch(clearErrors()),
        deleteProduct: product_id => dispatch(deleteProduct(product_id)),
        openModal: formType => dispatch(openModal(formType)),
        closeModa: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow)