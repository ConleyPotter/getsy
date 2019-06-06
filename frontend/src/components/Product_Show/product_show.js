import React from 'react'


class ProductShow extends React.Component{

    componentDidMount(){

      this.props.fetchProduct(this.props.match.params.product_id);
    }

    render(){

        return (
            <div>

                {this.props.product.name}
            </div>
        )
    }
}

export default ProductShow;