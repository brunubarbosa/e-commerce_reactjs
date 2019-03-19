import React, { Component } from 'react';
import phoneData from '../../phoneData';

export default class Content extends Component {
  render() {
    return (
      <div className="content">
        {phoneData.motorola.modelo.e5.descricao}
      </div>
    )
  }
}
