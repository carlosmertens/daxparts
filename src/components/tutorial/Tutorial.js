import React from 'react';
import { Link } from 'react-router-dom';
import './Tutorial.css';

const Tutorial = () => {
  return (
    <div className='container-fluid tutorial'>
      <div className='container tutorial-titulo'>
        <h1>Tutoriales</h1>
      </div>

      <div className='container tutorial-subtitulo'>
        <p>
          Te compartimos los siguientes links donde puedes tener acceso a manuales de
          parte de manera gratuita:
        </p>
      </div>

      <div className='container tutorial-contenido'>
        <div className='row'>
          {/* === Columna 1 === */}
          <div className='col-sm'>
            <div className='container'>
              <p>
                Usar Manuales de partes en linea <br />
                <span>
                  puedes tener acceso a manuales de manera gratuita.{' '}
                  <Link to='/hacemos'>
                    <em className='tutorial-enlace'>Has click para ir al tuturial.</em>
                  </Link>
                </span>
              </p>
            </div>
            <div className='container'>
              <div className='row'>
                <iframe
                  className='tutorial-video'
                  width='121'
                  height='65'
                  title='Video1'
                  src='https://www.youtube.com/embed/tgbNymZ7vqY'></iframe>
                <p className='tutorial-video-texto'>Video 1</p>
              </div>
            </div>
          </div>
          {/* === Columna 2 === */}
          <div className='col-sm'>
            <div className='container'>
              <p>
                como usar nuestra pagina <br />
                <span>
                  Te enseñamos como de manera sencilla y breve.{' '}
                  <Link to='/hacemos'>
                    <em className='tutorial-enlace'>Has click para ir al tuturial.</em>
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
