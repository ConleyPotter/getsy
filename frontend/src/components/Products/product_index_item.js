import React from 'react'
import {Link} from 'react-router-dom'
import './product_index_item.css'
import soupsImg from './soups.jpg';
import avocadosImg from './avocados.jpg';
import cameraImg from './camera.jpg';
import glassesImg from './glasses.jpg';
import recordPlayerImg from './recordPlayer.jpg';
import leicaImg from './leica.jpg';
import teacupsImg from './teacups.jpg';


class ProductIndexItem extends React.Component {

    render(){
        return (
          <div className="product-link-container">
            <Link to={`/products/${this.props.product._id}`}
              className="link-container">
                {/* <div className="product-card"> */}
                  <img src={leicaImg} className="img"/>
                    {/* <div>
                    </div>
                    <span className="product-tool-tip">
                    </span> */}
                {/* </div> */}
              <div className="product-label-container">
                <div className="product-name">{this.props.product.name}</div>
                {/* <div className="product-description">{this.props.product.description}</div> */}
                <div className="product-price">${this.props.product.price}</div>      
              </div>
            </Link>

          </div>
        )
    }


}


export default ProductIndexItem