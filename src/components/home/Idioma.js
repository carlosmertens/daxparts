import React from 'react';
import './Home.css';

const Idioma = (props) => {
  // console.log(props);
  return (
    <select
      className='btn btn-idioma'
      value={props.lang}
      onChange={props.cambiarIdioma}>
      <option>Español</option>
      <option>English</option>
    </select>
  );
};

export default Idioma;