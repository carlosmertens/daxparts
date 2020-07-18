import React, { Component } from 'react';
import './Crear.css';

class Crear extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <nav className='navbar navbar-expand-lg navbar-light bg-secondary'>
          <a className='navbar-brand' href='/#'>
            Dax Parts Logo
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarText'
            aria-controls='navbarText'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarText'>
            <span className='navbar-text'>
              Obtén mas opciones e información desde tu cuenta o crea una cuenta
              Es Gratis!!!
            </span>
          </div>
        </nav>

        <div>
          <h1>Crear Usuario!!!</h1>
        </div>
      </>
    );
  }
}

export default Crear;
