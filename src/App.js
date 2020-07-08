import React from 'react';
import './App.css';
// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// Component imports
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div>
        <h1 className='display-2'>Sanity Check!!!</h1>
      </div>
    </>
  );
}

export default App;
