import React from 'react'
import './product_form.css'
class ProductForm extends React.Component {

    constructor(props){
        super(props)
        this.state = this.props.product;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    onChange(field){
        return (e) => {
            this.setState({ [field]: e.target.value});
        }
    }
    
    handleSubmit(e){
        e.preventDefault();
        this.props.action(this.state)
        .then(product => {
            if (product.product){

                this.props.history.push(`/products/${product.product._id}`);
            }
        })
    }

    renderErrors() {
		return (
			<ul>
				{Object.keys(this.props.errors).map((error, i) => (
					<li key={`error-${i}`}>{this.props.errors[error]}</li>
				))}
			</ul>
		);
	}

    render(){
        
        return (
            <div>
                <div className="form-container">
                    {this.renderErrors()}
                    <form className="create-or-destroy" onSubmit={this.handleSubmit}> 
                        <label>
                            name
                        </label>
                        <input type="text" value={this.state.name} onChange={this.onChange("name")} placeholder="name"/>
                        <label>
                            price
                        </label>
                        <input type="number" value={this.state.price} onChange={this.onChange("price")} placeholder="price"/>
                        <label>
                            description
                        </label>
                        <textarea value={this.state.description} onChange={this.onChange("description")}></textarea>
                        <label>
                            category
                        </label>
                        <input type="text" value={this.state.category} onChange={this.onChange("category")} placeholder="cat" />
                        <input type="submit" value="Product up" />
                    </form>
                </div>
            </div>
        )
    }
}

export default ProductForm