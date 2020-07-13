import React, { Component } from 'react';
import './Spinner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faSpinner);

class Spinner extends Component {
  render() {
    return (
      <>
        <div className='spinner-wrapper'>
          <FontAwesomeIcon icon='spinner' size='10x' spin />
        </div>
        <div className='spinner-title'>
          <h2>Buscando en Bolivia y el mundo</h2>
        </div>
      </>
    );
  }
}

export default Spinner;
