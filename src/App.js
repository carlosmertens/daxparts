import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Route path='/' component={Navbar} />
        <Route exact path='/' component={Home} />
      </Router>
    );
  }
}

export default App;
