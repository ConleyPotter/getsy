import {connect} from 'react-redux';
import {fetchProduct, clearErrors} from '../../actions/product_actions'
import ProductShow from './product_show'

const mapStateToProps = (state, ownProps) => {
    if (!state.products[ownProps.match.params.product_id]){
        return {}
    }
    return {
        product: state.products[ownProps.match.params.product_id].product,
        user: state.products[ownProps.match.params.product_id].user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProduct: (product_id) => dispatch(fetchProduct(product_id)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow)