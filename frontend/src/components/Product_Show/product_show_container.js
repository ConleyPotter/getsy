import {connect} from 'react-redux';
import {fetchProduct, clearErrors} from '../../actions/product_actions'
import {addProductToCart} from '../../actions/shopping_cart_actions'
import ProductShow from './product_show'

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        product: (state.products[ownProps.match.params.product_id] || {}),
        currentUser: state.session.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProduct: (product_id) => dispatch(fetchProduct(product_id)),
        postCartItem: (product_id, user_id) => dispatch(addProductToCart({product_id: product_id, owner_id: user_id})),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow)