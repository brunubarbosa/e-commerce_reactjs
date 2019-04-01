import React, { Component } from 'react';
import Header from './components/header/header';
import Cart from './components/cart/cart';
import { BrowserRouter, Route, Link, Router } from 'react-router-dom';
import Listagem from './components/listagem/listagem';
import phoneData from './phoneData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cartContent: []
    }
  }

  addCartContent = (id) => {
    this.setState({cartContent: [...this.state.cartContent, id]})
  }

  render() {
    return (
      <BrowserRouter>
        <Header cartContent={this.state.cartContent} addCartContent={this.addCartContent}/>
        <Route exact path="/cart" component={Cart} />
        <Route path="/listagem" render={(routeProps) => (
          <Listagem {...routeProps} addCartContent={this.addCartContent} />
        )

        }/>
      </BrowserRouter>
    );
  }
}

export default App;
