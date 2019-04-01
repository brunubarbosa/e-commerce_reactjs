import React, { Component } from 'react';
import CartContent from '../header/cart-content/cartContent';
import DropDownLogin from '../header/dropDownLogin/DropDownLogin';
import loginImage from '../../images/icon_login.png';
import cartImage from '../../images/icon_cart.png';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className="wrapperHeadder">
      <div>
      <input type="text" name="" id=""/>
      </div>
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
        <div className="wrapperRigthHeader">
        <div className="wrapperCart">
            <a href="/cart">
          <img src={cartImage} className="icon35" alt="teste"/>
            </a>
            <div>
              <CartContent cartContent={this.props.cartContent}/>
            </div>
        </div>
        <div className="wrapperIconLogin">
          <img src={loginImage} className="icon35" alt="teste"/>
          
            <DropDownLogin />
        </div>
        </div>
      </header>
    )
  }
}