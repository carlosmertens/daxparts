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
    this.closeModal();
  };

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
            <h4>{idioma.buscamos.titulo1}</h4>
            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder={idioma.buscamos.marca}
                onChange={this.changeMarca}
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder={idioma.buscamos.modelo}
                onChange={this.changeModelo}
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder={idioma.buscamos.serie}
                onChange={this.changeSerie}
              />
            </div>

            <h4>{idioma.buscamos.titulo2}</h4>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder={idioma.buscamos.nombre}
                onChange={this.changeNombre}
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder={idioma.buscamos.pais}
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
                placeholder={idioma.buscamos.telefono}
                onChange={this.changeTelefono}
              />
            </div>

            <div className='boton-form'>
              <button type='submit' className='btn'>
                {idioma.buscamos.botonCotizar}
              </button>
            </div>
          </form>
        </div>

        <div className='modal-footer d-flex justify-content-center'>
          <div>
            {idioma.buscamos.cambiarModal}{' '}
            <span
              className='pointer'
              onClick={() => {
                this.props.openModal('open', <Ingresar idioma={this.props.idioma} />);
              }}>
              {idioma.buscamos.cambiarEnlace}
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

export default connect(mapStateToProps, mapDispatchToProps)(Buscamos);
