import React, { Component } from 'react'


class Product extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <div className='product-box'>
                    <div className='img-container'>
                        <img className='product-img' />
                        {this.props.inventory.img}
                    </div>

                    <div className="right-side">


                        <div className='name-price-container'>
                            {this.props.inventory.name}
                            {this.props.inventory.price}
                        </div>
                        <div className="delete-container" >

                            <button onClick={() => this.props.deleteProduct(this.props.inventory.product_id)}>delete</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Product