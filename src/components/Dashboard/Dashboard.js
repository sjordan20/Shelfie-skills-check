import React from 'react';

import Product from '../Product/Product'

function Dashboard(props) {


    const inventoryList = props.inventory.map(element => {
        return (
            <Product
                key={element.id}
                inventory={element}

            />
        )
    })


    return (
        < div >
            Dashboard
        {inventoryList}
        </div >
    );

}






export default Dashboard;