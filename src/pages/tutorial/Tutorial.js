import React from 'react';
import { Link } from 'react-router-dom';
import './Tutorial.css';

const Tutorial = ({ idioma }) => (
  <div className='container-fluid tutorial'>
    <div className='container tutorial-titulo'>
      <h1>
        <strong>{idioma.tutorial.titulo}</strong>
      </h1>
    </div>

    <div className='container tutorial-subtitulo'>
      <p>{idioma.tutorial.descripcion}</p>
    </div>

    <div className='container tutorial-contenido'>
      <div className='row'>
        {/* === Columna 2 === */}
        <div className='col-sm'>
          <div className='container'>
            <div className='row'>
              <p>
                {idioma.tutorial.columna2Titulo} <br />
                <span>
                  {idioma.tutorial.columna2Texto} <br />
                  <Link to='/hacemos'>
                    <em className='tutorial-enlace'>
                      {idioma.tutorial.enlaceTutorial}
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
        {/* === Columna 1 === */}
        <div className='col-sm'>
          <div className='container'>
            <div className='row'>
              <p>
                {idioma.tutorial.columna1Titulo} <br />
                <span>
                  {idioma.tutorial.columna1Texto} <br />
                  <Link to='/hacemos'>
                    <em className='tutorial-enlace'>
                      {idioma.tutorial.enlaceTutorial}
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

export default Tutorial;
