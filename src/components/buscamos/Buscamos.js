import React, { useState } from 'react';
import navLogo from '../../images/logoNav.png';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../../actions/openModal';

import Ingresar from '../login/Login';

const Buscamos = (props) => {
  const idioma = props.idioma;
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [serie, setSerie] = useState('');
  const [nombre, setNombre] = useState('');
  const [pais, setPais] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');

  // Conponent to close the modal
  const closeModal = () => {
    props.openModal('closed', '');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
    console.log(marca);
    console.log(modelo);
    console.log(serie);
    console.log(nombre);
    console.log(pais);
    console.log(email);
    console.log(telefono);
  };
  return (
    <>
      <div className='modal-logo d-flex justify-content-center'>
        <img src={navLogo} alt='Dax Logo' />
      </div>

      <hr />

      <div className='modal-body'>
        <form onSubmit={handleSubmit}>
          <h4>{idioma.buscamos.titulo1}</h4>
          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={idioma.buscamos.marca}
              onChange={(e) => setMarca(e.target.value)}
              value={marca}
            />
          </div>

          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={idioma.buscamos.modelo}
              onChange={(e) => setModelo(e.target.value)}
              value={modelo}
            />
          </div>

          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={idioma.buscamos.serie}
              onChange={(e) => setSerie(e.target.value)}
              value={serie}
            />
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
            }}>
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
