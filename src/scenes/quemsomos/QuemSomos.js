import React  from 'react';
import './QuemSomos.css';
import ImgQuemSomos from '../../images/icons/white/icons-01.png';
import ContentPage from '../../components/content_page/ContentPage';

class QuemSomos extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { isReadMoreOn: true };
        // This binding is necessary to make `this` work in the callback
        this.readMoreClick = this.readMoreClick.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }

    readMoreClick() {
        
        this.setState(state => ({
            isReadMoreOn: !state.isReadMoreOn
        }));
    }

    render() {
        return(
            <ContentPage 
                pageImg={ImgQuemSomos} 
                pageTitle="Quem Somos">
                <div className="sidebar-box">
                    <p>A <strong>attentus</strong> é uma estrutura na área da saúde e do desenvolvimento que visa a promoção do crescimento harmonioso e do bem-estar da pessoa. Desenvolve a sua actividade na área da <strong>psicologia</strong>, da <strong>terapia da fala</strong> e da <strong>pedopsiquiatria</strong>, com uma diversidade de intervenções individuais e em grupo, dirigidas a <strong>crianças</strong>, <strong>jovens</strong> e <strong>adultos</strong>.</p>
                    <p>É constituída por uma <strong>equipa multidisciplinar</strong> de profissionais <strong>qualificados</strong> e <strong>especializados</strong> nas áreas de intervenção e nos serviços que disponibiliza, todos eles inscritos nas respectivas Ordens Profissionais.</p>
                    <div className="collapse" id="collapseExample" ref={node => (this.myCollapsible = node)}>
                        <p>No centro de toda a actuação da <strong>attentus</strong> está o respeito pela pessoa, pela sua dignidade e pelos seus direitos e individualidade, bem como o profissionalismo, a integridade e a dignidade dos profissionais que aí prestam serviço, num rigoroso cumprimento dos princípios éticos e deontológicos que regem a sua actividade profissional.</p>
                        <p>Nas diferentes valências, a intervenção pode ser desenvolvida numa perspectiva <strong>terapêutica</strong> (pretende dar resposta a um problema específico ou às dificuldades sentidas num determinado momento, desbloqueando o desenvolvimento, aliviando o sofrimento e removendo o sintoma), <strong>preventiva</strong> (pretende capacitar para lidar com uma situação, evitando que o problema ou a dificuldade se instale e prevenindo consequências prejudiciais que dela possam advir) ou de <strong>promoção do desenvolvimento</strong> (pretende desenvolver o auto-conhecimento e o fortalecimento pessoal ou melhorar a resposta e a forma de lidar com uma situação particular).</p>
                        <p>Qualquer intervenção tem como <strong>objectivo primordial</strong> desenvolver na pessoa o conhecimento de si própria e o seu fortalecimento (psíquico e funcional), capacitando-a para poder lidar com as tarefas características de cada faixa etária e as exigências do quotidiano e da vida em geral, ao longo de todo o ciclo vital, de uma forma <strong>mais adaptativa</strong>, com <strong>menor sofrimento</strong> e com um <strong>melhor desempenho</strong>. Pretende-se, desta forma, em qualquer idade, ajudar a pessoa a conseguir uma maior harmonia e estabilidade, essenciais ao bem-estar na relação consigo própria e com os outros.</p>
                        <p>Recuando na sua história, importa recordar que a <strong>attentus</strong> – UNIDADE DE SAÚDE DO LAR DE SANTA ESTEFÂNIA 
                         surgiu da necessidade de ser encontrada uma resposta diferenciada na área da saúde mental e do desenvolvimento que fosse 
                         ao encontro das necessidades apresentadas pelas crianças e jovens acolhidos no Lar de Santa Estefânia.</p>
                        <p>Desde o início que, constituída por profissionais com formação especializada, esta estrutura visava 
                         disponibilizar um conjunto de respostas terapêuticas que fossem desenvolvidas nas condições exigidas à sua 
                         eficácia, incluindo quanto à frequência e à duração dos tratamentos. Desta forma, colmatando uma lacuna 
                         existente no Sistema Nacional de Saúde, onde não é possível encontrar uma resposta com a especificidade e 
                         as características exigidas.</p>
                        <p>Com o passar do tempo, considerou-se que a Equipa Terapêutica da <strong>attentus</strong> constituía um recurso valioso 
                         que poderia ser colocado à disposição de toda a comunidade.</p>
                        <p>Assim, os serviços da <strong>attentus</strong> foram abertos a toda a população, seja a pessoas 
                         individuais, seja a profissionais de diferentes áreas, a instituições ou a entidades, públicas ou privadas, 
                         que encontrem utilidade no saber e nos serviços disponibilizados pela <strong>attentus</strong> ou que vejam nesta estrutura 
                         um parceiro, incluindo no desenvolvimento de projectos de intervenção de cariz social.</p>
                        <p>Resta salientar que dos honorários cobrados pelos profissionais que prestam serviços na <strong>attentus</strong>, 
                         é doada uma percentagem ao Lar de Santa Estefânia.</p>
                    </div>
                    <a data-toggle="collapse" 
                        href="#collapseExample" role="button" aria-expanded="false" 
                        onClick={this.readMoreClick}
                        aria-controls="collapseExample"> {this.state.isReadMoreOn ? 'Ler mais...' : 'Ler menos...'}</a>
                </div>
            </ContentPage>
        )
    }
}
export default QuemSomos;