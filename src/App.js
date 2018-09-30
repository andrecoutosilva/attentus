import React, { Component } from 'react';
import Home from './scenes/home/Home';
import MainNavbar from './components/navbar/MainNavbar';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      addClass : false
    }
  }
  
  themeToggler(e) {
    e.preventDefault();
    
    this.setState( {
        addClass : !this.state.addClass
      }
    )
    return false;
  }

  render() {
    
    let themeClass = ["App"];
    
    if (this.state.addClass) {
      themeClass.push('App-Theme-2');
    }

    return (
      <div className={themeClass.join(' ')}>    
        <MainNavbar themeHandler={this.themeToggler.bind(this)}/>
        <Home />
      </div>
    );
  }
}

export default App;
