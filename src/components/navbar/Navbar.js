import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import navLogo from '../../images/logoNav.png';
import navLogoWhite from '../../images/logoNavWhite.png';

class Navbar extends Component {
  constructor() {
    super();
    this.state = '';
  }
  render() {
    // Desestructuración del props idioma
    const texto = { ...this.props.idioma };
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        {/* Logo Navigador */}
        <Link to='/' className='navbar-brand'>
          <img src={navLogoWhite} alt='Dax Logo' />
        </Link>
        {/* Boton pantalla pequeña */}
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mx-auto'>
            <li className='nav-item'>
              <Link to='/somos' className='nav-link text-white'>
                <h4>{texto.navbar.enlace1}</h4>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/hacemos' className='nav-link text-white' href='/'>
                <h4>{texto.navbar.enlace2}</h4>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='ofrecemos' className='nav-link text-white' href='/'>
                <h4>{texto.navbar.enlace3}</h4>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='contacto' className='nav-link text-white' href='/'>
                <h4>{texto.navbar.enlace4}</h4>
              </Link>
            </li>
          </ul>

          {/* Boton de ingresar */}
          <div className='form-inline my-2 my-lg-0'>
            <h4 className='text-white'>{texto.navbar.leyenda}</h4>

            {/* Button trigger modal */}
            <button
              type='button'
              className='btn'
              data-toggle='modal'
              data-target='#ingresarModal'>
              {texto.navbar.botonTexto}
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
                          placeholder={texto.navbar.modal.campoContrasena}
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
                        <button
                          type='submit'
                          className='btn'
                          data-dismiss='modal'>
                          {texto.navbar.modal.botonIngresar}
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className='modal-footer'>
                    <div className='texto-beneficios'>
                      <p>Crea tu cuenta y disfruta de los beneficios!</p>
                    </div>
                    <div className='boton-crear-cuenta'>
                      <button type='button' className='btn' data-dismiss='modal'>
                        Crear
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
