import {connect} from 'react-redux';
import {fetchProduct} from '../../actions/product_actions'
import ProductShow from './product_show'

const mapStateToProps = (state, ownProps) => {
    return {
        product: {}
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProduct: (product_id) => dispatch(fetchProduct(product_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow)