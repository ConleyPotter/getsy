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
          <div className="create-product-outer-container">
            <div className="form-container">
              {this.renderErrors()}
              <div className="side-bar-info-container">
                <div className="create-a-listing-header">
                  <h1>Listing Details</h1>
                  <p>
                    Tell the world about your item and why they'll love
                    it.
                  </p>
                </div>
                <div className="create-a-listing-header">
                  <h3>Title</h3>
                  <p>
                    Include keywords that buyers would use to search for
                    your item
                  </p>
                </div>
                <div className="create-a-listing-header">
                  <h3>Price</h3>
                  <p>How much does it cost to buy this product?</p>
                </div>
                <div className="create-a-listing-header">
                  <h3>Description</h3>
                  <p>
                    Tell your buyers what to expect
                  </p>
                </div>
                <div className="create-a-listing-header">
                  <h3>Category</h3>
                  <p>
                    Choose from one of these categories so that users
                    can find your product
                  </p>
                </div>
              </div>
              <form
                className="create-or-destroy"
                onSubmit={this.handleSubmit}
              >
                <label id="top-label">name</label>
                <input
                  type="text"
                  value={this.state.name}
                  onChange={this.onChange("name")}
                />
                <label>price</label>
                <input
                  type="number"
                  value={this.state.price}
                  onChange={this.onChange("price")}
                />
                <label>description</label>
                <textarea
                  value={this.state.description}
                  onChange={this.onChange("description")}
                />
                <label>category</label>
                <input
                  type="text"
                  value={this.state.category}
                  onChange={this.onChange("category")}
                />
                <input type="submit" value="Product up" />
              </form>
            </div>
          </div>
        );
    }
}

export default ProductForm