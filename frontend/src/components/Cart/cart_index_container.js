import { connect } from 'react-redux';

import CartIndex from './cart_index'
import {fetchCart, updateCart} from '../../actions/shopping_cart_actions'

const mapStateToProps = state => {
    return {
        cart: {},
        currentUser: state.session.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCart: (user_id) => dispatch(fetchCart(user_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIndex);