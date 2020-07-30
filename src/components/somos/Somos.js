import React, { Component } from 'react';
import './Somos.css';

class Somos extends Component {
  constructor(props) {
    super(props);
    this.state = '';
  }

  render() {
    // Desestructuración del props idioma
    const texto = { ...this.props.idioma };
    return (
      <div className='somos-contenido'>
        <div className='container somos-title'>
          <h1>{texto.somos.titulo}</h1>
        </div>

        <div className='container somos-texto'>
          <p>{texto.somos.contenido}</p>
        </div>

        <div className='container somos-title'>
          <h1>{texto.somos.titulo2}</h1>
        </div>

        <div className='container somos-texto'>
          <p>{texto.somos.contenido2}</p>
        </div>

        {/* <div className='container-fluid somos-banner'>
          <div className='row'>
            <div className='col'>
              <h3>{texto.somos.banner.texto1}</h3>
            </div>
            <div className='col'>
              <h3>{texto.somos.banner.texto2}</h3>
            </div>
            <div className='col'>
              <h3>{texto.somos.banner.texto3}</h3>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Somos;
