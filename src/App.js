import React, { useState, useEffect } from 'react';
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
import spanish from './textos/textEsp.json';
import english from './textos/textEng.json';

const App = () => {
  const [language, setLanguage] = useState('Español');
  const [country, setCountry] = useState('');
  const [strNroParte, setStrNoParte] = useState('');

  // Capturar el pais del usuario
  // Capture user's country
  useEffect(() => {
    const locationUrl = 'https://extreme-ip-lookup.com/json/';
    axios.get(locationUrl).then((response) => {
      const userCountry = response.data.country;
      console.log(userCountry);
      setCountry('Peru');
    });
  }, []);

  // Evento de cambiar lenguage seleccionado
  // Handler to capture language selection
  const handleLanguage = (e) => {
    setLanguage(e.target.value);
  };

  // Logica para selecionar idioma json-- Iniciado en español
  // Logic to select json language-- Init spanish
  let idioma = spanish;
  if (language !== 'Español') {
    idioma = english;
  }

  // Evento que captura el numero de busqueda
  // Handler to capture spare part number for the search
  const handleSearch = (e) => {
    setStrNoParte(e.target.value);
  };

  // Logica para crear API variable "copais"
  // Logic to create varible copais for the API
  let codpais = '';
  if (country === 'Bolivia') {
    codpais = 'BO';
  } else if (country === 'Peru') {
    codpais = 'PE';
  } else if (country === 'Paraguay') {
    codpais = 'PY';
  } else {
    codpais = 'US';
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
              language={language}
              country={country}
              handleLanguage={handleLanguage}
              strNroParte={strNroParte}
              handleChange={handleSearch}
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
          return (
            <Cotizacion
              idioma={idioma}
              strNroParte={strNroParte}
              country={country}
              codpais={codpais}
            />
          );
        }}
      />
    </Router>
  );
};

export default App;
