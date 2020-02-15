import React, { Component } from 'react'
import Product from '../Product/Product'
import '../Product/product.css'
import axios from 'axios'



class Dashboard extends Component {
    constructor(props) {
        super(props)

    }

    deleteProduct = (id) => {
        // console.log(id)
        axios.delete(`/api/products/${id}`).then(res => {
            this.props.getProducts()
        })
    }

    //  const inventoryList = props.inventory.map(element => {
    //         return (
    //             <Product
    //                 key={element.id}
    //                 inventory={element}
    //                 deleteProduct={deleteProduct}
    //             />
    //         )
    // })



    render() {
        return (
            <div className='dashboard'>
                {this.props.inventory.map((element) => {
                    return (
                        <Product
                            key={element.id}
                            inventory={element}
                            deleteProduct={this.deleteProduct}
                        />
                    )
                })}


            </div >
        )
    }
}


export default Dashboard;