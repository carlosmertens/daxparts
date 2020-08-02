import React from 'react';
import './Hacemos.css';

const Hacemos = ({ idioma }) => (
  <div className='container-fluid hacemos'>
    <div className='container hacemos-title'>
      <h1>{idioma.hacemos.titulo}</h1>
    </div>

    <div className='container'>
      <div className='row'>
        <div className='col-lg-6'>
          <p className='hacemos-texto'>{idioma.hacemos.contenido}</p>
        </div>
        <div className='col-lg-6'>
          <div className='dax-video embed-responsive embed-responsive-16by9'>
            <iframe
              className='embed-responsive-item'
              title='Venta de Repuestos DAX'
              src='https://www.youtube.com/embed/4jnCVogNCtc'
              frameBorder='0'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Hacemos;
