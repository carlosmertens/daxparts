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

import Crear from './components/crearUsuario/Crear';
import Modal from './components/modal/Modal';

// Importar json con los textos de ingles y castellano
import castellano from './textos/textEsp.json';
import ingles from './textos/textEng.json';

class App extends Component {
  // Objecto (State) inicial del idioma y el campo de busqueda
  state = {
    lang: 'es',
    parte: '',
  };

  // Evento de cambiar idioma
  cambiarEng = () => {
    this.setState({ lang: 'en' });
  };

  cambiarEsp = () => {
    this.setState({ lang: 'es' });
  };

  // Evento que captura el numero de busqueda
  buscarParte = (e) => {
    e.preventDefault();
    const numero = document.getElementById('buscar').value;
    this.setState({ parte: numero });
  };

  render() {
    // Logica para selecionar idioma de la pagina
    let idioma = castellano;
    if (this.state.lang !== 'es') {
      idioma = ingles;
    }

    return (
      <Router>
        <Route path='/' component={Modal} />
        <Route
          path='/'
          render={() => {
            return <Navbar idioma={idioma} />;
          }}
        />
        <Route
          exact
          path='/'
          render={() => {
            return (
              <Home
                idioma={idioma}
                cambiarEng={this.cambiarEng}
                cambiarEsp={this.cambiarEsp}
                parte={this.state.parte}
                buscarParte={this.buscarParte}
              />
            );
          }}
        />
        <Route
          exact
          path='/somos'
          render={() => {
            return <Somos idioma={idioma} />;
          }}
        />
        <Route
          exact
          path='/hacemos'
          render={() => {
            return <Hacemos idioma={idioma} />;
          }}
        />
        <Route
          exact
          path='/ofrecemos'
          render={() => {
            return <Ofrecemos idioma={idioma} />;
          }}
        />
        <Route
          exact
          path='/contacto'
          render={() => {
            return <Contacto idioma={idioma} />;
          }}
        />
        <Route
          exact
          path='/tutorial'
          render={() => {
            return <Tutorial idioma={idioma} />;
          }}
        />
        <Route
          exact
          path='/cotizacion'
          render={() => {
            return <Cotizacion idioma={idioma} parte={this.state.parte} />;
          }}
        />
        <Route exact path='/crear' component={Crear} />
      </Router>
    );
  }
}

export default App;
