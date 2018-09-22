import React from 'react';
import './Contacts.css';

class Contacts extends React.Component {
    render() {
        return(
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
                                <span>4800-000 Guimarães</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contacts;
// Example usage: <Contacts />