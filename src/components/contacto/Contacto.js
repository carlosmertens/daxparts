import React from 'react';
import './Contacto.css';
import usa from '../../images/usa.png';
import bolivia from '../../images/bolivia.png';
import peru from '../../images/peru.png';
import paraguay from '../../images/paraguay.png';

function Contacto() {
  return (
    <div className='container-fluid contacto-contenido'>
      <div className='container contacto-title'>
        <h1>Contáctanos!</h1>
      </div>

      <div className='container contacto-contenido'>
        <div className='row'>
          {/* Columna 1 (Banderas) */}
          <div className='col-sm'>
            <div className='row'>
              {/* row banderas */}
              <div className='col-md'>
                <img src={bolivia} alt='Bandera Bolivia' />
                <h4>Dax Parts Bolivia</h4>
                <a href='mailto:fabiola@daxparts.com'>fabiola@daxparts.com</a>
                <br />
                <a href='tel:+59167898045'>+591-678-98045</a>
              </div>
              <div className='col-md'>
                <img src={peru} alt='Bandera Peru' />
                <h4>Dax Parts Peru</h4>
                <a href='mailto:em@daxparts.com'>em@daxparts.com</a>
                <br />
                <a href='tel:+59167898045'>+591-678-98045</a>
              </div>
            </div>

            <div className='row'>
              <div className='col-md'>
                <img src={paraguay} alt='Bandera Paraguay' />
                <h4>Dax Parts Paraguay</h4>
                <a href='mailto:ventaspy@daxparts.com'>ventaspy@daxparts.com</a>
                <br />
                <a href='tel:+59167898045'>+591-678-98045</a>
              </div>
              <div className='col-md'>
                <img src={usa} alt='Bandera Usa' />
                <h4>Dax Parts Usa</h4>
                <a href='mailto:dax@daxparts.com'>dax@daxparts.com</a>
                <br />
                <a href='tel:+59167898045'>+591-678-98045</a>
              </div>
            </div>
          </div>

          {/* Columna (Formulario) */}
          <div className='col-sm'>
            <p>
              Nos gusta conocer y conversar con nuestros nuevos clientes. Comienza
              enviándonos un mensaje y nos pondremos en contacto en Breve.
            </p>
            <h4>Formulario de contacto</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
