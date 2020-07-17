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

import castellano from './textos/textos.json';
import ingles from './textos/textEng.json';

class App extends Component {
  state = {
    lang: 'es',
  };

  // Evento de cambiar idioma
  cambiarEng = () => {
    this.setState({ lang: 'en' });
  };

  cambiarEsp = () => {
    this.setState({ lang: 'es' });
  };

  render() {
    // console.log(this.state.lang);
    // console.log(textEs);
    let idioma = castellano;
    console.log(this.state.lang);
    if (this.state.lang !== 'es') {
      idioma = ingles;
    }
    console.log(idioma);

    return (
      <Router>
        <Route path='/' component={Navbar} />
        <Route
          exact
          path='/'
          render={() => {
            return (
              <Home
                idioma={idioma}
                cambiarEng={this.cambiarEng}
                cambiarEsp={this.cambiarEsp}
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
