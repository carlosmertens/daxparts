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
    console.log(this.props);
    return (
      <>
        <div className='modal-logo d-flex justify-content-center'>
          <img src={navLogo} alt='Dax Logo' />
        </div>

        <div className='modal-body'>
          <div className='modal-header'>
            <h4 className='modal-title'>{this.props.idioma.home.modal.titulo}</h4>
          </div>
          <div className='modal-body d-flex justify-content-center'>
            <div className='row'>
              <div className='col'>
                <Link to='/tutorial/'>
                  <button className='que-hacer-button' onClick={this.closeModal}>
                    {this.props.idioma.home.modal.enlaceTutorial}
                  </button>
                </Link>
              </div>
              <div className='col'>
                <button
                  className='que-hacer-button'
                  onClick={() => {
                    this.props.openModal(
                      'open',
                      <Buscamos idioma={this.props.idioma} />
                    );
                  }}>
                  {this.props.idioma.home.modal.enlaceBuscamos}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='modal-footer d-flex justify-content-center'>
          <div>
            {this.props.idioma.home.modal.tienesCuenta}{' '}
            <span
              className='pointer'
              onClick={() => {
                this.props.openModal('open', <Ingresar idioma={this.props.idioma} />);
              }}>
              {this.props.idioma.home.modal.click}
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
