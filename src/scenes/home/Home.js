import React from 'react';
import './Home.css';
import Header2 from './Header-2';
import QuemSomos from '../../images/icons/grey/icon-01.png';
import Servicos from '../../images/icons/grey/icon-05.png';
import Contactos from '../../images/icons/grey/icon-04.png';
import Equipa from '../../images/icons/grey/icon-03.png';
import {Link} from 'react-router-dom';

class Home extends React.Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {

        return (
            <div className="row landing-page">
                <div className="col d-flex h-100 flex-column">
                    <Header2 />
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 
                                            order-sm-1 order-md-1 order-lg-0 order-xl-0">
                                <div className="main-content-left 
                                    m-lg-5 m-xl-5 
                                    order-last pt-xs-2 pt-sm-2 pt-md-2 pt-lg-3 pt-xl-3">
                                    <p className="part-1">A <strong>attentus</strong> é uma estrutura na área da saúde e do desenvolvimento que visa a promoção do crescimento harmonioso e do bem-estar da pessoa.</p>
                                    <p>Desenvolve a sua actividade na área da <strong>psicologia</strong>, da <strong>terapia da fala</strong> e da <strong>pedopsiquiatria</strong>, com uma diversidade de intervenções individuais e em grupo, dirigidas a <strong>crianças</strong>, <strong>jovens</strong> e <strong>adultos</strong>.</p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 
                                            order-first order-sm-0 order-md-0 order-lg-1 order-xl-1 icons-zone">
                                <div className="row 
                                    mt-lg-5 mt-xl-5 
                                    mr-lg-4 mr-xl-4
                                    pt-lg-3 pt-xl-3">
                                    <div className="col px-2"><Link to="/quemsomos"><img src={QuemSomos} alt="Quem Somos" /><p className="text-center">Quem Somos</p></Link></div>
                                    <div className="col px-2"><Link to="/equipa"><img src={Equipa} alt="Equipa" /><p className="text-center">Equipa</p></Link></div>
                                    <div className="col px-2"><Link to="/servicos"><img src={Servicos} alt="Serviços" /><p className="text-center">Serviços</p></Link></div>
                                    <div className="col px-2"><Link to="/contactos"><img src={Contactos} alt="Contactos" /><p className="text-center">Contactos</p></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
// Example usage: <Home />