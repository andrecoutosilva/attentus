import React, { Component } from 'react';
import logo from './attentus_logo.png';
import whoarewe from './whoarewe.png';
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
              <div className="row flex-fill landing-bottom-row">
              <div className="row pt-3">
                <div className="col coluna1 d-flex h-100" >
                  <img src={whoarewe} alt="Quem Somos" className="section-logo-1" height="300" width="300"/>
                </div>
                <div className="col pl-4 pr-5 py-4 coluna2">
                  <h1 className="text-left"><strong>Quem somos</strong></h1>
                  <p className="text-section text-left">A ATTENTUS é uma estrutura na área da saúde e do desenvolvimento que visa a promoção do
crescimento harmonioso e do bem-estar da pessoa.
Desenvolve a sua actividade na área da PSICOLOGIA, da TERAPIA DA FALA e da PEDOPSIQUIATRIA, com
uma diversidade de intervenções individuais e em grupo, dirigidas a CRIANÇAS, JOVENS e ADULTOS.</p>
                  <div className="text-right">
                    <button type="button" class="btn btn-outline-primary">Ler mais...</button>
                  </div>
                </div>
              </div>
              <div className="row pt-3">
                <div className="col pl-5 pr-4 py-4 coluna2">
                  <h1 className="text-left"><strong>Serviços</strong></h1>
                  <p className="text-section text-left">A ATTENTUS é uma estrutura na área da saúde e do desenvolvimento que visa a promoção do
crescimento harmonioso e do bem-estar da pessoa.
Desenvolve a sua actividade na área da PSICOLOGIA, da TERAPIA DA FALA e da PEDOPSIQUIATRIA, com
uma diversidade de intervenções individuais e em grupo, dirigidas a CRIANÇAS, JOVENS e ADULTOS.</p>
                  <div className="text-right">
                    <button type="button" class="btn btn-outline-primary">Ler mais...</button>
                  </div>
                </div>
                <div className="col d-flex h-100 coluna1">
                  <img src={whoarewe} alt="Quem Somos" className="section-logo-1" height="300" width="300"/>
                </div>
              </div>
              <div className="row pt-3">
              <div className="col coluna1 d-flex h-100" >
                  <img src={whoarewe} alt="Quem Somos" className="section-logo-1" height="300" width="300"/>
                </div>
                <div className="col px-4 py-4 coluna2">
                  <h1 className="text-left"><strong>Equipa</strong></h1>
                  <p className="text-section text-left">A ATTENTUS é uma estrutura na área da saúde e do desenvolvimento que visa a promoção do
crescimento harmonioso e do bem-estar da pessoa.
Desenvolve a sua actividade na área da PSICOLOGIA, da TERAPIA DA FALA e da PEDOPSIQUIATRIA, com
uma diversidade de intervenções individuais e em grupo, dirigidas a CRIANÇAS, JOVENS e ADULTOS.</p>
                  <div className="text-right">
                    <button type="button" class="btn btn-outline-primary">Ler mais...</button>
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
