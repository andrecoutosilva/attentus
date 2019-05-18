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
                    <div className="row">
                        <div className="col">
                            <div className="main-content-left m-5 pt-3">
                                <p className="part-1">A <strong>attentus</strong> é uma estrutura na área da saúde e do desenvolvimento que visa a promoção do crescimento harmonioso e do bem-estar da pessoa.</p>
                                <p>Desenvolve a sua actividade na área da <strong>psicologia</strong>, da <strong>terapia da fala</strong> e da <strong>pedopsiquiatria</strong>, com uma diversidade de intervenções individuais e em grupo, dirigidas a <strong>crianças</strong>, <strong>jovens</strong> e <strong>adultos</strong>.</p>
                            </div>
                        </div>
                        <div className="col icons-zone">
                            <div className="row mt-5 mr-4 pt-3 no-gutters">
                                <div className="col px-2"><Link to="/quemsomos"><img src={QuemSomos} alt="Quem Somos" /><p className="text-center">Quem Somos</p></Link></div>
                                <div className="col px-2"><Link to="/servicos"><img src={Servicos} alt="Serviços" /><p className="text-center">Serviços</p></Link></div>
                                <div className="col px-2"><Link to="/equipa"><img src={Equipa} alt="Equipa" /><p className="text-center">Equipa</p></Link></div>
                                <div className="col px-2"><Link to="/contactos"><img src={Contactos} alt="Contactos" /><p className="text-center">Contactos</p></Link></div>
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