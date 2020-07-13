import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import navLogo from '../../images/logoNav.png';

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link to='/' className='navbar-brand'>
          <img src={navLogo} alt='Dax Logo' />
        </Link>
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
                <h4>Somos</h4>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/hacemos' className='nav-link text-white' href='/'>
                <h4>Hacemos</h4>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='ofrecemos' className='nav-link text-white' href='/'>
                <h4>Ofrecemos</h4>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='contacto' className='nav-link text-white' href='/'>
                <h4>Contacto</h4>
              </Link>
            </li>
          </ul>
          <form className='form-inline my-2 my-lg-0'>
            {/* <input
              className='mr-sm-2'
              type='text'
              placeholder='Usuario'
              aria-label='Search'
            /> */}
            <h4 className='text-white'>Ya tienes una cuenta?</h4>
            <button
              className='btn btn-outline-success my-2 my-sm-0'
              type='submit'>
              Ingresar
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Navbar;
