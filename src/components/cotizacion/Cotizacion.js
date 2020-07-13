import React, { Component } from 'react';
import Spinner from '../spinner/Spinner';
import axios from 'axios';
import './Cotizacion.css';

class Cotizacion extends Component {
  constructor(props) {
    super(props);
    this.state = { buscar: [] };
  }

  // Llamar back-end (server) para obtener busqueda de parte
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

        <div className='container cotizacion-table'>
          <div className='table-responsive'>
            <table className='table table-striped table-bordered'>
              <thead className='thead-dark'>
                <tr>
                  <th scope='col'>Descripcion</th>
                  <th scope='col'>Aplicacion</th>
                  <th scope='col'>Tipo</th>
                  <th scope='col'>Precio</th>
                  <th scope='col'>Tiempo de Entrega</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>descripcion test</th>
                  <td>aplicacion test</td>
                  <td>tipo test</td>
                  <td>precio test</td>
                  <td>entrega test</td>
                </tr>
                <tr>
                  <th scope='row'>Test 2</th>
                  <td>Test 2</td>
                  <td>Test 2</td>
                  <td>Test 2</td>
                  <td>Test 2</td>
                </tr>
                <tr>
                  <th scope='row'>descripcion 3</th>
                  <td>aplicacion 3</td>
                  <td>tipo 3</td>
                  <td>precio 3</td>
                  <td>entrega 3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Cotizacion;
