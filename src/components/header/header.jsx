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
                    <a href="/listagem/motorola"><li>Motorola</li></a>
                    <a href="/listagem/apple"><li>apple</li></a>
                    <a href="/listagem/asus"><li>asus</li></a>
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