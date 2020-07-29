import React, { Component } from 'react';
import navLogo from '../../images/logoNav.png';
import './Crear.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../../actions/openModal';

import Ingresar from '../ingresar/Ingresar';

class Crear extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: 'Cedula de identidad',
      pais: 'Bolivia',
    };
  }

  changeEmpresa = (e) => this.setState({ empresa: e.target.value });
  changeNombre = (e) => this.setState({ nombre: e.target.value });
  changeID = (e) => this.setState({ ID: e.target.value });
  changeNumeroID = (e) => this.setState({ numeroID: e.target.value });
  changePais = (e) => this.setState({ pais: e.target.value });
  changeCiudad = (e) => this.setState({ ciudad: e.target.value });
  changeTelefono = (e) => this.setState({ telefono: e.target.value });
  changeEmail = (e) => this.setState({ email: e.target.value });
  changeUsuario = (e) => this.setState({ usuario: e.target.value });
  changePassword = (e) => this.setState({ password: e.target.value });
  changePassword1 = (e) => this.setState({ password1: e.target.value });

  submitLogin = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.closeModal();
  };

  closeModal = () => {
    this.props.openModal('closed', '');
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
            <h4>Datos del Cliente</h4>
            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder='Empresa'
                onChange={this.changeEmpresa}
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder='Nombre'
                onChange={this.changeNombre}
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <select
                className='form-control'
                onChange={this.changeID}
                value={this.state.ID}>
                <option>Cedula de identidad</option>
                <option>NIT</option>
                <option>Pasaporte</option>
                <option>RUC</option>
              </select>
            </div>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder='Numero de identidad'
                onChange={this.changeNumeroID}
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <select
                className='form-control'
                onChange={this.changePais}
                value={this.state.pais}>
                <option>Bolivia</option>
                <option>Chile</option>
                <option>Estados Unidos</option>
                <option>Paraguay</option>
                <option>Peru</option>
              </select>
            </div>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder='Ciudad'
                onChange={this.changeCiudad}
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder='Teléfono'
                onChange={this.changeTelefono}
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

            <h4>Datos del Cliente</h4>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder='Usuario'
                onChange={this.changeUsuario}
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='password'
                className='form-control mr-sm-2'
                placeholder='Password'
                onChange={this.changePassword}
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='password'
                className='form-control mr-sm-2'
                placeholder='Confirmar password'
                onChange={this.changePassword2}
              />
            </div>

            <div className='boton-form'>
              <button type='submit' className='btn'>
                Crear cuenta
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

function mapStateToProps(state) {
  return {
    siteModal: state.siteModal,
  };
}

function mapDispatchToProps(dispacher) {
  return bindActionCreators(
    {
      openModal: openModal,
    },
    dispacher
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Crear);
