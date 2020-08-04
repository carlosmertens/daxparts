import React from 'react';
import { Link } from 'react-router-dom';
import logoCentro from '../../images/logoCentro.png';
import IconVideos from '../../images/IconVideos.png';
import engFlag from '../../images/eng.png';
import espFlag from '../../images/esp.png';
// import lupa from '../../images/lupa.png';
import './Home.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../../actions/openModal';

import Noparte from '../noparte/Noparte';

const Home = (props) => (
  <header>
    <div className='container header-contenido'>
      {/* Boton de idiomas */}
      <div className='idiomas'>
        <button className='ingles' onClick={props.cambiarEng}>
          <img className='eng-flag' src={engFlag} alt='ENG logo' />
        </button>
        <button className='castellano' onClick={props.cambiarEsp}>
          <img className='esp-flag' src={espFlag} alt='ESP logo' />
        </button>
      </div>
      {/* ===== Logo del centro ===== */}
      <div className='container'>
        <img className='logo-centro' src={logoCentro} alt='Dax Logo' />
      </div>
      {/* ===== Formulario para buscar partes ===== */}
      <div className='container d-flex justify-content-center'>
        <form className='form-inline'>
          <div className='form-group mb-2'>
            <label htmlFor='buscar'>{props.idioma.home.leyendaBuscar}</label>
            <input
              type='text'
              id='buscar'
              placeholder={props.idioma.home.campoBuscar}
              onChange={props.buscarParte}
            />

            <Link to='/cotizacion' className='btn btn-buscar mb-2'>
              {props.idioma.home.botonBuscar}
            </Link>
          </div>
        </form>
      </div>
      {/* ===== Enlace para ayuda ===== */}
      <div className='container click-link'>
        {/* <!-- Button trigger modal --> */}
        <button
          type='button'
          className='button-link'
          onClick={() => {
            this.props.openModal('open', <Noparte />);
          }}>
          <p className='click-link-text'>{props.idioma.home.enlaceClick}</p>
        </button>
      </div>
      {/* ===== Icono Tutorial ===== */}
      <div className='container tutorial-link'>
        <Link to='/tutorial'>
          <img className='logo-tutorial' src={IconVideos} alt='Tutorial Logo' />
          <p className='tutorial-text'>{props.idioma.home.leyendaTutorial}</p>
        </Link>
      </div>
    </div>
  </header>
);

function mapDispatchToProps(dispacher) {
  return bindActionCreators(
    {
      openModal: openModal,
    },
    dispacher
  );
}

export default connect(null, mapDispatchToProps)(Home);
