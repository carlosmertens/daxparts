import React, { useEffect, useState } from 'react';
import Spinner from '../spinner/Spinner';
import axios from 'axios';
import config from '../../config';
import './Cotizacion.css';
import Ingresar from '../ingresar/Ingresar';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../../actions/openModal';

const Cotizacion = (props) => {
  const [busqueda, setBusqueda] = useState([]);
  useEffect(() => {
    // Prueba con API de peliculas (TheMovieDB)
    const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${config.api_key}`;
    axios.get(nowPlayingUrl).then((response) => {
      // console.log(response.data);
      const movieData = response.data.results;
      setBusqueda(movieData);
    });
  }, []);

  // Mientras "buscar state" este vacio, spinner va a correr
  if (busqueda.length === 0) {
    return <Spinner />;
  }
  // Desestructuración del props idioma
  const idioma = { ...props.idioma };
  // Bucle el resultado y formar las lineas de la tabla
  const movieGrid = busqueda.map((item, index) => {
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
          {idioma.cotizacion.titulo} {props.parte}
        </p>
      </div>

      <div className='container cotizacion-table'>
        <div className='table-responsive'>
          <table className='table table-striped table-bordered'>
            <thead className='thead-dark'>
              <tr>
                <th scope='col'>{idioma.cotizacion.tabla.col1}</th>
                <th scope='col'>{idioma.cotizacion.tabla.col2}</th>
                <th scope='col'>{idioma.cotizacion.tabla.col3}</th>
                <th scope='col'>{idioma.cotizacion.tabla.col4}</th>
                <th scope='col'>{idioma.cotizacion.tabla.col5}</th>
              </tr>
            </thead>
            <tbody>{movieGrid}</tbody>
          </table>
          <div className='Container bg-secondary'>
            <p className='nota text-white'>
              <span>{idioma.cotizacion.nota}</span> {idioma.cotizacion.notaTexto}
            </p>
          </div>
          <div className='container d-flex justify-content-center'>
            <div className='container beneficios bg-dark'>
              <div className='container row'>
                <h4 className='titulo-jumbo'>{idioma.cotizacion.tituloComprar}</h4>
              </div>
              <div className='row'>
                <div className='col'>
                  <p className='beneficios-jumbo'>{idioma.cotizacion.beneficio1}</p>
                  <p className='beneficios-jumbo'>✓ {idioma.cotizacion.beneficio2}</p>
                  <p className='beneficios-jumbo'>✓ {idioma.cotizacion.beneficio3}</p>
                  <p className='beneficios-jumbo'>✓ {idioma.cotizacion.beneficio4}</p>
                </div>
                <div className='col boton-ordenar'>
                  <button
                    type='button'
                    className='btn btn-comprar mb-2'
                    onClick={() => {
                      props.openModal('open', <Ingresar idioma={props.idioma} />);
                    }}>
                    {idioma.cotizacion.botonComprar}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispacher) {
  return bindActionCreators(
    {
      openModal: openModal,
    },
    dispacher
  );
}

export default connect(null, mapDispatchToProps)(Cotizacion);
