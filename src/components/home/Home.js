import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoCentro from '../../images/logoCentro.png';
// import IconVideos from '../../images/IconVideos.png';

import './Home.css';

class Home extends Component {
  // Objecto (State) inicial del campo de captura
  state = {
    parte: '',
  };

  // Evento que captura el campo de entrada
  changeParte = (e) => {
    this.setState({
      parte: e.target.value,
    });
  };

  render() {
    // Prueba para capturar numero de parte
    console.log(this.state.parte);
    return (
      <header>
        <div className='header-contenido container'>
          {/* Logo del centro */}
          <div className='container'>
            <img src={logoCentro} alt='Dax Logo' />
          </div>
          {/* Formulario para buscar partes */}
          <div className='container d-flex justify-content-center'>
            <form className='form-inline'>
              <div className='form-group mb-2'>
                <label htmlFor='buscar'>Nro. de parte</label>
                <input
                  onChange={this.changeParte}
                  value={this.state.parte}
                  placeholder='Introduce el numero de parte'
                  type='text'
                  id='buscar'
                />
                <button className='btn btn-primary mb-2' type='submit'>
                  Buscar
                </button>
              </div>
            </form>
          </div>
          {/* Enlace para ayuda */}
          <div className='container click-link'>
            <Link to='/'>
              <p className='click-link-text'>
                Click aqui si no sabes el numero de parte
              </p>
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Home;
