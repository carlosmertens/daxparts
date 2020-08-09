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
    <div className='navbar-brand'>
      <Link to='/'>
        <img src={navLogoWhite} alt='Dax Logo' />
      </Link>
    </div>

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
          <Link to='/somos' className='nav-link text-white navbar-enlace'>
            {props.idioma.navbar.enlace1}
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/hacemos' className='nav-link text-white navbar-enlace'>
            {props.idioma.navbar.enlace2}
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='ofrecemos' className='nav-link text-white navbar-enlace'>
            {props.idioma.navbar.enlace3}
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='contacto' className='nav-link text-white navbar-enlace'>
            {props.idioma.navbar.enlace4}
          </Link>
        </li>
      </ul>

      <div className='form-inline my-2 my-lg-0'>
        <button
          type='button'
          className='btn btn-texto'
          onClick={() => {
            props.openModal('open', <Ingresar idioma={props.idioma} />);
          }}>
          {props.idioma.navbar.botonTexto1}
        </button>
        <button
          type='button'
          className='btn btn-texto'
          onClick={() => {
            props.openModal('open', <Crear idioma={props.idioma} />);
          }}>
          {props.idioma.navbar.botonTexto2}
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
