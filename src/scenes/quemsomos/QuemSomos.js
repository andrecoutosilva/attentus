import React  from 'react';
import './QuemSomos.css';
import ImgQuemSomos from '../../images/icons/01.png';
import ContentPage from '../../components/content_page/ContentPage';

class QuemSomos extends React.Component {
    
    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return(
            <ContentPage 
                pageImg={ImgQuemSomos} 
                pageTitle="Quem Somos">
                <div className="sidebar-box">
                    <p>A <strong>ATTENTUS</strong> é uma estrutura na área da saúde e do desenvolvimento que visa a promoção do crescimento harmonioso e do bem-estar da pessoa. Desenvolve a sua actividade na área da <strong>PSICOLOGIA</strong>, da <strong>TERAPIA DA FALA</strong> e da <strong>PEDOPSIQUIATRIA</strong>, com uma diversidade de intervenções individuais e em grupo, dirigidas a <strong>CRIANÇAS</strong>, <strong>JOVENS</strong> e <strong>ADULTOS</strong>.</p>
                    <p>É constituída por uma <strong>EQUIPA MULTIDISCIPLINAR</strong> de profissionais <strong>QUALIFICADOS</strong> e <strong>ESPECIALIZADOS</strong> nas áreas de intervenção e nos serviços que disponibiliza, todos eles inscritos nas respectivas Ordens Profissionais.</p>
                    <div className="collapse" id="collapseExample" ref={node => (this.myCollapsible = node)}>
                        <p>No centro de toda a actuação da <strong>ATTENTUS</strong> está o respeito pela pessoa, pela sua dignidade e pelos seus direitos e individualidade, bem como o profissionalismo, a integridade e a dignidade dos profissionais que aí prestam serviço, num rigoroso cumprimento dos princípios éticos e deontológicos que regem a sua actividade profissional.</p>
                        <p>Nas diferentes valências, a intervenção pode ser desenvolvida numa perspectiva <strong>TERAPÊUTICA</strong> (pretende dar resposta a um problema específico ou às dificuldades sentidas num determinado momento, desbloqueando o desenvolvimento, aliviando o sofrimento e removendo o sintoma), <strong>PREVENTIVA</strong> (pretende capacitar para lidar com uma situação, evitando que o problema ou a dificuldade se instale e prevenindo consequências prejudiciais que dela possam advir) ou de <strong>PROMOÇÃO DO DESENVOLVIMENTO</strong> (pretende desenvolver o auto-conhecimento e o fortalecimento pessoal ou melhorar a resposta e a forma de lidar com uma situação particular).</p>
                        <p>Qualquer intervenção tem como <strong>OBJECTIVO PRIMORDIAL</strong> desenvolver na pessoa o conhecimento de si própria e o seu fortalecimento (psíquico e funcional), capacitando-a para poder lidar com as tarefas características de cada faixa etária e as exigências do quotidiano e da vida em geral, ao longo de todo o ciclo vital, de uma forma <strong>MAIS ADAPTATIVA</strong>, com <strong>MENOR SOFRIMENTO</strong> e com um <strong>MELHOR DESEMPENHO</strong>. Pretende-se, desta forma, em qualquer idade, ajudar a pessoa a conseguir uma maior harmonia e estabilidade, essenciais ao bem-estar na relação consigo própria e com os outros.</p>
                    </div>
                    <a data-toggle="collapse" 
                        href="#collapseExample" role="button" aria-expanded="false" 
                        aria-controls="collapseExample">Ler mais...</a>
                </div>
            </ContentPage>
        )
    }
}
export default QuemSomos;