import React, { Component } from 'react';
import axios from 'axios'

import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'

import './App.css';
import './components/Header/header.css'
import './components/Form/form.css'
import './components/Dashboard/dashboard.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      inventory: []
    }
  }


  componentDidMount() {
    this.getProducts()
  }

  getProducts = () => {
    axios.get(`/api/products`).then(res =>
      this.setState({ inventory: res.data }))
  }

  // updateState = (inventory) => {
  //   this.setState({
  //     inventory: inventory
  //   })
  // }


  // deleteProduct = (id) => {
  //   axios.delete(`/api/products/${id}`)
  //     .then(res => {
  //       this.setState({
  //         inventory: res.data
  //       })
  //     })
  // }


  render() {
    console.log(this.state.inventory)
    return (
      <div className="App">

        <Header />
        <Form getProducts={this.getProducts} inventory={this.state.inventory} />
        <Dashboard
          inventory={this.state.inventory}
          getProducts={this.getProducts}
          deleteProduct={this.deleteProduct}
        />

      </div>
    );
  }
}

export default App;
