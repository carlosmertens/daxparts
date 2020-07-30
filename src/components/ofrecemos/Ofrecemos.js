import React, { Component } from 'react';
import './Ofrecemos.css';

import excavadoraLogo from '../../images/excavadoraLogo.png';
import gruaLogo from '../../images/gruaLogo.png';
import agricolaLogo from '../../images/agricolaLogo.png';
import elecLogo from '../../images/elecLogo.png';
import camionLogo from '../../images/camionLogo.png';

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

        <div className='container'>
          <h4>{texto.ofrecemos.subtitulo}</h4>
        </div>

        {/* Grid de contenido */}
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-sm'>
              <div className='container ofrecemos-opcion-small'>
                <p>
                  <span>{texto.ofrecemos.span.a1}</span> {texto.ofrecemos.span.a2}
                </p>

                <object width='100' data='../../images/bulldozer.svg'>
                  <img
                    loading='lazy'
                    width='100'
                    alt='Germany'
                    src='../../images/bulldozer.svg'
                  />
                </object>

                {/* <img src={excavadoraLogo} alt='Logo' /> */}
              </div>
            </div>
            <div className='col-sm'>
              <div className='container ofrecemos-opcion-small'>
                <p>
                  <span>{texto.ofrecemos.span.b1}</span> {texto.ofrecemos.span.b2}
                </p>
                <img src={gruaLogo} alt='Logo' />
              </div>
            </div>
            <div className='col-sm'>
              <div className='container ofrecemos-opcion-big'>
                <p>
                  <span>{texto.ofrecemos.span.c1}</span> {texto.ofrecemos.span.c2}
                </p>
                <img src={agricolaLogo} alt='Logo' />
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm'>
              <div className='ofrecemos-opcion-big'>
                <p>
                  <span>{texto.ofrecemos.span.d1}</span> {texto.ofrecemos.span.d2}
                </p>
                <img src={elecLogo} alt='Logo' />
              </div>
            </div>
            <div className='col-sm'>
              <div className='ofrecemos-opcion-big'>
                <p>
                  <span>{texto.ofrecemos.span.e1}</span> {texto.ofrecemos.span.e2}
                </p>
                <img src={agricolaLogo} alt='Logo' />
              </div>
            </div>
            <div className='col-sm'>
              <div className='ofrecemos-opcion-small'>
                <p>
                  <span>{texto.ofrecemos.span.f1}</span> {texto.ofrecemos.span.f2}
                </p>
                <img src={camionLogo} alt='Logo' />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ofrecemos;
