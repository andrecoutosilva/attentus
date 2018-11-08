import React  from 'react';
import './QuemSomos.css';
import circle1 from '../../images/icons/01.png';
import Contacts from '../home/Contacts';

class QuemSomos extends React.Component {
    
    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return(
            <div>
                <div className="p-5">
                    <div className="row content-page">
                        <div className="col d-flex h-100 flex-column">
                            <div className="row pt-5">
                                <div className="col-md-3 col-sm-1">
                                    <img src={circle1} alt={this.props.alt} height="230" width="230"/>
                                </div>
                                <div className="col-md-9 col-sm-11 pl-4 pr-5 pb-5">
                                    <h1 className="display-3 py-5 my-3 text-primary">Quem somos</h1>
                                    <hr/>
                                    <div>
                                        <p>A ATTENTUS é uma estrutura na área da saúde e do desenvolvimento que visa a promoção do crescimento harmonioso e do bem-estar da pessoa. Desenvolve a sua actividade na área da PSICOLOGIA, da TERAPIA DA FALA e da PEDOPSIQUIATRIA, com uma diversidade de intervenções individuais e em grupo, dirigidas a CRIANÇAS, JOVENS e ADULTOS.</p>
                                        <p>É constituída por uma EQUIPA MULTIDISCIPLINAR de profissionais QUALIFICADOS e ESPECIALIZADOS nas áreas de intervenção e nos serviços que disponibiliza, todos eles inscritos nas respectivas Ordens Profissionais.</p>
                                        <p>No centro de toda a actuação da ATTENTUS está o respeito pela pessoa, pela sua dignidade e pelos seus direitos e individualidade, bem como o profissionalismo, a integridade e a dignidade dos profissionais que aí prestam serviço, num rigoroso cumprimento dos princípios éticos e deontológicos que regem a sua actividade profissional.</p>
                                        <p>Nas diferentes valências, a intervenção pode ser desenvolvida numa perspectiva TERAPÊUTICA (pretende dar resposta a um problema específico ou às dificuldades sentidas num determinado momento, desbloqueando o desenvolvimento, aliviando o sofrimento e removendo o sintoma), PREVENTIVA (pretende capacitar para lidar com uma situação, evitando que o problema ou a dificuldade se instale e prevenindo consequências prejudiciais que dela possam advir) ou de PROMOÇÃO DO DESENVOLVIMENTO (pretende desenvolver o auto-conhecimento e o fortalecimento pessoal ou melhorar a resposta e a forma de lidar com uma situação particular).</p>
                                        <p>Qualquer intervenção tem como OBJECTIVO PRIMORDIAL desenvolver na pessoa o conhecimento de si própria e o seu fortalecimento (psíquico e funcional), capacitando-a para poder lidar com as tarefas características de cada faixa etária e as exigências do quotidiano e da vida em geral, ao longo de todo o ciclo vital, de uma forma MAIS ADAPTATIVA, com MENOR SOFRIMENTO e com um MELHOR DESEMPENHO. Pretende-se, desta forma, em qualquer idade, ajudar a pessoa a conseguir uma maior harmonia e estabilidade, essenciais ao bem-estar na relação consigo própria e com os outros.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Contacts />
            </div>
        )
    }
}
export default QuemSomos;