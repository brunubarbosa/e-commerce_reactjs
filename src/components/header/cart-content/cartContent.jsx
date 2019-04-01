import React, { Component } from 'react';
import phoneData from '../../../phoneData';

export default class CartContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartPhones: []
        }
    }

    findPhoneCart = () => {
        let phones = this.props.cartContent.map(element => {
            return (
                phoneData.map(phones => {
                    return(
                        phones.modelos.filter(modelo => {
                            return modelo.id == element && modelo
                        }))
                })
            )
        })
        phones = phones.flatMap(x => x.flatMap(i=>i))
        this.setState({cartPhones: phones})
        
    }

    componentDidUpdate(props) {
        if(this.props.cartContent !== props.cartContent) {
            this.findPhoneCart()
        }
    }

    render() {
        console.log(this.state.cartPhones)
        return(
            <div className="wrapperCartPreview">
                <div className="cartContent">
                    {this.state.cartPhones.map(element=> {
                        return(
                        <div style={{display: 'flex'}}>
                            <img className="previewCartImage" src={element.images[0]}></img>
                            <span>{element.nome}</span>
                        </div>
                        )
                    })}
                </div> 
            </div>   
        )

    }
}