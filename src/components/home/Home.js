import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoCentro from '../../images/logoCentro.png';
import IconVideos from '../../images/IconVideos.png';
import engFlag from '../../images/eng.png';
import espFlag from '../../images/esp.png';
import './Home.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../../actions/openModal';

import Noparte from '../noparte/Noparte';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = '';
  }

  render() {
    // desestructuración del props idioma
    const texto = { ...this.props.idioma };
    console.log(this.props.parte);
    return (
      <header>
        <div className='container header-contenido'>
          {/* Boton de idiomas */}
          <div className='idiomas'>
            <button className='ingles' onClick={this.props.cambiarEng}>
              <img className='eng-flag' src={engFlag} alt='ENG logo' />
            </button>
            <button className='castellano' onClick={this.props.cambiarEsp}>
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
                <label htmlFor='buscar'>{texto.home.leyendaBuscar}</label>
                <input
                  type='text'
                  id='buscar'
                  placeholder={texto.home.campoBuscar}
                  onChange={this.props.buscarParte}
                />

                <Link to='/cotizacion'>
                  <button
                    className='btn mb-2'
                    type='submit'
                    // onClick={this.props.buscarParte}
                  >
                    {texto.home.botonBuscar}
                  </button>
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
              <p className='click-link-text'>{texto.home.enlaceClick}</p>
            </button>
          </div>
          {/* ===== Icono Tutorial ===== */}
          <div className='container tutorial-link'>
            <Link to='/tutorial'>
              <img className='logo-tutorial' src={IconVideos} alt='Tutorial Logo' />
              <p className='tutorial-text'>{texto.home.leyendaTutorial}</p>
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

function mapDispatchToProps(dispacher) {
  return bindActionCreators(
    {
      openModal: openModal,
    },
    dispacher
  );
}

export default connect(null, mapDispatchToProps)(Home);
