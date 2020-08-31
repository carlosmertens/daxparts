import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../../actions/openModal';
import navLogo from '../../images/logoNav.png';
import Ingresar from '../login/Login';
import './Buscamos.css';

const Buscamos2 = (props) => {
  const idioma = props.idioma;

  const [cantidad, setCantidad] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [nombre, setNombre] = useState('');
  const [pais, setPais] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');

  // Funcion para cerrar modal
  // Conponent to close the modal
  const closeModal = () => {
    props.openModal('closed', '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
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

          <h4>{idioma.buscamos.titulo2}</h4>
          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={idioma.buscamos.nombre}
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
            />
          </div>

          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={idioma.buscamos.pais}
              onChange={(e) => setPais(e.target.value)}
              value={pais}
            />
          </div>

          <div className='form-group d-flex justify-content-center'>
            <input
              type='email'
              className='form-control mr-sm-2'
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={idioma.buscamos.telefono}
              onChange={(e) => setTelefono(e.target.value)}
              value={telefono}
            />
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
