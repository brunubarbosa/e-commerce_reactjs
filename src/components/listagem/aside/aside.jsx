import React from 'react';

export const Aside = () => {
    return (
        <aside>
        <span className="aside-title">Filtros</span>
        <div>
            <p>Marcas</p>
            <div>
                <input type="checkbox" name="" id="filtro_marca-samsung"/>
                <label htmlFor="filtro_marca-samsung">Samsung</label>
            </div>
            <div>
                <input type="checkbox" name="" id="filtro_marca-motorola"/>
                <label htmlFor="filtro_marca-motorola">motorola</label>
            </div>
        </div>
        <div>
            <p>Preço</p>
            <div>
                <input type="radio" name="filtro_preco" id="filtro_preco-0-1000"/>
                <label htmlFor="filtro_preco-0-1000">R$0 - R$1.000,00</label>
            </div>
            <div>
                <input type="radio" name="filtro_preco" id="filtro_preco-100-2000"/>
                <label htmlFor="filtro_preco-100-2000">R$1.000,00 - R$2.000,00</label>
            </div>
            <div>
                <input type="radio" name="filtro_preco" id="filtro_preco-2000-undefined"/>
                <label htmlFor="filtro_preco-2000-undefined">Maior de R$2.000,00</label>
            </div>
        </div>
    </aside>
    );
}

export default Aside;