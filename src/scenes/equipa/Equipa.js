import React  from 'react';
import './Equipa.css';
import ImgEquipa from '../../images/icons/white/icons-03.png';
import ContentPage from '../../components/content_page/ContentPage';

class Equipa extends React.Component {
    render() {
        return(
            <ContentPage 
                pageImg={ImgEquipa} 
                pageTitle="Equipa">
                    <p>A <strong>equipa terapêutica</strong> da <strong>attentus</strong> é <strong>multidisciplinar</strong> e conta com profissionais <strong>qualificados</strong> nas valências de <strong>psicologia</strong>, <strong>terapia da fala</strong> e <strong>pedopsiquiatria</strong>, <strong>especializados</strong> e com experiência profissional nas áreas de intervenção e nos serviços prestados.</p>
                    <p>A <strong>equipa</strong> trabalha de uma forma integrada e constitui um suporte valioso para o bom funcionamento da <strong>attentus</strong> e para a qualidade do trabalho desenvolvido, o que se reflecte na boa gestão do quotidiano e na implementação de um modelo coerente e articulado de actuação nas diferentes respostas que disponibiliza.</p>
                    <p>Para tal, reúne regularmente, tendo como principal finalidade o encontro e a articulação entre os vários profissionais, não só dentro da sua área, mas também em áreas complementares. Desta forma, contribuindo para a melhoria da qualidade dos serviços prestados e para a formação permanente dos profissionais que dela fazem parte.</p>
            </ContentPage>
        )
    }
}
export default Equipa;