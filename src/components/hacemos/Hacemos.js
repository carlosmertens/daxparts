import React from 'react';
import './Hacemos.css';

function Hacemos() {
  return (
    <div className='container-fluid hacemos'>
      <div className='container hacemos-title'>
        <h1>¿Que Hacemos?</h1>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <p className='hacemos-texto'>
              Te ofrecemos un servicio fácil y sencillo de búsqueda, cotización y
              compra de repuestos para equipo pesado, agrícola y de construcción.
              Nuestro sistema te ofertará las mejores marcas, precios y tiempos de
              entrega de Bolivia y el mundo. Tú decides cual comprar y te lo
              enviamos. No necesitas llamar a diferentes tiendas para encontrar tu
              parte, nosotros la encontramos por ti. Todo en un solo lugar.
            </p>
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
}

export default Hacemos;
