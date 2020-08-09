import React from 'react';
import { Link } from 'react-router-dom';
import logoCentro from '../../images/logoCentro.png';
import IconVideos from '../../images/IconVideos.png';
import './Home.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../../actions/openModal';

import Noparte from '../noparte/Noparte';
import Idioma from '../idiomaSelect/Idioma';
import Pais from '../paisDetector/Pais';

const Home = (props) => {
  console.log(props.parte);
  // Logica si ususario no introduce numero de parte
  let buscarParte = props.parte;
  if (props.parte !== '') {
    buscarParte = 'cotizacion';
  }
  return (
    <header>
      <div className='container-fluid header-contenido'>
        <div className='container-fluid d-flex justify-content-between header-pais-idioma'>
          <Pais country={props.country} />
          <Idioma lang={props.lang} cambiarIdioma={props.cambiarIdioma} />
        </div>

        <div className='container'>
          <img className='logo-centro' src={logoCentro} alt='Dax Logo' />
        </div>

        <div className='container d-flex justify-content-center'>
          <form className='form-inline'>
            <label htmlFor='buscar'>{props.idioma.home.leyendaBuscar}</label>
            <input
              type='text'
              id='buscar'
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
            <p className='click-link-text'>{props.idioma.home.enlaceClick}</p>
          </button>
        </div>

        <div className='container tutorial-link'>
          <Link to='/tutorial'>
            <img className='logo-tutorial' src={IconVideos} alt='Tutorial Logo' />
            <p className='tutorial-text'>{props.idioma.home.leyendaTutorial}</p>
          </Link>
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
