import {connect} from 'react-redux'
import {createProduct, fetchProduct} from '../../actions/product_actions'
import ProductForm from './product_form'
const msp = state => {
    return {
        product: {
            name: "",
            price: 0,
            description: "",
            owner_id: "",
            category: "jewelry_and_accessories"
        },
        currentUser: state.session.user,
        errors: state.errors.product,
        formType: "new"
    }
}

const mdp = dispatch => {
    return {
        action: (data) => dispatch(createProduct(data)),
        fetchProduct: product_id => dispatch(fetchProduct(product_id))
    }
}

export default connect(msp,mdp)(ProductForm)