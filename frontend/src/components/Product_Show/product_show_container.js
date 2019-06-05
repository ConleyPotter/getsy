import {connect} from 'react-redux';
import {fetchProduct, clearErrors} from '../../actions/product_actions'
import ProductShow from './product_show'

const mapStateToProps = (state, ownProps) => {
    return {
        product: state.products[ownProps.match.params.product_id]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProduct: (product_id) => dispatch(fetchProduct(product_id)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow)