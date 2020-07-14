import React from 'react';
import './Somos.css';

const somosTexto =
  'Desde el 2018, DAX se ha especializado en facilitar repuestos para todo tipo de maquinaria a sus clientes en Latino América. Inicialmente atendiendo el rubro de la construcción en Bolivia, Perú, y Paraguay; hoy el servicio de DAX se extiende a diversos países y rubros. Su pasión por la tecnología; le ha permitido desarrollar tecnología propia que permite a sus clientes adquirir repuestos de manera eficiente, económica y en un solo lugar. Permitiendo a sus clientes beneficiarse de ahorros en repuestos, fletes, y tiempo.';

function Somos() {
  return (
    <div className='somos-contenido'>
      <div className='container somos-title'>
        <h1>Quiene somos?</h1>
      </div>

      <div className='container somos-texto'>
        <p>{somosTexto}</p>
      </div>

      <div className='container-fluid somos-banner'>
        <div className='row'>
          <div className='col'>
            <h3>
              250.000+ <br />
              Repuestos
            </h3>
          </div>
          <div className='col'>
            <h3>
              50+ <br />
              Fabricantes
            </h3>
          </div>
          <div className='col'>
            <h3>
              13+ <br />
              Años al mercado
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Somos;
