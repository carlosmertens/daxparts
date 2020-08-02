import React, { useEffect, useState } from 'react';
import Spinner from '../spinner/Spinner';
import axios from 'axios';
import config from '../../config';
import './Cotizacion.css';
import { Link } from 'react-router-dom';

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
  const texto = { ...props.idioma };
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
  console.log(props.parte);
  return (
    <div className='container-fluid cotizacion-contenido'>
      <div className='container cotizacion-title'>
        <p>{texto.cotizacion.titulo}</p>
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
          <div className='Container bg-secondary'>
            <p className='nota text-white'>
              Nombres OEM, logos y numeros de partes son usados para referencia. No
              implicamos que nuestros productos o servicios estén afiliados,
              patrocinados o aprobados por los fabricantes de equipos originales
            </p>
          </div>
          <div className='container d-flex justify-content-center'>
            <div className='beneficios bg-dark'>
              <h4 className='titulo-jumbo'>Si eres usuario podras:</h4>
              <p className='beneficios-jumbo'>Crear varias cotizaciones</p>
              <p className='beneficios-jumbo'>
                Ingresar cientos de codigos de manera sencilla
              </p>
              <p className='beneficios-jumbo'>Email o imprimiar tus cotizaciones</p>
              <p className='beneficios-jumbo'>Hacer seguimientos a tus ordenes</p>
              <p className='beneficios-jumbo'>
                Acceder a miles de piezas usadas y reconstruidas
              </p>
              <p className='beneficios-jumbo'>
                Comprar repuestos de reemplazos de diferentes marcas
              </p>
              <p className='beneficios-jumbo'>y mucho mas...</p>
              <Link to='/crear'>
                <button className='btn mb-2' type='button'>
                  Crear
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cotizacion;
