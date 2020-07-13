import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Somos from './components/somos/Somos';
import Hacemos from './components/hacemos/Hacemos';
import Ofrecemos from './components/ofrecemos/Ofrecemos';
import Contacto from './components/contacto/Contacto';
import Tutorial from './components/tutorial/Tutorial';
import Cotizacion from './components/cotizacion/Cotizacion';

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Route path='/' component={Navbar} />
        <Route exact path='/' component={Home} />
        <Route exact path='/somos' component={Somos} />
        <Route exact path='/hacemos' component={Hacemos} />
        <Route exact path='/ofrecemos' component={Ofrecemos} />
        <Route exact path='/contacto' component={Contacto} />
        <Route exact path='/tutorial' component={Tutorial} />
        <Route exact path='/cotizacion' component={Cotizacion} />
      </Router>
    );
  }
}

export default App;
