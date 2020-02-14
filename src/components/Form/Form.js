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

    }






    render() {
        console.log(this.state)
        return (
            <div>
                <input placeholder="Name" onChange={(event) => {
                    this.setState({ 'name': event.target.value })
                }} />

                <input placeholder="Price" type="number" onChange={(event) => {
                    this.setState({ 'price': event.target.value })
                }} />

                <input placeholder="Image" onChange={(event) => {
                    this.setState({ 'imgUrl': event.target.value })
                }} />
                <button>Cancel</button>
                <button onClick={this.postProducts} >Add</button>
            </div>
        );

    }
}


export default Form;