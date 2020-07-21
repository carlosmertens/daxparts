import React, { Component } from 'react';
import navLogo from '../../images/logoNav.png';
import './Noparte.css';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../../actions/openModal';

import Ingresar from '../crear/Crear';
import Buscamos from '../buscamos/Buscamos';

class Noparte extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  closeModal = () => {
    this.props.openModal('closed', '');
  };

  render() {
    return (
      <>
        <div className='modal-logo d-flex justify-content-center'>
          <img src={navLogo} alt='Dax Logo' />
        </div>

        <div className='modal-body'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              QUE HACER CUANDO NO TIENES TU NUMERO DE PARTE
            </h5>
          </div>
          <div className='modal-body'>
            <div className='row'>
              <div className='col'>
                <Link to='/tutorial/'>
                  <button className='que-hacer-button' onClick={this.closeModal}>
                    Manuales en linea gratuitos
                  </button>
                </Link>
              </div>
              <div className='col'>
                <button
                  className='que-hacer-button'
                  onClick={() => {
                    this.props.openModal('open', <Buscamos />);
                  }}>
                  Avisanos que necesitas y nosotros lo buscamos
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='modal-footer d-flex justify-content-center'>
          <div>
            Ya tienes una cuenta?{' '}
            <span
              className='pointer'
              onClick={() => {
                this.props.openModal('open', <Ingresar />);
              }}>
              Pincha aqui
            </span>
          </div>
        </div>
      </>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Noparte);
