import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import navLogoWhite from '../../images/logoNavWhite.png';
import Ingresar from '../ingresar/Ingresar';
import Crear from '../crear/Crear';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../../actions/openModal';

const Navbar = (props) => (
  <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
    {/* Logo Navigador */}
    <div className='navbar-brand'>
      <Link to='/'>
        <img src={navLogoWhite} alt='Dax Logo' />
      </Link>
    </div>

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
            <h4>{props.idioma.navbar.enlace1}</h4>
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/hacemos' className='nav-link text-white' href='/'>
            <h4>{props.idioma.navbar.enlace2}</h4>
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='ofrecemos' className='nav-link text-white' href='/'>
            <h4>{props.idioma.navbar.enlace3}</h4>
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='contacto' className='nav-link text-white' href='/'>
            <h4>{props.idioma.navbar.enlace4}</h4>
          </Link>
        </li>
      </ul>

      {/* Botones modal de Ingresar y Crear Cuenta */}
      <div className='form-inline my-2 my-lg-0'>
        <button
          type='button'
          className='btn'
          onClick={() => {
            props.openModal('open', <Ingresar />);
          }}>
          {props.idioma.navbar.botonTexto}
        </button>
        <button
          type='button'
          className='btn'
          onClick={() => {
            props.openModal('open', <Crear />);
          }}>
          Crear cuenta
        </button>
      </div>
    </div>
  </nav>
);

// Action dispacher para llamar modal
function mapDispatchToProps(dispacher) {
  return bindActionCreators(
    {
      openModal: openModal,
    },
    dispacher
  );
}

export default connect(null, mapDispatchToProps)(Navbar);
