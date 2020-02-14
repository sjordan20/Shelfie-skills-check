import React from 'react'


function Product(props) {

    return (
        <div>
            <p>
                {props.inventory.name}
                {props.inventory.price}
                {props.inventory.img}
            </p>
        </div>
    )

}

export default Product