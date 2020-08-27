import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../../actions/openModal';
import navLogo from '../../images/logoNav.png';
import Login from '../login/Login';

const SignUp = (props) => {
  const idioma = props.idioma;
  const [empresa, setEmpresa] = useState('');
  const [nombre, setNombre] = useState('');
  const [id, setId] = useState('');
  const [numeroId, setNumeroId] = useState('');
  const [pais, setPais] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [usuario, setUsuario] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  // Conponent to close the modal
  const closeModal = () => {
    props.openModal('closed', '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
    console.log(empresa);
    console.log(nombre);
    console.log(id);
    console.log(numeroId);
    console.log(pais);
    console.log(ciudad);
    console.log(telefono);
    console.log(email);
    console.log(usuario);
    console.log(password1);
    console.log(password2);
  };

  return (
    <>
      <div className='modal-logo d-flex justify-content-center'>
        <img src={navLogo} alt='Dax Logo' />
      </div>

      <hr />

      <div className='modal-body'>
        <form onSubmit={handleSubmit}>
          <h4>{idioma.crear.titulo1}</h4>
          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={idioma.crear.empresa}
              onChange={(e) => setEmpresa(e.target.value)}
              value={empresa}
            />
          </div>

          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={idioma.crear.nombre}
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
            />
          </div>

          <div className='form-group d-flex justify-content-center'>
            <select
              className='form-control'
              onChange={(e) => setId(e.target.value)}
              value={id}>
              <option>{idioma.crear.cedula}</option>
              <option>NIT</option>
              <option>{idioma.crear.pasaporte}</option>
              <option>RUC</option>
            </select>
          </div>

          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={idioma.crear.numero}
              onChange={(e) => setNumeroId(e.target.value)}
              value={numeroId}
            />
          </div>

          <div className='form-group d-flex justify-content-center'>
            <select
              className='form-control'
              onChange={(e) => setPais(e.target.value)}
              value={pais}>
              <option>Bolivia</option>
              <option>USA</option>
              <option>Paraguay</option>
              <option>Peru</option>
            </select>
          </div>

          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={idioma.crear.ciudad}
              onChange={(e) => setCiudad(e.target.value)}
              value={ciudad}
            />
          </div>

          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={idioma.crear.telefono}
              onChange={(e) => setTelefono(e.target.value)}
              value={telefono}
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

          <h4>{idioma.crear.titulo2}</h4>

          <div className='form-group d-flex justify-content-center'>
            <input
              type='text'
              className='form-control mr-sm-2'
              placeholder={idioma.crear.usuario}
              onChange={(e) => setUsuario(e.target.value)}
              value={usuario}
            />
          </div>

          <div className='form-group d-flex justify-content-center'>
            <input
              type='password'
              className='form-control mr-sm-2'
              placeholder={idioma.crear.password1}
              onChange={(e) => setPassword1(e.target.value)}
              value={password1}
            />
          </div>

          <div className='form-group d-flex justify-content-center'>
            <input
              type='password'
              className='form-control mr-sm-2'
              placeholder={idioma.crear.password2}
              onChange={(e) => setPassword2(e.target.value)}
              value={password2}
            />
          </div>

          <div className='boton-form'>
            <button type='submit' className='btn'>
              {idioma.crear.botonCrear}
            </button>
          </div>
        </form>
      </div>

      <div className='modal-footer d-flex justify-content-center'>
        <div>
          {idioma.crear.cambiarModal}{' '}
          <span
            className='pointer'
            onClick={() => {
              this.props.openModal('open', <Login idioma={this.props.idioma} />);
            }}
            style={{ color: '#fca728' }}>
            {idioma.crear.cambiarEnlace}
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
