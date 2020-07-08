import React from 'react';
import './Navbar.css';
import navLogo from '../../images/logoNav.png';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <a className='navbar-brand' href='/'>
        <img src={navLogo} alt='Dax Logo' />
      </a>
      <button
        className='navbar-toggler'
        type='button'
        white
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
            <a className='nav-link text-white' href='/'>
              <h4>Somos</h4>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link text-white' href='/'>
              <h4>Hacemos</h4>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link text-white' href='/'>
              <h4>Ofrecemos</h4>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link text-white' href='/'>
              <h4>Contacto</h4>
            </a>
          </li>
        </ul>
        <form className='form-inline my-2 my-lg-0'>
          <input
            className='mr-sm-2'
            type='search'
            placeholder='Usuario'
            aria-label='Search'
          />
          <button className='btn btn-outline-success my-2 my-sm-0' type='submit'>
            Ingresar
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
