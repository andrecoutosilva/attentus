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
                            <p className="card-text"><i className="fas fa-at card-icon"></i> attentus.saude@attentus.pt<br/>
                            <i className="fas fa-phone card-icon"></i> 915 958 480<br/></p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Onde Estamos?</h3>
                            <p className="card-text">
                                <i className="fas fa-map-marker-alt card-icon"></i>Av. Conde Margaride, nº 352 – 1º B<br/>
                                <span>4810-537 Guimarães</span>
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