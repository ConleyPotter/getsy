import { connect } from 'react-redux';

import CartIndex from './cart_index'
import { fetchCart,
    addProductToCart,
    deleteShoppingCart,
    deleteItem
} from '../../actions/shopping_cart_actions'

const mapStateToProps = state => {
    return {
        currentUser: state.session.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCart: (user_id) => dispatch(fetchCart(user_id)),
        addProduct: (data) => dispatch(addProductToCart(data)),
        deleteCart: (user_id) => dispatch(deleteShoppingCart(user_id)),
        deleteItem: (item_id) => dispatch(deleteItem(item_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIndex);