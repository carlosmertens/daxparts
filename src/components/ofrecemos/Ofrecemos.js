import React, { Component } from 'react';
import './Ofrecemos.css';

import { ReactComponent as Bulldozer } from '../../images/bulldozer.svg';
import { ReactComponent as Crane } from '../../images/crane.svg';
import { ReactComponent as Machine } from '../../images/machine.svg';
import { ReactComponent as Page } from '../../images/Page-1.svg';
import { ReactComponent as Tow } from '../../images/tow-truck.svg';
import { ReactComponent as Truck } from '../../images/truck.svg';

class Ofrecemos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // Desestructuración del props idioma
    const texto = { ...this.props.idioma };
    return (
      <div className='container-fluid ofrecemos-contenido'>
        <div className='container ofrecemos-title'>
          <h1>{texto.ofrecemos.titulo}</h1>
        </div>

        <div className='container ofrecemos-subtitle'>
          <h4>{texto.ofrecemos.subtitulo}</h4>
        </div>

        {/* Grid de contenido */}
        <div className='container ofrecemos-contenido'>
          <div className='row ofrecemos-opciones bg-danger align-items-center'>
            <div className='col-sm'>
              <div className='container opcion'>
                <div className='row'>
                  <div className='col ofrecemos-icono bg-primary'>
                    <Bulldozer />
                  </div>
                  <div className='col ofrecemos-texto bg-secondary'>
                    <p>
                      <span>{texto.ofrecemos.span.a1}</span> {texto.ofrecemos.span.a2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm'>
              <div className='container option'>
                <div className='row'>
                  <div className='col ofrecemos-icono bg-success'>
                    <Crane />
                  </div>
                  <div className='col ofrecemos-texto bg-warning'>
                    <p>
                      <span>{texto.ofrecemos.span.b1}</span> {texto.ofrecemos.span.b2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm'>
              <div className='container option'>
                <div className='row'>
                  <div className='col ofrecemos-icono bg-primary'>
                    <Page />
                  </div>
                  <div className='col ofrecemos-texto bg-secondary'>
                    <p>
                      <span>{texto.ofrecemos.span.c1}</span> {texto.ofrecemos.span.c2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row ofrecemos-opciones bg-info align-items-center'>
            <div className='col-sm'>
              <div className='container option'>
                <div className='row'>
                  <div className='col ofrecemos-icono bg-secondary'>
                    <Machine />
                  </div>
                  <div className='col ofrecemos-texto bg-primary'>
                    <p>
                      <span>{texto.ofrecemos.span.d1}</span> {texto.ofrecemos.span.d2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm'>
              <div className='container option'>
                <div className='row'>
                  <div className='col ofrecemos-icono bg-success'>
                    <Tow />
                  </div>
                  <div className='col ofrecemos-texto bg-warning'>
                    <p>
                      <span>{texto.ofrecemos.span.e1}</span> {texto.ofrecemos.span.e2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm'>
              <div className='container'>
                <div className='row'>
                  <div className='col ofrecemos-icono bg-secondary'>
                    <Truck />
                  </div>
                  <div className='col ofrecemos-texto bg-primary'>
                    <p>
                      <span>{texto.ofrecemos.span.f1}</span> {texto.ofrecemos.span.f2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ofrecemos;
