import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="wrapperHeadder">
            <ul>
                <a href="/lancamentos"><li>Lançamentos</li></a>
                <a href="/marcas"><li>Marcas</li></a>
            </ul>
        <div>
            <a href="/cart">CART</a>
        </div>
      </header>
    )
  }
}