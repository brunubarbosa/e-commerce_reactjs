import React, { Component } from 'react';
import IconAvatar from '../../../images/icon_user.png';

export default class DropDownLogin extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div class="wrapperDropDrownLogin">
                <form action="">
                    <div className="dropDrownLogin">
                    <div className="wrapperImageAvatar">
                    <div className="efectLeft"></div>
                    <div className="efectRight"></div>
                        <div className="imageAvatar">
                            <img className="icon35" src={IconAvatar} alt=""/>
                        </div>
                    </div>
                        <p className="title">Login</p>
                        <div>
                            <label htmlFor="">Email</label>
                            <input type="text"/>
                        </div>
                        <div>
                            <label htmlFor="">Senha</label>
                            <input type="text"/>
                        </div>
                        <div>
                            <button>Login</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}