import React, { Component } from 'react';

export default class BtnComprar extends Component {
    constructor(props) {
        super(props);

    }
    
    render() {
        return (
            <button className="btnComprar" id={this.props.id} onClick={()=>{this.props.addCartContent(this.props.id)}}>
                Comprar
            </button>
        )   
        
    }
}