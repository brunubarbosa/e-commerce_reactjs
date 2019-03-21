import React from 'react';
import phoneData from '../../../phoneData';

export const ListagemMain = () => {
    return (
        <div>
            <h1>{phoneData.samsung.modelo.j6.nome}</h1>
            <div style={{display: 'flex'}}>
                <img src={phoneData.samsung.modelo.j6.images[0]} alt=""/>
                <div>
                    <p>{phoneData.samsung.modelo.j6.preço}</p>
                    <p>{phoneData.samsung.modelo.j6.descricao}</p>
                </div>
            </div>

        </div>
    );
}

export default ListagemMain;