import React from 'react';
import './Contacts.css';
import brandGrey from '../../images/attentus_logo_2.png';

class Contacts extends React.Component {
    render() {
        return(
            <div className="row landing-bottom-row text-left">
                <div className="col-sm-12 d-block d-sm-none">
                    <p className="text-center mb-2"><img src={brandGrey} alt="attentus saúde" /></p>
                </div>
                <div className="col-lg-1 d-none d-sm-block">
                    <span className="ml-4"><img src={brandGrey} alt="attentus saúde" /></span>
                </div>
                <div className="col-sm-12 d-block d-sm-none">
                    <p className="text-center mb-0 pt-2 pb-2 borded-top">UNIDADE DE SAÚDE DO <br/>LAR DE SANTA ESTEFÂNIA</p>
                </div>
                <div className="col-lg-3 d-none d-sm-block">
                    <p className="text-center mb-0">UNIDADE DE SAÚDE DO <br/>LAR DE SANTA ESTEFÂNIA</p>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <p className="card-text borded-top mr-2 pt-2 pb-2 ">attentus.saude@attentus.pt<br/>915 958 480<br/></p>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <p className="card-text borded-top mr-2 pt-2 pb-2">Av. Conde Margaride, nº 352 – 1º B<br/><span>4810-537 Guimarães</span></p>
                </div>
            </div>
        );
    }
}

export default Contacts;
// Example usage: <Contacts />