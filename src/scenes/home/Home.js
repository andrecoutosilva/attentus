import React from 'react';
import './Home.css';
import Header2 from './Header-2';
import QuemSomos from '../../images/icons/01.png';
import Servicos from '../../images/icons/02.png';
import Contactos from '../../images/icons/03.png';
import Equipa from '../../images/icons/04.png';
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
                            <div className="row mt-5 pt-3 no-gutters">
                                <div className="col px-2"><Link to="/quemsomos"><img src={QuemSomos} alt="Quem Somos" /><h5>Quem Somos</h5></Link></div>
                                <div className="col px-2"><Link to="/servicos"><img src={Servicos} alt="Serviços" /><h5>Serviços</h5></Link></div>
                                <div className="col px-2"><Link to="/equipa"><img src={Equipa} alt="Equipa" /><h5>Equipa</h5></Link></div>
                                <div className="col px-2"><Link to="/contactos"><img src={Contactos} alt="Contactos" /><h5>Contactos</h5></Link></div>
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