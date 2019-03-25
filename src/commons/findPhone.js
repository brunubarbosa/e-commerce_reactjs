import phoneData from '../phoneData';

export const findMarca = (marca) => {
    return phoneData.find(element => {
        return element.marca == marca
    })
  }

  export default findMarca;