import React, { Component } from 'react';
import './Cotizacion.css';

class Cotizacion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='container-fluid cotizacion-contenido'>
        <div className='container cotizacion-title'>
          <h1>Resultado</h1>
        </div>
      </div>
    );
  }
}

export default Cotizacion;
