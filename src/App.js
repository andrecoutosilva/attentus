import React, { Component } from 'react';
import logo from './attentus_logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container pt-5 landing-background">
          <div className="row landing-page">
            <div className="col d-flex h-100 flex-column">
              <div className="row">
                <div className="col">
                  <header className="App-header mt-5 text-center">
                    {/* <h1 className="display-4 App-title">attentus</h1> */}
                    <img src={logo} alt="Attentus Saude" className="App-logo" height="282" width="843"/>
                  </header>
                </div>
              </div>
              <div className="row flex-fill landing-bottom-row text-left">
                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <h3 className="card-title">Contactos</h3>
                      <p className="card-text">
                      {/* <small>Correio Eletrónico</small> */}<i className="fas fa-at card-icon"></i> attentus@attentus.pt<br/>
                      {/* <small>Telefone</small> */}<i className="fas fa-phone card-icon"></i> 919 919 919<br/>
                      {/* <small>Telefone</small> */}<i className="fab fa-facebook-f card-icon"></i> <a href="https://facebook.com/attentussaude" target="_blank" rel="noopener noreferrer">facebook.com/attentussaude</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <h3 className="card-title">Onde Estamos?</h3>
                      <p className="card-text">
                        <i className="fas fa-map-marker-alt card-icon"></i>Avenida Conde de Margaride, 000<br/>
                        <span style={{ 'margin-left': '50px' }}>4800-000 Guimarães</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
