import React from 'react';
import { Link } from 'react-router-dom';
import './Tutorial.css';
import IconVideos from '../../images/IconVideos.png';
import johnD from '../../images/john-deere.png';
import newholland from '../../images/newholland.png';
import cat from '../../images/cat.png';
import botcat from '../../images/bobcat.png';

function Tutorial() {
  return (
    <div className='container-fluid tutorial-contenido'>
      <div className='container tutorial-title'>
        <h1>Tutoriales</h1>
      </div>

      <div className='tutorial-subtitle'>
        <p className='subtitulo'>
          Te compartimos los siguientes links donde puedes tener acceso a manuales
          de parte de manera gratuita:
        </p>
      </div>

      <div className='container tutorial-contenido'>
        <div className='row'>
          {/* === Columna1 === */}
          <div className='col-sm'>
            <p>Usar Manuales de partes en linea</p>
            <span>
              puedes tener acceso a manuales de manera
              <br />
              gratuita,
              <Link to='/hacemos'>
                <em> Has click para ir al tuturial.</em>
              </Link>
            </span>
            <div className='container logos'>
              <img className='logo-marcas' src={johnD} alt='John-Deere' />
              <img className='logo-marcas' src={newholland} alt='New Holland' />
              <img className='logo-marcas' src={cat} alt='Cat' />
              <img className='logo-marcas' src={botcat} alt='BootCat' />
            </div>
          </div>
          {/* === Columna2 === */}
          <div className='col-sm'>
            <div>
              <p> Otros videos que pueden interesarte</p>
              {/* Icon */}
            </div>
            <div>{/* videos */}</div>
            <div className='container'>
              <p className='texto-logo-tutorial'>como usar nuestra pagina</p>
              <Link to='/tutorial'>
                <img
                  src={IconVideos}
                  alt='Videos de iconos'
                  className='logo-video'
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tutorial;
