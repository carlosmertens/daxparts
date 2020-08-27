import React, { Component } from 'react';
import navLogo from '../../images/logoNav.png';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../../actions/openModal';

import Ingresar from '../login/Login';

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

  // Conectar con el API

  closeModal = () => {
    this.props.openModal('closed', '');
  };

  render() {
    const idioma = this.props.idioma;
    return (
      <>
        <div className='modal-logo d-flex justify-content-center'>
          <img src={navLogo} alt='Dax Logo' />
        </div>

        <hr />

        <div className='modal-body'>
          <form onSubmit={this.submitLogin}>
            <h4>{idioma.crear.titulo1}</h4>
            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder={idioma.crear.empresa}
                onChange={this.changeEmpresa}
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder={idioma.crear.nombre}
                onChange={this.changeNombre}
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <select
                className='form-control'
                onChange={this.changeID}
                value={this.state.ID}>
                <option>{idioma.crear.cedula}</option>
                <option>NIT</option>
                <option>{idioma.crear.pasaporte}</option>
                <option>RUC</option>
              </select>
            </div>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder={idioma.crear.numero}
                onChange={this.changeNumeroID}
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <select
                className='form-control'
                onChange={this.changePais}
                value={this.state.pais}>
                <option>Bolivia</option>
                <option>USA</option>
                <option>Paraguay</option>
                <option>Peru</option>
              </select>
            </div>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder={idioma.crear.ciudad}
                onChange={this.changeCiudad}
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder={idioma.crear.telefono}
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

            <h4>{idioma.crear.titulo2}</h4>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder={idioma.crear.usuario}
                onChange={this.changeUsuario}
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='password'
                className='form-control mr-sm-2'
                placeholder={idioma.crear.password1}
                onChange={this.changePassword}
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='password'
                className='form-control mr-sm-2'
                placeholder={idioma.crear.password2}
                onChange={this.changePassword2}
              />
            </div>

            <div className='boton-form'>
              <button type='submit' className='btn'>
                {idioma.crear.botonCrear}
              </button>
            </div>
          </form>
        </div>

        <div className='modal-footer d-flex justify-content-center'>
          <div>
            {idioma.crear.cambiarModal}{' '}
            <span
              className='pointer'
              onClick={() => {
                this.props.openModal('open', <Ingresar idioma={this.props.idioma} />);
              }}
              style={{ color: '#fca728' }}>
              {idioma.crear.cambiarEnlace}
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
