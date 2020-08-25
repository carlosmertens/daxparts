import React, { Component } from 'react';
import navLogo from '../../images/logoNav.png';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../../actions/openModal';

import Crear from '../signup/SignUp';

class Ingresar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // TODO: Cambiar email por ususario
  changeEmail = (e) => this.setState({ email: e.target.value });
  changePassword = (e) => this.setState({ password: e.target.value });

  submitLogin = (e) => {
    e.preventDefault();
    console.log(this.state.email);
    console.log(this.state.password);
    this.closeModal();
  };

  // Conectar API
  //

  closeModal = () => {
    this.props.openModal('closed', '');
  };

  render() {
    const idioma = this.props.idioma;
    console.log(this.props);
    return (
      <>
        <div className='modal-logo d-flex justify-content-center'>
          <img src={navLogo} alt='Dax Logo' />
        </div>

        <div className='modal-body'>
          <form onSubmit={this.submitLogin}>
            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder={idioma.ingresar.nombre}
                onChange={this.changeEmail}
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='password'
                className='form-control mr-sm-2'
                placeholder={idioma.ingresar.password}
                onChange={this.changePassword}
              />
            </div>

            <div className='enlace-form'>
              <a className='me-olvide' href='/#'>
                {idioma.ingresar.olvide}
              </a>
            </div>

            <div className='boton-form'>
              <button type='submit' className='btn'>
                {idioma.ingresar.botonIngresar}
              </button>
            </div>
          </form>
        </div>

        <div className='modal-footer d-flex justify-content-center'>
          <div>
            {idioma.ingresar.cambiarModal}{' '}
            <span
              className='pointer'
              onClick={() => {
                this.props.openModal('open', <Crear idioma={this.props.idioma} />);
              }}>
              {idioma.ingresar.cambiarEnlace}
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

export default connect(mapStateToProps, mapDispatchToProps)(Ingresar);
