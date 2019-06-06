import {connect} from 'react-redux';
import {fetchProducts} from '../../actions/product_actions'
import ProductIndex from './product_index'

const mapStateToProps = (state) => {
    return {
        products: Object.values(state.products)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex)