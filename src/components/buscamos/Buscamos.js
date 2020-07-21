import React, { Component } from 'react';
import navLogo from '../../images/logoNav.png';
// import './Buscamos.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../../actions/openModal';

import Ingresar from '../ingresar/Ingresar';

class Buscamos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className='modal-logo d-flex justify-content-center'>
          <img src={navLogo} alt='Dax Logo' />
        </div>

        <hr />

        <div className='modal-body'>
          <form onSubmit={this.submitLogin}>
            <h4>Datos del Equipo</h4>
            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder='Marca de tu equipo'
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder='Modelo de tu equipo'
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder='Serie de tu equipo'
              />
            </div>

            <h4>Tus datos</h4>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder='Nombre'
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <input type='text' className='form-control mr-sm-2' placeholder='Pais' />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='email'
                className='form-control mr-sm-2'
                placeholder='Email'
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder='Teléfono/WhatsApp'
              />
            </div>

            <div className='boton-form'>
              <button type='submit' className='btn'>
                Cotizar
              </button>
            </div>
          </form>
        </div>

        <div className='modal-footer d-flex justify-content-center'>
          <div>
            Ya tienes una cuenta?{' '}
            <span
              className='pointer'
              onClick={() => {
                this.props.openModal('open', <Ingresar />);
              }}>
              Pincha aqui
            </span>
          </div>
        </div>
      </>
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

export default connect(null, mapDispatchToProps)(Buscamos);
