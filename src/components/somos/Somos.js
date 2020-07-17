import React, { Component } from 'react';
import './Somos.css';

// import texto from '../../textos/textos.json';

class Somos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'es',
    };
  }

  render() {
    console.log(this.props);
    return (
      <div className='somos-contenido'>
        <div className='container somos-title'>
          <h1>{this.props.idioma.somos.titulo}</h1>
        </div>

        <div className='container somos-texto'>
          <p>{this.props.idioma.somos.contenido}</p>
        </div>

        <div className='container-fluid somos-banner'>
          <div className='row'>
            <div className='col'>
              <h3>
                250.000+ <br />
                Repuestos
              </h3>
            </div>
            <div className='col'>
              <h3>
                50+ <br />
                Fabricantes
              </h3>
            </div>
            <div className='col'>
              <h3>
                13+ <br />
                Años al mercado
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Somos;
