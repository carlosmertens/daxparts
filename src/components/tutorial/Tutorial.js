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
              <div className='row'>
                <p>
                  Usar Manuales de partes en linea <br />
                  <span>
                    puedes tener acceso a manuales de manera gratuita. <br />
                    <Link to='/hacemos'>
                      <em className='tutorial-enlace'>
                        Has click para ir al tuturial.
                      </em>
                    </Link>
                  </span>
                </p>
              </div>
            </div>
            <div className='container'>
              <div className='row'>
                <div className='col'>
                  <iframe
                    width='121'
                    height='65'
                    title='Video1'
                    src='https://www.youtube.com/embed/4jnCVogNCtc'></iframe>
                </div>
                <div className='col'>
                  <span className='tutorial-video-texto'>Video 1</span>
                </div>
              </div>
            </div>

            <div className='container'>
              <div className='row'>
                <div className='col'>
                  <iframe
                    width='121'
                    height='65'
                    title='Video1'
                    src='https://www.youtube.com/embed/4jnCVogNCtc'></iframe>
                </div>
                <div className='col'>
                  <span className='tutorial-video-texto'>Video 2</span>
                </div>
              </div>
            </div>

            <div className='container'>
              <div className='row'>
                <div className='col'>
                  <iframe
                    width='121'
                    height='65'
                    title='Video1'
                    src='https://www.youtube.com/embed/4jnCVogNCtc'></iframe>
                </div>
                <div className='col'>
                  <span className='tutorial-video-texto'>Video 3</span>
                </div>
              </div>
            </div>
          </div>
          {/* === Columna 2 === */}
          <div className='col-sm'>
            <div className='container'>
              <div className='row'>
                <p>
                  Como usar nuestra pagina <br />
                  <span>
                    te enseñamos como de manera sencilla y breve. <br />
                    <Link to='/hacemos'>
                      <em className='tutorial-enlace'>
                        Has click para ir al tuturial.
                      </em>
                    </Link>
                  </span>
                </p>
              </div>
            </div>

            <div className='container'>
              <div className='row'>
                <div className='col'>
                  <iframe
                    width='121'
                    height='65'
                    title='Video1'
                    src='https://www.youtube.com/embed/4jnCVogNCtc'></iframe>
                </div>
                <div className='col'>
                  <span className='tutorial-video-texto'>Video 1</span>
                </div>
              </div>
            </div>

            <div className='container'>
              <div className='row'>
                <div className='col'>
                  <iframe
                    width='121'
                    height='65'
                    title='Video1'
                    src='https://www.youtube.com/embed/4jnCVogNCtc'></iframe>
                </div>
                <div className='col'>
                  <span className='tutorial-video-texto'>Video 2</span>
                </div>
              </div>
            </div>

            <div className='container'>
              <div className='row'>
                <div className='col'>
                  <iframe
                    width='121'
                    height='65'
                    title='Video1'
                    src='https://www.youtube.com/embed/4jnCVogNCtc'></iframe>
                </div>
                <div className='col'>
                  <span className='tutorial-video-texto'>Video 3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
