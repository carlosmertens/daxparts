import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import navLogo from '../../images/logoNav.png';
import navLogoWhite from '../../images/logoNavWhite.png';

import texto from '../../textos/textos.json';

class Navbar extends Component {
  render() {
    // console.log(texto);
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
            {/* <input
              className='mr-sm-2'
              type='text'
              placeholder='Usuario'
              aria-label='Search'
            /> */}
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
                <div className='modal-content align-items-center d-flex'>
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
                    <input
                      className='mr-sm-2'
                      type='password'
                      placeholder='Contraseña'
                      aria-label='Search'
                    />
                  </div>
                  <div className='modal-footer'>
                    <button
                      type='button'
                      className='btn btn-secondary'
                      data-dismiss='modal'>
                      Ingresar
                    </button>
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
