import React, { Component } from 'react';
import Header from '../header/header';
import Content from './content';
export default class Cart extends Component {
  render() {
    return (
      <div className="Main_Cart">
        <Header />
        <Content />
      </div>
    )
  }
}
