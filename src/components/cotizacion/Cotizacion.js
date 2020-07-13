import React, { Component } from 'react';
import Spinner from '../spinner/Spinner';
import axios from 'axios';
import './Cotizacion.css';

class Cotizacion extends Component {
  constructor(props) {
    super(props);
    this.state = { buscar: [] };
  }

  // Llamar back-end para obtener busqueda de parte
  async componentDidMount() {
    const buscarData = await axios.get(
      'https://jsonplaceholder.typicode.com/users/2'
    );
    // Guardar data en buscar state
    this.setState({ buscar: buscarData.data });
    // Mostrar data en a consola
    console.log(this.state.buscar);
  }

  render() {
    // Mientras buscar state este vacio, spinner va a correr
    if (this.state.buscar.length === 0) {
      return <Spinner />;
    }
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
