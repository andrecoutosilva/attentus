import React  from 'react';
import './Equipa.css';
import circle1 from '../../images/circle1.png';

class Equipa extends React.Component {
    render() {
        return(
            <div className="row content-page">
                <div className="col d-flex h-100 flex-column">
                    <div className="row pt-5">
                        <div className="col-md-3 col-sm-1">
                            <img src={circle1} alt={this.props.alt} height="230" width="230"/>
                        </div>
                        <div className="col-md-9 col-sm-11 pl-4 pr-5 pb-5">
                            <h1 className="display-3 mb-3">Equipa</h1>
                            <hr/>
                            <div>
                                <p>A EQUIPA TERAPÊUTICA da ATTENTUS é MULTIDISCIPLINAR e conta com profissionais QUALIFICADOS nas valências de PSICOLOGIA, TERAPIA DA FALA e PEDOPSIQUIATRIA, ESPECIALIZADOS e com experiência profissional nas áreas de intervenção e nos serviços prestados.</p>
                                <p>A EQUIPA trabalha de uma forma integrada e constitui um suporte valioso para o bom funcionamento da ATTENTUS e para a qualidade do trabalho desenvolvido, o que se reflecte na boa gestão do quotidiano e na implementação de um modelo coerente e articulado de actuação nas diferentes respostas que disponibiliza.</p>
                                <p>Para tal, reúne regularmente, tendo como principal finalidade o encontro e a articulação entre os vários profissionais, não só dentro da sua área, mas também em áreas complementares. Desta forma, contribuindo para a melhoria da qualidade dos serviços prestados e para a formação permanente dos profissionais que dela fazem parte.</p>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Equipa;