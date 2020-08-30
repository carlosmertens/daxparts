import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../../actions/openModal';
import navLogo from '../../images/logoNav.png';
import Ingresar from '../login/Login';
import Buscamos2 from './Buscamos2';

// TODO: Wait for the API from DaxParts to know exactly what information is
// needed in this section and Buscamos2

const Buscamos = (props) => {
  const idioma = props.idioma;
  const [marcaEquipo, setMarcaEquipo] = useState('');
  const [modeloEquipo, setModeloEquipo] = useState('');
  const [serieEquipo, setSerieEquipo] = useState('');
  // const [marcaMotor, setMarcaMotor] = useState('');
  // const [modeloMotor, setModeloMotor] = useState('');
  // const [serieMotor, setSerieMotor] = useState('');
  // const [cantidad, setCantidad] = useState('');
  // const [descripcion, setDescripcion] = useState('');
  const [nombre, setNombre] = useState('');
  const [pais, setPais] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');

  // Funcion para cerrar modal
  // Conponent to close the modal
  // const closeModal = () => {
  //   props.openModal('closed', '');
  // };

  return (
    <>
      <div className='modal-logo d-flex justify-content-center'>
        <img src={navLogo} alt='Dax Logo' />
      </div>

      <hr />

      <div className='modal-body'>
        <form>
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

          <h4>{idioma.buscamos.titulo1}</h4>
          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={idioma.buscamos.marca}
              onChange={(e) => setMarcaEquipo(e.target.value)}
              value={marcaEquipo}
            />
          </div>

          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={idioma.buscamos.modelo}
              onChange={(e) => setModeloEquipo(e.target.value)}
              value={modeloEquipo}
            />
          </div>

          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={idioma.buscamos.serie}
              onChange={(e) => setSerieEquipo(e.target.value)}
              value={serieEquipo}
            />
          </div>

          <div className='boton-form'>
            <button
              className='btn'
              onClick={() => {
                props.openModal('open', <Buscamos2 idioma={props.idioma} />);
              }}>
              Continuar
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

export default connect(mapStateToProps, mapDispatchToProps)(Buscamos);
