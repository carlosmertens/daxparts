import React, { Component } from 'react';
import navLogo from '../../images/logoNav.png';
import './Usuario.css';

class Ingresar extends Component {
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

        <div className='modal-body'>
          <form onSubmit={this.submitLogin}>
            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder='Nombre de Usuario'
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='password'
                className='form-control mr-sm-2'
                placeholder='Password'
              />
            </div>

            <div className='enlace-form'>
              <a className='me-olvide' href='/#'>
                Me olvide
              </a>
            </div>

            <div className='boton-form'>
              <button type='submit' className='btn'>
                Ingresar
              </button>
            </div>
          </form>
        </div>

        <div className='modal-footer d-flex justify-content-center'>
          <p>No tienes cuenta? Regístrate</p>
        </div>
      </>
    );
  }
}

export default Ingresar;
