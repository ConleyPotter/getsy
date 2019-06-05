import {connect} from 'react-redux';
import {fetchUserProducts} from '../../actions/product_actions'
import ProductIndex from './product_index'

const mapStateToProps = (state) => {
    return {
        products: Object.values(state.products),
        indextype: 'user'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetch: (user_id) => dispatch(fetchUserProducts(user_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex)