import React, {Component } from 'react';
import phoneData from '../phoneData';
import findMarca from '../commons/findPhone';
import BtnComprar from '../components/btnComprar/btnComprar';
export default class RenderList extends Component{
    constructor(props) {
        super(props);
        console.log(props)
        this.path = props.path.pathname
        this.pathArray = this.definePath()
        this.defineBlock()

    }
    
    definePath = () => {
        let pathArray = this.path.split('/');
        pathArray = pathArray.filter(element => element != '')
        return pathArray
    }

    defineBlock() {
        if(this.pathArray[1]) {

            return (

                findMarca(this.pathArray[1]).modelos.map((modelo, indexModelo) => {
                    return(
                        <div key={indexModelo} className="wrapperCard">
                            <div className="wrapperImages">
                                {
                                    modelo.images.map((imagem, indexImage) => <img key={indexImage} className={indexImage == 0 ? 'defaultImage' : 'segundaryImage'} src={imagem} alt=""/>)
                                }
                            </div>
                                <p>Modelo: {modelo.nome}</p>
                                <p>Preço: {modelo.preço}</p>
                            <BtnComprar id={modelo.id} addCartContent={this.props.addCartContent}/>
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


