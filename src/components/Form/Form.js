import React, { Component } from 'react';
import axios from 'axios'

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            price: 0,
            img: '',
            userInput: ''
        }

        this.postProducts = this.postProducts.bind(this)

    }

    postProducts() {
        const { name, price, img } = this.state

        axios.post(`/api/products`, { name, price, img })
            .then(() => this.props.getProducts())
            .catch(err => console.log(err))
        this.resetInput()

    }

    // editProducts(id, obj) {
    //     // const { name, price, img } = this.state
    //     axios.put(`/api/products/${id}`, obj)
    //         .then(res => {
    //             this.setState({
    //                 inventory: res.data
    //             })
    //         }
    //         )
    // }




    handleName = (event) => {
        this.setState({ name: event.target.value })
    }

    handlePrice = (event) => {
        this.setState({ price: event.target.value })
    }

    handleImg = (event) => {
        this.setState({ img: event.target.value })
    }

    cancelPost = () => {
        this.setState({
            name: '',
            price: 0,
            img: ''
        })

    }

    resetInput = () => {
        this.setState({
            name: '',
            price: 0,
            img: ''
        })
    }



    render() {
        console.log(this.state)
        return (
            <div className='input-box'>
                <img className='img' />
                <div className='inputs'>
                    <input className="input-field" placeholder="Name" value={this.state.name} onChange={this.handleName} />

                    <input className="input-field" placeholder="Price" type="number" value={this.state.price} onChange={this.handlePrice} />

                    <input className="input-field" placeholder="Image" value={this.state.img} onChange={this.handleImg} />
                </div>
                <div className='button-container'>

                    <button className="button" onClick={this.postProducts} >Add</button>
                    <button className="button" onClick={this.cancelPost} > Cancel</button>
                </div>
            </div >
        );

    }
}


export default Form;