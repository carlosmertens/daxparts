import React from 'react';
import flagBolivia from '../../images/bolivia.png';
import flagPeru from '../../images/peru.png';
import flagParaguay from '../../images/paraguay.png';
import flagUsa from '../../images/usa.png';

const Pais = (props) => {
  // Logica para seleccionar pais del usuario
  if (props.country === 'Bolivia') {
    return (
      <div>
        <div className='d-flex flex-row'>
          <img src={flagBolivia} alt='Bandera Bolivia' className='bandera' />
          <p className='texto-pais'>
            <strong>Bolivia</strong>
          </p>
        </div>
      </div>
    );
  } else if (props.country === 'Peru') {
    return (
      <div>
        <div className='d-flex flex-row'>
          <img src={flagPeru} alt='Bandera Peru' className='bandera' />
          <p className='texto-pais'>
            <strong>Peru</strong>
          </p>
        </div>
      </div>
    );
  } else if (props.country === 'Paraguay') {
    return (
      <div>
        <div className='d-flex flex-row'>
          <img src={flagParaguay} alt='Bandera Paraguay' className='bandera' />
          <p className='texto-pais'>
            <strong>Paraguay</strong>
          </p>
        </div>
      </div>
    );
  } else if (props.country === 'United States') {
    return (
      <div>
        <div className='d-flex flex-row'>
          <img src={flagUsa} alt='Bandera Usa' className='bandera' />
          <p className='texto-pais'>
            <strong>United States</strong>
          </p>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Pais;
