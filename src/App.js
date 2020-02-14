import React, { Component } from 'react';
import axios from 'axios'

import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'


import './App.css';

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


  render() {
    console.log(this.state.inventory)
    return (
      <div className="App">
        App
      <Header />
        <Dashboard inventory={this.state.inventory} />
        <Form getProducts={this.getProducts} inventory={this.state.inventory} />
      </div>
    );
  }
}

export default App;
