import React, { Component } from 'react';
import Spinner from '../spinner/Spinner';
import axios from 'axios';
import './Cotizacion.css';

class Cotizacion extends Component {
  constructor(props) {
    super(props);
    this.state = { buscar: '', parte: '5' };
  }

  // Llamar back-end (server) para obtener busqueda de parte
  async componentDidMount() {
    const buscarData = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${this.state.parte}`
    );
    // Guardar data en buscar state
    this.setState({ buscar: buscarData.data });
    // Mostrar data en a consola
    console.log(this.state.buscar);
  }

  render() {
    // Mientras "buscar state" este vacio, spinner va a correr
    if (this.state.buscar.length === 0) {
      return <Spinner />;
    }
    // Desestructuración del props idioma
    const texto = { ...this.props.idioma };
    return (
      <div className='container-fluid cotizacion-contenido'>
        <div className='container cotizacion-title'>
          <p>
            {texto.cotizacion.titulo} {this.state.parte}
          </p>
        </div>

        <div className='container cotizacion-table'>
          <div className='table-responsive'>
            <table className='table table-striped table-bordered'>
              <thead className='thead-dark'>
                <tr>
                  <th scope='col'>{texto.cotizacion.tabla.col1}</th>
                  <th scope='col'>{texto.cotizacion.tabla.col2}</th>
                  <th scope='col'>{texto.cotizacion.tabla.col3}</th>
                  <th scope='col'>{texto.cotizacion.tabla.col4}</th>
                  <th scope='col'>{texto.cotizacion.tabla.col5}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>{this.state.buscar.username}</th>
                  <td>{this.state.buscar.address.street}</td>
                  <td>{this.state.buscar.address.suite}</td>
                  <td>{this.state.buscar.address.geo.lat}</td>
                  <td>{this.state.buscar.address.geo.lng}</td>
                </tr>
                <tr>
                  <th scope='row'>{this.state.buscar.username}</th>
                  <td>{this.state.buscar.address.street}</td>
                  <td>{this.state.buscar.address.suite}</td>
                  <td>{this.state.buscar.address.geo.lat}</td>
                  <td>{this.state.buscar.address.geo.lng}</td>
                </tr>
                <tr>
                  <th scope='row'>{this.state.buscar.username}</th>
                  <td>{this.state.buscar.address.street}</td>
                  <td>{this.state.buscar.address.suite}</td>
                  <td>{this.state.buscar.address.geo.lat}</td>
                  <td>{this.state.buscar.address.geo.lng}</td>
                </tr>
                <tr>
                  <th scope='row'>{this.state.buscar.username}</th>
                  <td>{this.state.buscar.address.street}</td>
                  <td>{this.state.buscar.address.suite}</td>
                  <td>{this.state.buscar.address.geo.lat}</td>
                  <td>{this.state.buscar.address.geo.lng}</td>
                </tr>
                <tr>
                  <th scope='row'>{this.state.buscar.username}</th>
                  <td>{this.state.buscar.address.street}</td>
                  <td>{this.state.buscar.address.suite}</td>
                  <td>{this.state.buscar.address.geo.lat}</td>
                  <td>{this.state.buscar.address.geo.lng}</td>
                </tr>
                {/* <tr>
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
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Cotizacion;
