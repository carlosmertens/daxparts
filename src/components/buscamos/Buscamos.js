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
    this.closeModal();
  }

  changeMarca = (e) => this.setState({ marca: e.target.value });
  changeModelo = (e) => this.setState({ modelo: e.target.value });
  changeSerie = (e) => this.setState({ serie: e.target.value });
  changeNombre = (e) => this.setState({ nombre: e.target.value });
  changePais = (e) => this.setState({ pais: e.target.value });
  changeEmail = (e) => this.setState({ email: e.target.value });
  changeTelefono = (e) => this.setState({ telefono: e.target.value });

  submitLogin = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

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
                onChange={this.changeMarca}
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder='Modelo de tu equipo'
                onChange={this.changeModelo}
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder='Serie de tu equipo'
                onChange={this.changeSerie}
              />
            </div>

            <h4>Tus datos</h4>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder='Nombre'
                onChange={this.changeNombre}
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder='Pais'
                onChange={this.changePais}
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='email'
                className='form-control mr-sm-2'
                placeholder='Email'
                onChange={this.changeEmail}
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder='Teléfono/WhatsApp'
                onChange={this.changeTelefono}
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
