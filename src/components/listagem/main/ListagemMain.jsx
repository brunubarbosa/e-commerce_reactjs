import React, { Component } from 'react';
import phoneData from '../../../phoneData';
import ImageGallery from 'react-image-gallery';
import findMarca from '../../../commons/findPhone';
import ListagemController from '../../../controller/ListagemController';


export default class Listagem extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        // this.pathName = this.definePath()
        this.controller = new ListagemController(props);
    }

    render() {
        return (
            <main>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    {this.controller.defineBlock()}
                </div>
            </main>
        );
    }
}