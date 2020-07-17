import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoCentro from '../../images/logoCentro.png';
import IconVideos from '../../images/IconVideos.png';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    // Objecto (State) inicial del campo de captura
    this.state = {
      parte: '',
    };
  }

  // Evento que captura el numero de busqueda
  buscarParte = (e) => {
    e.preventDefault();
    const numero = document.getElementById('buscar').value;
    this.setState({ parte: numero });
  };

  render() {
    // desestructuración del props idioma
    const texto = { ...this.props.idioma };
    return (
      <header>
        <div className='container header-contenido'>
          {/* Boton de idiomas */}
          <div className='idiomas'>
            <button className='ingles' onClick={this.props.cambiarEng}>
              EN
            </button>
            <button className='castellano' onClick={this.props.cambiarEsp}>
              ES
            </button>
          </div>
          {/* ===== Logo del centro ===== */}
          <div className='container'>
            <img className='logo-centro' src={logoCentro} alt='Dax Logo' />
          </div>
          {/* ===== Formulario para buscar partes ===== */}
          <div className='container d-flex justify-content-center'>
            <form className='form-inline' onSubmit={this.buscarParte}>
              <div className='form-group mb-2'>
                <label htmlFor='buscar'>{texto.home.leyendaBuscar}</label>
                <input
                  type='text'
                  id='buscar'
                  placeholder={texto.home.campoBuscar}
                />
                <Link to='/cotizacion'>
                  <button className='btn btn-primary mb-2' type='submit'>
                    {texto.home.botonBuscar}
                  </button>
                </Link>
              </div>
            </form>
          </div>
          {/* ===== Enlace para ayuda ===== */}
          <div className='container click-link'>
            {/* <!-- Button trigger modal --> */}
            <button
              type='button'
              className='button-link'
              data-toggle='modal'
              data-target='#exampleModal'>
              <p className='click-link-text'>{texto.home.enlaceClick}</p>
            </button>

            {/* <!-- Modal --> */}
            <div
              className='modal fade'
              id='exampleModal'
              tabIndex='-1'
              role='dialog'
              aria-labelledby='exampleModalLabel'
              aria-hidden='true'>
              <div className='modal-dialog'>
                <div className='modal-content align-items-center d-flex'>
                  <div className='modal-header'>
                    <h5 className='modal-title' id='exampleModalLabel'>
                      {texto.home.modal.titulo}
                    </h5>
                  </div>
                  <div className='modal-body'>
                    <div className='row'>
                      <div className='col'>
                        <Link to='/tutorial/'>
                          <button
                            className='que-hacer-button'
                            // data-dismiss='modal'
                            aria-hidden='true'>
                            {texto.home.modal.enlaceTutorial}
                          </button>
                        </Link>
                      </div>
                      <div className='col'>
                        <button className='que-hacer-button'>
                          {texto.home.modal.enlaceBuscamos}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ===== Icono Tutorial ===== */}
          <div className='container tutorial-link'>
            <Link to='/tutorial'>
              <img
                className='logo-tutorial'
                src={IconVideos}
                alt='Tutorial Logo'
              />
              <p className='tutorial-text'>{texto.home.leyendaTutorial}</p>
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Home;
