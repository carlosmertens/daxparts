import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

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

import Modal from './components/modal/Modal';

// Importar json con los textos de ingles y castellano
import castellano from './textos/textEsp.json';
import ingles from './textos/textEng.json';

class App extends Component {
  // Objecto (State) inicial del idioma y el campo de busqueda
  state = {
    lang: 'Español',
    country: 'United States',
    parte: '',
  };

  // Evento de cambiar idioma
  cambiarIdioma = (e) => {
    this.setState({ lang: e.target.value });
  };

  // Capturar el pais del usuario
  componentDidMount() {
    const locationUrl = 'https://extreme-ip-lookup.com/json/';
    axios.get(locationUrl).then((response) => {
      // console.log(response.data);
      const userCountry = response.data.country;
      console.log(userCountry);
      // this.setState({ country: userCountry });
    });
  }

  // Evento que captura el numero de busqueda

  handleChange = (e) => {
    this.setState({ parte: e.target.value });
  };

  render() {
    // Logica para selecionar idioma de la pagina
    let idioma = castellano;
    if (this.state.lang !== 'Español') {
      idioma = ingles;
    }
    return (
      <Router>
        <Route path='/' component={Modal} idioma={idioma} />
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
                lang={this.state.lang}
                country={this.state.country}
                cambiarIdioma={this.cambiarIdioma}
                parte={this.state.parte}
                handleChange={this.handleChange}
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
      </Router>
    );
  }
}

export default App;
