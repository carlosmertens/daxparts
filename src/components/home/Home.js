import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../../actions/openModal';

import './Home.css';
import logoCentro from '../../images/logoCentro.png';
import IconVideos from '../../images/IconVideos.png';

import Idioma from './Idioma';
import Pais from './Pais';
import Noparte from '../noparte/Noparte';

const Home = (props) => {
  // Iniciar state para el resultado de la busqueda
  // Set empty state to fill with the API result
  const [busqueda, setBusqueda] = useState([]);

  // Llamar API con el numero de parte a buscar
  // Call up API with state buscar
  useEffect(() => {
    // Prueba con API de peliculas (TheMovieDB)
    // Test with movie API
    const urlAPI = `http://www.wp.daxparts.com/api/pais/listado`;
    axios.get(urlAPI).then((response) => {
      // Console log response
      console.log(response.data);
      const resp = response.data.results;
      setBusqueda(resp);
    });
  }, []);

  console.log(busqueda);

  // Logica si usuario no introduce numero de parte (no ir a cotizacion)
  let buscarParte = props.parte;
  if (props.parte !== '') {
    buscarParte = 'cotizacion';
  }
  return (
    <header>
      <div className='container-fluid'>
        <div className='container-fluid d-flex justify-content-between pais-idioma'>
          <Pais country={props.country} />
          <Idioma lang={props.lang} cambiarIdioma={props.cambiarIdioma} />
        </div>

        <div className='header-contenido'>
          <div className='container'>
            <img className='logo-centro' src={logoCentro} alt='Dax Logo' />
          </div>

          <div className='container d-flex justify-content-center'>
            <form className='form-inline d-flex justify-content-center'>
              <label>{props.idioma.home.leyendaBuscar}</label>
              <input
                type='text'
                placeholder={props.idioma.home.campoBuscar}
                value={props.parte}
                onChange={props.handleChange}
              />
              <Link to={`/${buscarParte}`} className='btn btn-buscar'>
                {props.idioma.home.botonBuscar}
              </Link>
            </form>
          </div>

          <div className='container click-link'>
            <button
              type='button'
              className='button-link'
              onClick={() => {
                props.openModal('open', <Noparte idioma={props.idioma} />);
              }}>
              <p className=''>{props.idioma.home.enlaceClick}</p>
            </button>
          </div>

          <div className='container'>
            <Link to='/tutorial'>
              <img className='logo-tutorial' src={IconVideos} alt='Tutorial Logo' />
              <p className='tutorial-text'>{props.idioma.home.leyendaTutorial}</p>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

// Function para abrir modal
function mapDispatchToProps(dispacher) {
  return bindActionCreators(
    {
      openModal: openModal,
    },
    dispacher
  );
}

export default connect(null, mapDispatchToProps)(Home);
