import React, { Component } from 'react';
import phoneData from '../../../phoneData';
import ImageGallery from 'react-image-gallery';
import findMarca from '../../../commons/findPhone';
import ListagemController from '../../../controller/ListagemController';

export default class Listagem extends Component {
    constructor(props) {
        super(props);
        // this.pathName = this.definePath()
        this.controller = new ListagemController(props);
        
    }

    //  definePath = () => {
    //     let pathString = this.props.path.pathname;
    //     let pathArray = pathString.split('/');
    //     pathArray = pathArray.filter(element => element != '')
    //     return pathArray
    // }

    // renderList = () => {
    //     if(this.pathName[1]) {
    //         return (
    //             findMarca(this.pathName[1]).modelos.map(modelo => {
    //                 return(
    //                     <div >
    //                         <p>Modelo: {modelo.nome}</p>
    //                         <p>Preço: {modelo.preço}</p>
    //                         {
    //                             modelo.images.map((imagem, indexImage) => <img  style={{width: '100px', height: '100px'}} src={imagem} alt=""/>)
    //                         }
    //                         <p>Preço: {modelo.descricao}</p>
    //                     </div>
    //                 )
    //             })
    //             )
    //         } else  {
    //             return(phoneData.map((element, indexMarca) =>  {

    //             return(
    //                 <div class="gggg" key={indexMarca}>
    //                     {
    //                         element.modelos.map((modelo, indexModelo) => {
    //                             console.log(modelo)
    //                             return(
    //                                 <div key={indexModelo}>
    //                                     <p>Modelo: {modelo.preço}</p>
    //                                     <p>Modelo: {modelo.nome}</p>
    //                                     <p>Preço: {modelo.preço}</p>
    //                                     {
    //                                         modelo.images.map((imagem, indexImage) => <img key={indexImage} style={{width: '100px', height: '100px'}} src={imagem} alt=""/>)
    //                                     }
    //                                     <p>Preço: {modelo.descricao}</p>
    //                                 </div>
    //                             )
    //                         })
    //                     }
    //                 </div>
    //             )
    //         }))
            
    //     }
    // }

    render() {
        return (
            <main>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {this.controller.findPath()}
                    
                </div>
                
            </main>
        );
    }
}