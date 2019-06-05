import React from 'react'
import {Link, Redirect} from 'react-router-dom'
class ProductShow extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            notFound: false,
            errorMessage: ""
        }
    }

    componentDidMount(){
        this.props.fetchProduct(this.props.match.params.product_id)
        .then(product => {
            if(product.errors) {
                
                this.setState({notFound: true, errorMessage: product.errors.message})
            }
        })
        
    }
    componentDidUpdate(prevProps){
        if (this.props.match.params.product_id !== prevProps.match.params.product_id){
            this.props.fetchProduct(this.props.match.params.product_id)
            .then(product => {
                if(product.errors) {
                    
                    this.setState({notFound: true, errorMessage: product.errors.message})
                }
            })
        }
    }

    componentWillUnmount(){
        this.props.clearErrors();
    }

    render(){
        if(this.state.notFound){
            setTimeout(()=> {
                this.props.history.push("/products");
            }, 3000)
            return <h2 className="errors-not-found">{this.state.errorMessage} Redirecting...</h2>
        }
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