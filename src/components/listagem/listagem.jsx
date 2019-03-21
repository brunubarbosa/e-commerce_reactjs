import React, { Component } from 'react';
import {BrowserRouter, Route, Router} from 'react-router-dom';
import Aside from './aside/aside';
import ListagemMain from './main/main';

export default class Listagem extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
  render() {
    return (
      <div id="listagem">
        <Aside />
        <ListagemMain />
      </div>
    )
  }
}