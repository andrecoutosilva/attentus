import React  from 'react';
import './Equipa.css';
import ImgEquipa from '../../images/icons/04.png';
import ContentPage from '../../components/content_page/ContentPage';

class Equipa extends React.Component {
    render() {
        return(
            <ContentPage 
                pageImg={ImgEquipa} 
                pageTitle="Equipa">
                    <p>A EQUIPA TERAPÊUTICA da ATTENTUS é MULTIDISCIPLINAR e conta com profissionais QUALIFICADOS nas valências de PSICOLOGIA, TERAPIA DA FALA e PEDOPSIQUIATRIA, ESPECIALIZADOS e com experiência profissional nas áreas de intervenção e nos serviços prestados.</p>
                    <p>A EQUIPA trabalha de uma forma integrada e constitui um suporte valioso para o bom funcionamento da ATTENTUS e para a qualidade do trabalho desenvolvido, o que se reflecte na boa gestão do quotidiano e na implementação de um modelo coerente e articulado de actuação nas diferentes respostas que disponibiliza.</p>
                    <p>Para tal, reúne regularmente, tendo como principal finalidade o encontro e a articulação entre os vários profissionais, não só dentro da sua área, mas também em áreas complementares. Desta forma, contribuindo para a melhoria da qualidade dos serviços prestados e para a formação permanente dos profissionais que dela fazem parte.</p>
            </ContentPage>
        )
    }
}
export default Equipa;