import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../src/index.scss';
import Cart from './components/cart/cart';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const route = (
    <Router>
        <Route path="/cart" component={Cart} />
    </Router>
)
ReactDOM.render(route, document.getElementById('root'));