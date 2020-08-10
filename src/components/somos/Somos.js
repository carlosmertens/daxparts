import React from 'react';
import './Somos.css';

const Somos = ({ idioma }) => (
  <div className='somos-contenido'>
    <div className='container somos-title'>
      <h1>
        <strong>{idioma.somos.titulo}</strong>
      </h1>
    </div>

    <div className='container somos-texto'>
      <p>{idioma.somos.contenido}</p>
      <h2>{idioma.somos.titulo2}</h2>
      <p>{idioma.somos.contenido2}</p>
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

export default Somos;
