import React, { Component } from 'react';
import './Contacto.css';
import usa from '../../images/usa.png';
import bolivia from '../../images/bolivia.png';
import peru from '../../images/peru.png';
import paraguay from '../../images/paraguay.png';
import mapa from '../../images/mapaDAX.png';

class Contacto extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // Desestructuración del props idioma
    const texto = { ...this.props.idioma };
    return (
      <div className='container-fluid contacto-contenido'>
        <div className='container contacto-title'>
          <h1>{texto.contacto.titulo}</h1>
        </div>

        <div className='container contacto-contenido'>
          <div className='row'>
            {/* Columna 1 (Banderas) */}
            <div className='col-sm'>
              <div>
                <p>{texto.contacto.contenido}</p>
              </div>
              <div className='row'>
                {/* row banderas */}
                <div className='col-md'>
                  <img src={usa} alt='Bandera Usa' />
                  <h4>{texto.contacto.usa.nombre}</h4>
                  <a href='mailto:dax@daxparts.com'>{texto.contacto.usa.email}</a>
                  <br />
                  <a href='tel:+59167898045'>{texto.contacto.usa.telefono}</a>
                </div>
                <div className='col-md'>
                  <img src={bolivia} alt='Bandera Bolivia' />
                  <h4>{texto.contacto.bolivia.nombre}</h4>
                  <a href='mailto:fabiola@daxparts.com'>
                    {texto.contacto.bolivia.email}
                  </a>
                  <br />
                  <a href='tel:+59167898045'>{texto.contacto.bolivia.telefono}</a>
                </div>
              </div>

              <div className='row'>
                <div className='col-md'>
                  <img src={peru} alt='Bandera Peru' />
                  <h4>{texto.contacto.peru.nombre}</h4>
                  <a href='mailto:em@daxparts.com'>{texto.contacto.peru.email}</a>
                  <br />
                  <a href='tel:+59167898045'>{texto.contacto.peru.telefono}</a>
                </div>
                <div className='col-md'>
                  <img src={paraguay} alt='Bandera Paraguay' />
                  <h4>{texto.contacto.paraguay.nombre}</h4>
                  <a href='mailto:ventaspy@daxparts.com'>
                    {texto.contacto.paraguay.email}
                  </a>
                  <br />
                  <a href='tel:+59167898045'>{texto.contacto.paraguay.telefono}</a>
                </div>
              </div>
            </div>

            {/* Columna (Formulario) */}
            <div className='col-sm'>
              <div>
                <img src={mapa} alt='Mapa' />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacto;
