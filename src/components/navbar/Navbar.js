import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import navLogo from '../../images/logoNav.png';
import navLogoWhite from '../../images/logoNavWhite.png';
// import Usuario from './Usuario';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../../actions/openModal';

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
          {/* Enlaces Introductorios */}
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

          {/* Boton de ingresar al modal de ususario */}
          {/* <Usuario texto={texto} /> */}
          <div className='form-inline my-2 my-lg-0'>
            <h4 className='text-white'>{texto.navbar.leyenda}</h4>
            <button
              type='button'
              className='btn'
              onClick={() => {
                this.props.openModal('open', 'Ingresar');
              }}>
              {texto.navbar.botonTexto}
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

function mapDispatchToProps(dispacher) {
  return bindActionCreators(
    {
      openModal: openModal,
    },
    dispacher
  );
}

export default connect(null, mapDispatchToProps)(Navbar);
