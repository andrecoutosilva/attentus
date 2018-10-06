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
      addClass : true
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
      <Router>
        <div className={themeClass.join(' ')}>    
          <MainNavbar themeHandler={this.themeToggler.bind(this)}/>
          <div className="container pt-5 landing-background">
            <div className="row landing-page">
              <div className="col d-flex h-100 flex-column">
                <Route exact={true} path="/" component={Home}/>
                <Route path="/quemsomos" component={QuemSomos}/>
                <Route path="/servicos" component={Servicos}/>
                <Route path="/equipa" component={Equipa}/>
                <Route path="/parcerias" component={Parcerias}/>
                <Route path="/noticias" component={Noticias}/>
                <Route path="/contactos" component={Contactos}/>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
