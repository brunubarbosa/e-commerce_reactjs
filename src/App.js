import React, { Component } from 'react';
import Header from './components/header/header';
import Cart from './components/cart/cart';
import { BrowserRouter, Route, Link, Router } from 'react-router-dom';

class App extends Component {

  render() {

    return (
      <BrowserRouter>
      <Header />
          <Route path="/" component={Cart} />
          </BrowserRouter>
    );
  }
}

export default App;
