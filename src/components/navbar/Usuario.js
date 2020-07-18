import React, { Component } from 'react';
import navLogo from '../../images/logoNav.png';
import './Navbar.css';

import Crear from '../crearUsuario/Crear';
import { Route } from 'react-router-dom';

class Usuario extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Evento para is a crear usuario
  crearUsuario = () => {
    console.log('Boton crear');
    return <Route path='/crear' component={Crear} />;
  };

  render() {
    // Desestructuración del props idioma
    // const texto = { ...this.props };
    // console.log(this.props);
    return (
      <div className='form-inline my-2 my-lg-0'>
        <h4 className='text-white'>{this.props.texto.navbar.leyenda}</h4>

        {/* Button trigger modal */}
        <button
          type='button'
          className='btn'
          data-toggle='modal'
          data-target='#ingresarModal'>
          {this.props.texto.navbar.botonTexto}
        </button>

        {/* Modal */}
        <div
          className='modal fade'
          id='ingresarModal'
          tabIndex='-1'
          role='dialog'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <img src={navLogo} alt='Dax Logo' />
                <button
                  type='button'
                  className='close'
                  data-dismiss='modal'
                  aria-label='Close'>
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body'>
                <form>
                  {/* Campo de Ususario */}
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control mr-sm-2'
                      id='inlineFormInputGroup'
                      // TODO: Add to idioma
                      placeholder='Nombre de Usuario'
                    />
                  </div>
                  <div className='form-group'>
                    {/* Campo de contrasena */}
                    <input
                      type='password'
                      className='form-control mr-sm-2'
                      placeholder={this.props.texto.navbar.modal.campoContrasena}
                    />
                  </div>
                  {/* Me olvide Contrasena */}
                  <div className='enlace-form'>
                    <a className='me-olvide' href='/#'>
                      Me olvide
                    </a>
                  </div>
                  {/* Boton de Ingresar */}
                  <div className='boton-form'>
                    <button type='submit' className='btn' data-dismiss='modal'>
                      {this.props.texto.navbar.modal.botonIngresar}
                    </button>
                  </div>
                </form>
              </div>
              <div className='modal-footer'>
                {/* Llamar boton de crear usuario nuevo */}
                {/* <Crear texto={this.props} /> */}

                <div className='texto-beneficios'>
                  <p>Crea tu cuenta y disfruta de los beneficios!</p>
                </div>
                <div className='boton-crear-cuenta'>
                  <button
                    onClick={this.crearUsuario}
                    type='button'
                    data-dismiss='modal'
                    className='btn'>
                    Crear
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Usuario;
