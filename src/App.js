import React, { Component } from 'react';
import Home from './scenes/home/Home';
import Contacts from './components/bottom_contacts/Contacts';

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

  render() {
   
    return (
      <Router>
        <div className="App-Theme-1 d-flex flex-column h-100">
          <MainNavbar />
          <div className="container-fluid main-content">
            <Route exact={true} path="/"  render={(props) => <Home {...props} />}/>
            <Route path="/quemsomos" component={QuemSomos}/>
            <Route path="/servicos" component={Servicos}/>
            <Route path="/equipa" component={Equipa}/>
            <Route path="/parcerias" component={Parcerias}/>
            <Route path="/noticias" component={Noticias}/>
            <Route path="/contactos" component={Contactos}/>  
          </div>
          <Contacts />
        </div>
      </Router>
    );
  }
}

export default App;
