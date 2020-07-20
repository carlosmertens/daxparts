import React, { Component } from 'react';
import navLogo from '../../images/logoNav.png';
import './Usuario.css';

class Crear extends Component {
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
            <h4>Datos del Cliente</h4>
            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder='Empresa'
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder='Nombre'
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <select className='form-control'>
                <option selected>Cedula de identidad</option>
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
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <select className='form-control'>
                <option selected>Bolivia</option>
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
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder='Teléfono'
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='email'
                className='form-control mr-sm-2'
                placeholder='Email'
              />
            </div>

            <h4>Datos del Cliente</h4>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='text'
                className='form-control mr-sm-2'
                placeholder='Usuario'
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='password'
                className='form-control mr-sm-2'
                placeholder='Password'
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='password'
                className='form-control mr-sm-2'
                placeholder='Password'
              />
            </div>

            <div className='form-group d-flex justify-content-center'>
              <input
                type='password'
                className='form-control mr-sm-2'
                placeholder='Confirmar password'
              />
            </div>

            <div className='boton-form'>
              <button type='submit' className='btn'>
                Crear
              </button>
            </div>
          </form>
        </div>

        <div className='modal-footer d-flex justify-content-center'>
          <p>Ya tienes cuenta? Ingresar</p>
        </div>
      </>
    );
  }
}

export default Crear;
