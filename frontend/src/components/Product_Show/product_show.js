import React from 'react'
import {Link, Redirect} from 'react-router-dom'

class ProductShow extends React.Component{

    constructor(props){
        super(props);
        
    }

    componentDidMount(){
        this.props.fetchProduct(this.props.match.params.product_id)
        
        
    }
    componentDidUpdate(prevProps){
        if (this.props.match.params.product_id !== prevProps.match.params.product_id){
            this.props.fetchProduct(this.props.match.params.product_id)
        }
    }

    render(){
        
        if (!this.props.product) return null
        
        const product = this.props.product.product;
        const user = this.props.product.user;
        if (!product) return null
        return (
            <div>
                <h2>{product.name} by <Link to="">{user.fName}</Link></h2>
                <div>
                    image
                </div>
                <div>
                    description: {product.description}
                    <p>${product.price} </p>
                </div>
                <button>Add To Cart</button>
            </div>
        )
    }
}

export default ProductShow;