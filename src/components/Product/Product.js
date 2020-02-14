import React from 'react'


function Product(props) {

    return (
        <div>
            <p className='product-box'>
                <div className='img-container'>
                    <img className='product-img' />
                    {props.inventory.img}
                </div>
                <div className='name-price-container'>
                    {props.inventory.name}
                    {props.inventory.price}
                    <div className="delete-container" >

                        <button onClick={() => props.deleteProduct(props.inventory.id)}>delete</button>
                    </div>

                </div>
            </p>
        </div>
    )

}

export default Product