import React, { Component } from 'react';
import Spinner from '../spinner/Spinner';
import axios from 'axios';
import config from '../../config';
import './Cotizacion.css';

class Cotizacion extends Component {
  constructor(props) {
    super(props);
    this.state = { parte: '5', busqueda: [] };
  }

  componentDidMount() {
    // Prueba con API de peliculas (TheMovieDB)
    const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${config.api_key}`;
    axios.get(nowPlayingUrl).then((response) => {
      console.log(response.data);
      const movieData = response.data.results;
      this.setState({
        busqueda: movieData,
      });
    });
  }

  render() {
    // Mientras "buscar state" este vacio, spinner va a correr
    if (this.state.busqueda.length === 0) {
      return <Spinner />;
    }
    // Desestructuración del props idioma
    const texto = { ...this.props.idioma };
    // Bucle el resultado y formar las lineas de la tabla
    const movieGrid = this.state.busqueda.map((item, index) => {
      return (
        <tr key={index}>
          <th scope='row'>{item.title}</th>
          <td>{item.id}</td>
          <td>{item.original_language}</td>
          <td>{item.vote_count}</td>
          <td>{item.release_date}</td>
        </tr>
      );
    });
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
              <tbody>{movieGrid}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Cotizacion;
