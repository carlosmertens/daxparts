import React from 'react';
import './Ofrecemos.css';

import excavadoraLogo from '../../images/excavadoraLogo.png';
import gruaLogo from '../../images/gruaLogo.png';
import agricolaLogo from '../../images/agricolaLogo.png';
import elecLogo from '../../images/elecLogo.png';
import camionLogo from '../../images/camionLogo.png';

function Ofrecemos() {
  return (
    <div className='container-fluid ofrecemos-contenido'>
      <div className='container ofrecemos-title'>
        <h1>Que ofrecemos?</h1>
      </div>

      <div className='container'>
        <h4>Repuestos para:</h4>
      </div>

      {/* Grid de contenido */}
      <div className='row justify-content-center'>
        <div className='col-sm'>
          <div className='container ofrecemos-opcion-small'>
            <p>
              <span>Equipo de movimiento de tierra:</span> Excavadoras tractores,
              bull-dozer pala cargadoras motoniveladoras etc.
            </p>
            <img src={excavadoraLogo} alt='Logo' />
          </div>
        </div>
        <div className='col-sm'>
          <div className='container ofrecemos-opcion-small'>
            <p>
              <span>Grúas y equipos de izaje:</span> Grúas Manlift montacargas
              telehandler etc.
            </p>
            <img src={gruaLogo} alt='Logo' />
          </div>
        </div>
        <div className='col-sm'>
          <div className='container ofrecemos-opcion-big'>
            <p>
              <span>Equipo Agrícola:</span> Cosechadoras tractores fumigadoras
              etc.
            </p>
            <img src={agricolaLogo} alt='Logo' />
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm'>
          <div className='ofrecemos-opcion-big'>
            <p>
              <span>Equipos Estacionarios:</span> Generadores, compresores,
              soldadoras, bombas, etc.
            </p>
            <img src={elecLogo} alt='Logo' />
          </div>
        </div>
        <div className='col-sm'>
          <div className='ofrecemos-opcion-big'>
            <p>
              <span>Equipos de Caña:</span> osechadoras Sembradoras etc
            </p>
            <img src={agricolaLogo} alt='Logo' />
          </div>
        </div>
        <div className='col-sm'>
          <div className='ofrecemos-opcion-small'>
            <p>
              <span>Camiones</span> Camiones volquetas equipos especiales etc
            </p>
            <img src={camionLogo} alt='Logo' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ofrecemos;
