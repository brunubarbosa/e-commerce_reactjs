import React, { Component } from 'react';
import Header from './components/header/header';
import Cart from './components/cart/cart';
import { BrowserRouter, Route, Link, Router } from 'react-router-dom';
import Listagem from './components/listagem/listagem';

class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <Header />
        <Route exact path="/cart" component={Cart} />
        <Route path="/listagem" component={Listagem} />
      </BrowserRouter>
    );
  }
}

export default App;
