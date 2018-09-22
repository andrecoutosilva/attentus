import React, { Component } from 'react';
import Home from './scenes/home/Home';
import MainNavbar from './components/navbar/MainNavbar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNavbar />
        <Home />
      </div>
    );
  }
}

export default App;
