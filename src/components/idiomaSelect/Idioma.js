import React from 'react';

const Idioma = (props) => {
  // console.log(props);
  return (
    <select className='btn' value={props.lang} onChange={props.cambiarIdioma}>
      <option>Español</option>
      <option>English</option>
    </select>
  );
};

export default Idioma;
