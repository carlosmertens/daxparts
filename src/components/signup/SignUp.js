import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../../actions/openModal';
import navLogo from '../../images/logoNav.png';
import Login from '../login/Login';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: 'Cedula de identidad',
      pais: 'Bolivia',
    };
  }

  handleEmpresa = (e) => this.setState({ empresa: e.target.value });
  handleName = (e) => this.setState({ nombre: e.target.value });
  handleID = (e) => this.setState({ ID: e.target.value });
  handleNumeroID = (e) => this.setState({ numeroID: e.target.value });
  handlePais = (e) => this.setState({ pais: e.target.value });
  handleCiudad = (e) => this.setState({ ciudad: e.target.value });
  handleTelefono = (e) => this.setState({ telefono: e.target.value });
  handleEmail = (e) => this.setState({ email: e.target.value });
  handleUsuario = (e) => this.setState({ usuario: e.target.value });
  handlePassword = (e) => this.setState({ password: e.target.value });
  handlePassword2 = (e) => this.setState({ password1: e.target.value });

  handleSubmit = (e) => {
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
          <form onSubmit={this.handleSubmit}>
            <h4>{idioma.crear.titulo1}</h4>
            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder={idioma.crear.empresa}
                onChange={this.handleEmpresa}
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder={idioma.crear.nombre}
                onChange={this.handleName}
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <select
                className='form-control'
                onChange={this.handleID}
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
                onChange={this.handleNumeroID}
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <select
                className='form-control'
                onChange={this.handlePais}
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
                onChange={this.handleCiudad}
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder={idioma.crear.telefono}
                onChange={this.handleTelefono}
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='email'
                className='form-control mr-sm-2'
                placeholder='Email'
                onChange={this.handleEmail}
              />
            </div>

            <h4>{idioma.crear.titulo2}</h4>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder={idioma.crear.usuario}
                onChange={this.handleUsuario}
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='password'
                className='form-control mr-sm-2'
                placeholder={idioma.crear.password1}
                onChange={this.handlePassword}
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='password'
                className='form-control mr-sm-2'
                placeholder={idioma.crear.password2}
                onChange={this.handlePassword2}
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
                this.props.openModal('open', <Login idioma={this.props.idioma} />);
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
