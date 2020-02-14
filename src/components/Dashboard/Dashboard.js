import React from 'react'
import Product from '../Product/Product'
import '../Product/product.css'
import axios from 'axios'



function Dashboard(props) {



    const deleteProduct = (id) => {
        axios.delete(`/api/products/${id}`)
            .then(res => {
                ({
                    inventory: res.data
                })
            })
    }

    const inventoryList = props.inventory.map(element => {
        return (
            <Product
                key={element.id}
                inventory={element}
                deleteProduct={deleteProduct}


            />
        )
    })


    return (
        < div className='dashboard'>

            {inventoryList}
        </div >
    );

}






export default Dashboard;