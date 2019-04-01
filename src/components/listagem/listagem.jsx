import React, { Component } from 'react';
import {BrowserRouter, Route, Router} from 'react-router-dom';
import Aside from './aside/aside';
import ListagemMain from './main/ListagemMain';

export default class Listagem extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.addCartContent)
        this.props = props
    }
  render() {
    return (
      <div id="listagem">
        <Aside />
        <ListagemMain path={this.props.location} addCartContent={this.props.addCartContent}/>
      </div>
    )
  }
}