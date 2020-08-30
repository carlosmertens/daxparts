import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../../actions/openModal';
import navLogo from '../../images/logoNav.png';
import Ingresar from '../login/Login';
import './Buscamos.css';

const Buscamos2 = (props) => {
  const idioma = props.idioma;
  const [marcaMotor, setMarcaMotor] = useState('');
  const [modeloMotor, setModeloMotor] = useState('');
  const [serieMotor, setSerieMotor] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [descripcion, setDescripcion] = useState('');

  // Funcion para cerrar modal
  // Conponent to close the modal
  const closeModal = () => {
    props.openModal('closed', '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
    console.log(marcaMotor);
    console.log(modeloMotor);
    console.log(serieMotor);
    console.log(cantidad);
    console.log(descripcion);
  };

  return (
    <>
      <div className='modal-logo d-flex justify-content-center'>
        <img src={navLogo} alt='Dax Logo' />
      </div>

      <hr />

      <div className='modal-body'>
        <form onSubmit={handleSubmit}>
          <h4>Datos del Motor</h4>
          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder='Marca de tu motor'
              onChange={(e) => setMarcaMotor(e.target.value)}
              value={marcaMotor}
            />
          </div>

          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder='Modelo de tu motor'
              onChange={(e) => setModeloMotor(e.target.value)}
              value={modeloMotor}
            />
          </div>

          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder='Serie de tu motor'
              onChange={(e) => setSerieMotor(e.target.value)}
              value={serieMotor}
            />
          </div>
          <h4>Datos de la orden</h4>

          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder='Cantidad'
              onChange={(e) => setCantidad(e.target.value)}
              value={cantidad}
            />
          </div>

          <div className='form-group d-flex justify-content-center'>
            <textarea
              type='text'
              className='description form-control mr-sm-2'
              placeholder='Describe la parte...'
              onChange={(e) => setDescripcion(e.target.value)}
              value={descripcion}></textarea>
          </div>

          <div className='boton-form'>
            <button type='submit' className='btn'>
              {idioma.buscamos.botonCotizar}
            </button>
          </div>
        </form>
      </div>

      <div className='modal-footer d-flex justify-content-center'>
        <div>
          {idioma.buscamos.cambiarModal}{' '}
          <span
            className='pointer'
            onClick={() => {
              props.openModal('open', <Ingresar idioma={idioma} />);
            }}
            style={{ color: '#fca728' }}>
            {idioma.buscamos.cambiarEnlace}
          </span>
        </div>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    siteModal: state.siteModal,
  };
}

function mapDispatchToProps(dispacher) {
  return bindActionCreators(
    {
      openModal: openModal,
    },
    dispacher
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscamos2);
