import {connect} from 'react-redux'
import {createProduct} from '../../actions/product_actions'
import ProductForm from './product_form'
const msp = state => {
    return {
        product: {
            name: "",
            price: 0,
            description: "",
            owner_id: "",
            category: ""
        },
        currentUser: state.session.user,
        errors: state.errors.product,
        formType: "new"
    }
}

const mdp = dispatch => {
    return {
        action: (data) => dispatch(createProduct(data))
    }
}

export default connect(msp,mdp)(ProductForm)