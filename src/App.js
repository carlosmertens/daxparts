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
    country: '',
    parte: '',
  };

  // Evento de cambiar idioma
  cambiarEng = () => {
    this.setState({ lang: 'English' });
  };

  cambiarEsp = () => {
    this.setState({ lang: 'Español' });
  };

  // Evento que captura el numero de busqueda
  buscarParte = (e) => {
    e.preventDefault();
    const numero = document.getElementById('buscar').value;
    this.setState({ parte: numero });
  };

  componentDidMount() {
    const locationUrl = 'https://extreme-ip-lookup.com/json/';
    axios.get(locationUrl).then((response) => {
      // console.log(response.data);
      const userCountry = response.data.country;
      console.log(userCountry);
      this.setState({ country: userCountry });
    });
  }

  render() {
    // Logica para selecionar idioma de la pagina
    let idioma = castellano;
    if (this.state.lang !== 'Español') {
      idioma = ingles;
    }

    // Logica para seleccionar pais del usuario
    if (this.state.country === 'Bolivia') {
      console.log('Welcome Bolivia');
    } else if (this.state.country === 'Peru') {
      console.log('Welcome Peru');
    } else if (this.state.country === 'Paraguay') {
      console.log('Welcome Paraguay');
    } else {
      console.log('Welcome to DaxParts');
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
      </Router>
    );
  }
}

export default App;
