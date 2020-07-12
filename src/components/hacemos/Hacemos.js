import React from 'react';
import './Hacemos.css';

function Hacemos() {
  return (
    <div className='container-fluid hacemos-contenido'>
      <div className='container hacemos-title'>
        <h1>Como lo hacemos?</h1>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-sm'>
            <p className='hacemos-texto'>
              Nuestro sistema de ventas nos permite ofrecer repuestos para varios
              rubros y aplicaciones; con mas de 250,000 distintos repuestos, en
              mas de 50 distintos fabricantes y una red de socios logísticos
              estratégicos. Nuestro servicio es único en el mundo de los
              repuestos.
              <br />
              Los invitamos a mirar el video a continuación, el cual explica
              nuestro servicio y como lo hacemos
            </p>
          </div>
          <div className='col-sm'>
            <div className='embed-responsive embed-responsive-16by9'>
              <iframe
                title='Venta de Repuestos DAX'
                width='560'
                height='315'
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
}

export default Hacemos;
