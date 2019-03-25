import React, {Component } from 'react';
import phoneData from '../phoneData';
import findMarca from '../commons/findPhone';
export default class RenderList extends Component{
    constructor(props) {
        super();
        this.path = props.path.pathname
        this.pathArray = this.definePath()
        this.findPath()

    }
    
    definePath = (pathString) => {
        let pathArray = this.path.split('/');
        pathArray = pathArray.filter(element => element != '')
        return pathArray
    }

    findPath() {
        if(this.pathArray[1]) {
            return (
                findMarca(this.pathArray[1]).modelos.map(modelo => {
                    return(
                        <div >
                            <p>Modelo: {modelo.nome}</p>
                            <p>Preço: {modelo.preço}</p>
                            {
                                modelo.images.map((imagem, indexImage) => <img  style={{width: '100px', height: '100px'}} src={imagem} alt=""/>)
                            }
                            <p>Preço: {modelo.descricao}</p>
                        </div>
                    )
                })
                )
            }else  {
                return(phoneData.map((element, indexMarca) =>  {
    
                return(
                    <React.Fragment key={indexMarca}>
                        {
                            element.modelos.map((modelo, indexModelo) => {
                                console.log(modelo)
                                return(
                                    <div key={indexModelo}>
                                        <div className="wrapperImages">
                                            {
                                                modelo.images.map((imagem, indexImage) => <img key={indexImage} className={indexImage == 0 ? 'defaultImage' : 'segundaryImage'} src={imagem} alt=""/>)
                                            }
                                        </div>
                                        <p>{modelo.nome}</p>
                                        <p>{modelo.preço}</p>
                                    </div>
                                )
                            })
                        }
                    </React.Fragment>
                )
            }))
            
        }
    }


    
}


