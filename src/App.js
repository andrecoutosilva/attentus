import React, { Component } from 'react';
import Home from './scenes/home/Home';

import Equipa from './scenes/equipa/Equipa';
import QuemSomos from './scenes/quemsomos/QuemSomos';
import Servicos from './scenes/servicos/Servicos';
import Noticias from './scenes/noticias/Noticias';
import Contactos from './scenes/contactos/Contactos';
import Parcerias from './scenes/parcerias/Parcerias';

import MainNavbar from './components/navbar/MainNavbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      addClass : true,
      currentTheme : 1,
    }
  }

  themeToggler(e) {

    e.preventDefault();
    
    let nextTheme = 1;

    switch (this.state.currentTheme) {
      case 1:
        nextTheme = 2;        
        break;
      case 2:
        nextTheme = 3;
        break;
      case 3:
        nextTheme = 4;
        break;
      case 4:
        nextTheme = 1;
        break;
      default:
        break;
    }

    this.setState( {
        addClass : !this.state.addClass,
        currentTheme : nextTheme,
      }
    )

    return false;
  }

  render() {
    
    let themeClass = ["App-Theme-1"];
    let containerType = "container-fluid landing-background";

    // if (this.state.currentTheme === 1) {
    //   themeClass = ["App"];
    // } 
    //   else if (this.state.currentTheme === 2) {
    //   themeClass = ["App-Theme-2"];
    // } else if (this.state.currentTheme === 3) {
    //   themeClass = ["App-Theme-3"];
    // } else if (this.state.currentTheme === 4) {
    //   themeClass = ["App-Theme-4"];
    //   containerType = "container-fluid landing-background";
    // }

    return (
      <Router>
        <div className={themeClass.join(' ')}>    
          <MainNavbar themeHandler={this.themeToggler.bind(this)} currentTheme={this.state.currentTheme}/>
          <div className={containerType}>
            <Route exact={true} path="/"  render={(props) => <Home {...props} currentTheme={this.state.currentTheme} />}/>
            <Route path="/quemsomos" component={QuemSomos}/>
            <Route path="/servicos" component={Servicos}/>
            <Route path="/equipa" component={Equipa}/>
            <Route path="/parcerias" component={Parcerias}/>
            <Route path="/noticias" component={Noticias}/>
            <Route path="/contactos" component={Contactos}/>              
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
