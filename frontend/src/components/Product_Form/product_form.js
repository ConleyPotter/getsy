import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import './product_form.css'
class ProductForm extends React.Component {

    constructor(props){
        super(props)
        this.state = this.props.product;
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.renderErrors = this.renderErrors.bind(this);
    }

    onChange(field){
        return (e) => {
            this.setState({ [field]: e.target.value});
        }
    }
    
    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        
        Object.keys(this.state).forEach(key => {
          if (key === "file") {
            formData.append(key, this.state[key])
          } else {
            formData.append(key, this.state[key])
           }
        })
        
        if (this.props.formType === 'edit'){
          this.props.action(formData, this.state._id)
          .then(res => {
            this.props.fetchProduct(this.state._id)
          })
        } else {
          this.props.action(formData)
            .then((res) => {
               if (res.type === "RECEIVE_PRODUCT" && this.props.formType === 'new') {
                this.props.history.push(`/products/${res.product._id}`);   
              }
            })

        }
         
    }

  //   renderErrors() {
	// 	return (
	// 		<ul>
	// 			{Object.keys(this.props.errors).map((error, i) => (
	// 				<li key={`error-${i}`}>{this.props.errors[error]}</li>
  //       ))}
	// 		</ul>
	// 	);
	// }

    render(){
        let fileInput = null;
        if (this.props.formType !== 'edit'){
          fileInput = (
            <>
            <br></br>
            <input type="file" name="file" onChange={e => {this.setState( { file: e.target.files[0]} )}}/> 
            </>
          )
        }
        return (
          <div className="create-product-outer-container">
            <div className="form-container">
              {/* {this.renderErrors()} */}
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
                  <p>Tell your buyers what to expect</p>
                </div>
                <div className="create-a-listing-header">
                  <h3>Category</h3>
                  <p>
                    Choose from one of these categories so that users
                    can find your product
                  </p>
                </div>
                <div className="create-a-listing-header">
                  <h1>Photo</h1>
                  <p>
                    Add a photo to show off your product
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
                  className="form-input"
                />
                <label>price</label>
                <input
                  type="number"
                  value={this.state.price}
                  onChange={this.onChange("price")}
                  className="form-input"
                />
                <label>description</label>
                <textarea
                  value={this.state.description}
                  onChange={this.onChange("description")}
                  className="form-input-text-area"
                />
                <label>category</label>
                <select 
                    name="category" 
                    value={this.state.category}
                    onChange={this.onChange("category")}
                >
                  <option value="jewlery_and_accessories">
                    Jewelry & Accessories
                  </option>
                  <option value="clothing_and_shoes">
                    Clothing and Shoes
                  </option>
                  <option value="home_and_living">
                    Home and Living
                  </option>
                  <option value="wedding_and_party">
                    Wedding and Party
                  </option>
                  <option value="toys_and_entertainment">
                    Toys and Entertainment
                  </option>
                  <option value="art_and_collectibles">
                    Art and Collectibles
                  </option>
                  <option value="craft_supplies">
                    Craft Supplies
                  </option>
                  <option value="vintage">
                    Vintage
                  </option>
                  <option value="gifts">
                    Gifts
                  </option>
                </select>
                {fileInput}
                <input
                  id="product-submit"
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        );
    }
}

export default withRouter(ProductForm)