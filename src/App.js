import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// Component imports
import Navbar from './components/navbar/Navbar';

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Route path='/' component={Navbar} />
      </Router>
    );
  }
}

export default App;
