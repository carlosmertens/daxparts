import React from 'react';
import './Ofrecemos.css';

import { ReactComponent as Bulldozer } from '../../images/bulldozer.svg';
import { ReactComponent as Crane } from '../../images/crane.svg';
import { ReactComponent as Machine } from '../../images/machine.svg';
import { ReactComponent as Page } from '../../images/Page-1.svg';
import { ReactComponent as Harvester } from '../../images/harvester.svg';
import { ReactComponent as Truck } from '../../images/truck.svg';

const Ofrecemos = ({ idioma }) => (
  <div className='container-fluid ofrecemos-contenido'>
    <div className='container ofrecemos-titulo'>
      <h1>
        <strong>{idioma.ofrecemos.titulo}</strong>
      </h1>
    </div>

    <div className='container ofrecemos-subtitle'>
      <h4>{idioma.ofrecemos.subtitulo}</h4>
    </div>

    <div className='container ofrecemos-contenido'>
      <div className='row ofrecemos-opciones align-items-center'>
        <div className='col-md'>
          <div className='container oferta'>
            <div className='row'>
              <div className='col ofrecemos-icono'>
                <Bulldozer />
              </div>
              <div className='col ofrecemos-texto'>
                <p>
                  <span>
                    <strong>{idioma.ofrecemos.span.a1}</strong>
                  </span>{' '}
                  {idioma.ofrecemos.span.a2}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md'>
          <div className='container oferta'>
            <div className='row'>
              <div className='col ofrecemos-icono'>
                <Crane />
              </div>
              <div className='col ofrecemos-texto'>
                <p>
                  <span>
                    <strong>{idioma.ofrecemos.span.b1}</strong>
                  </span>{' '}
                  {idioma.ofrecemos.span.b2}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md'>
          <div className='container oferta'>
            <div className='row'>
              <div className='col ofrecemos-icono'>
                <Page />
              </div>
              <div className='col ofrecemos-texto'>
                <p>
                  <span>
                    <strong>{idioma.ofrecemos.span.c1}</strong>
                  </span>{' '}
                  {idioma.ofrecemos.span.c2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row ofrecemos-opciones align-items-center'>
        <div className='col-md'>
          <div className='container oferta'>
            <div className='row'>
              <div className='col ofrecemos-icono'>
                <Machine />
              </div>
              <div className='col ofrecemos-texto'>
                <p>
                  <span>
                    <strong>{idioma.ofrecemos.span.d1}</strong>
                  </span>{' '}
                  {idioma.ofrecemos.span.d2}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md'>
          <div className='container oferta'>
            <div className='row'>
              <div className='col ofrecemos-icono'>
                <Harvester />
              </div>
              <div className='col ofrecemos-texto'>
                <p>
                  <span>
                    <strong>{idioma.ofrecemos.span.e1}</strong>
                  </span>{' '}
                  {idioma.ofrecemos.span.e2}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md'>
          <div className='container oferta'>
            <div className='row'>
              <div className='col ofrecemos-icono'>
                <Truck />
              </div>
              <div className='col ofrecemos-texto'>
                <p>
                  <span>
                    <strong>{idioma.ofrecemos.span.f1}</strong>
                  </span>{' '}
                  {idioma.ofrecemos.span.f2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Ofrecemos;
