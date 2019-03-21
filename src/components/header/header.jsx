import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="wrapperHeadder">
            <ul>
                <a href="/listagem/lancamento"><li>Lançamentos</li></a>
                <div className="wrapperDropDown">
                <a href="/listagem"><li className="dropDownPai">Marcas</li></a>
                <div className="dropDown">
                  <ul className="dropDownList">
                    <a href="/listagem/samsung"><li>Samsung</li></a>
                    <a href="/listagem/Motorola"><li>Motorola</li></a>
                  </ul>
                </div>
                </div>
            </ul>
        <div>
            <a href="/cart">CART</a>
        </div>
      </header>
    )
  }
}