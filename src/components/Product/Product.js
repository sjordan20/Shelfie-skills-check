import React from 'react'


function Product(props) {

    return (
        <div>
            <div className='product-box'>
                <div className='img-container'>
                    <img className='product-img' />
                    {props.inventory.img}
                </div>

                <div className="right-side">


                    <div className='name-price-container'>
                        {props.inventory.name}
                        {props.inventory.price}
                    </div>
                    <div className="delete-container" >

                        <button onClick={() => props.deleteProduct(props.inventory.id)}>delete</button>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default Product