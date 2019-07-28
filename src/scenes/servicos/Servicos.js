import React  from 'react';
import './Servicos.css';
import ImgServicos from '../../images/icons/white/icons-05.png';
import ContentPage from '../../components/content_page/ContentPage';

class Servicos extends React.Component {
    render() {
        return(
            <ContentPage 
                pageImg={ImgServicos}
                pageTitle="Serviços">
                <div className="sidebar-box">
                    <div className="pb-5">
                        <p><h4>ÁREAS DE INTERVENÇÃO</h4></p>
                        <p>A actividade da <strong>ATTENTUS</strong> é desenvolvida actualmente em três
                        valências: Psicologia, Terapia da Fala e Pedopsiquiatria.</p>
                        <div class="accordion" id="accordionAreas">
                            <div class="card">
                                <div class="card-header" id="headingOne">
                                    <h2 class="mb-0">
                                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapsePsicologia" aria-expanded="true" aria-controls="collapsePsicologia">
                                            Psicologia
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapsePsicologia" class="collapse" aria-labelledby="headingOne" data-parent="#accordionAreas">
                                    <div class="card-body">
                                        <ul>
                                            <li>
                                                Consulta de Psicologia
                                                <ul>
                                                    <li>Psicoterapia</li>
                                                    <li>Apoio psicológico</li>
                                                    <li>Avaliação psicológica</li>
                                                    <li>Orientação vocacional (escolar e profissional)</li>
                                                </ul>
                                            </li>
                                            <li>Psicodrama</li>
                                            <li>Relaxamento Infantil</li>
                                            <li>Educação Parental</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingTwo">
                                <h2 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Terapia da Fala
                                    </button>
                                </h2>
                                </div>
                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionAreas">
                                    <div class="card-body">
                                        <ul>
                                            <li>Consulta de Terapia da Fala</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingThree">
                                <h2 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Pedopsiquiatria
                                    </button>
                                </h2>
                                </div>
                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionAreas">
                                <div class="card-body">
                                    <ul>
                                        <li>Consulta de Pedopsiquiatria*</li>
                                    </ul>
                                    *Colaboração externa
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pb-5">
                        <p><h4>A QUEM SE DESTINA</h4></p>
                        <p>Os diferentes serviços que são disponibilizados pela <strong>ATTENTUS</strong> em 
                        cada uma das valências destinam-se a todas as faixas etárias ao longo 
                        do ciclo vital: <strong>crianças</strong>, <strong>jovens</strong> e <strong>adultos</strong>.
                        </p>
                        <div class="accordion" id="accordionAQuem">
                            <div class="card">
                                <div class="card-header" id="headingOne">
                                    <h2 class="mb-0">
                                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseCriancas" aria-expanded="true" aria-controls="collapseCriancas">
                                            Crianças
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseCriancas" class="collapse" aria-labelledby="headingOne" data-parent="#accordionAQuem">
                                    <div class="card-body">
                                        Mais informação brevemente.
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingTwo">
                                <h2 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseJovens" aria-expanded="false" aria-controls="collapseJovens">
                                    Jovens
                                    </button>
                                </h2>
                                </div>
                                <div id="collapseJovens" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionAQuem">
                                    <div class="card-body">
                                    Mais informação brevemente.
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingThree">
                                <h2 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseAdultos" aria-expanded="false" aria-controls="collapseAdultos">
                                    Adultos
                                    </button>
                                </h2>
                                </div>
                                <div id="collapseAdultos" class="collapse" aria-labelledby="headingThree" data-parent="#accordionAQuem">
                                <div class="card-body">
                                Mais informação brevemente.
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pb-5">
                        <p><h4>OUTROS SERVIÇOS PRESTADOS E OUTRAS ACTIVIDADES DESENVOLVIDAS</h4></p>
                        <p>A <strong>ATTENTUS</strong> coloca também à disposição de toda a comunidade outros serviços 
                        prestados e outras actividades desenvolvidas, um conjunto de respostas 
                        diferenciadas, desenvolvidas em função de uma população alvo, de uma problemática 
                        ou de um contexto, específicos.</p>
                        <div class="accordion" id="accordionOutros">
                            <div class="card">
                                <div class="card-header" id="headingThree">
                                <h2 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseConsultadoria" aria-expanded="false" aria-controls="collapseConsultadoria">
                                    Consultadoria
                                    </button>
                                </h2>
                                </div>
                                <div id="collapseConsultadoria" class="collapse" aria-labelledby="headingThree" data-parent="#accordionOutros">
                                <div class="card-body">
                                    A Consultadoria é um dos serviços disponibilizados, em que se procura encontrar, 
                                    em conjunto com as instituições e com os outros profissionais, as respostas para algumas 
                                    das suas necessidade, nas áreas de actuação da <strong>ATTENTUS</strong> e em função das solicitações que 
                                    lhe forem dirigidas.
                                </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingFour">
                                <h2 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseInfo" aria-expanded="false" aria-controls="collapseInfo">
                                    Informação/Esclarecimento
                                    </button>
                                </h2>
                                </div>
                                <div id="collapseInfo" class="collapse" aria-labelledby="headingFour" data-parent="#accordionOutros">
                                <div class="card-body">
                                    Junto da população em geral, a <strong>ATTENTUS</strong> também procura realizar sessões de INFORMAÇÃO e de 
                                    ESCLARECIMENTO, procurando sensibilizar e alertar para algumas temáticas importantes e 
                                    para o papel de cada um, individualmente e colectivamente, na área da saúde (física e mental) 
                                    e da promoção do desenvolvimento e do bem-estar (individual e colectivo).
                                </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingOne">
                                    <h2 class="mb-0">
                                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseIntervencao" aria-expanded="true" aria-controls="collapseIntervencao">
                                        Intervenção
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseIntervencao" class="collapse" aria-labelledby="headingOne" data-parent="#accordionOutros">
                                    <div class="card-body">
                                        Mais informação brevemente.
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingTwo">
                                <h2 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFormacao" aria-expanded="false" aria-controls="collapseFormacao">
                                    Formação
                                    </button>
                                </h2>
                                </div>
                                <div id="collapseFormacao" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionOutros">
                                    <div class="card-body">
                                    Mais informação brevemente.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Todas estas iniciativas, podem ser desenvolvidas no domínio do tratamento (terapêutico),
                        da prevenção ou da promoção do desenvolvimento e podem contemplar uma componente de 
                        intervenção, de formação ou ambas.</p>
                        <p>Junto de entidades do poder local, de instituições (de saúde, de educação, etc.) 
                        e de outros profissionais, bem como junto da população em geral, tem por objectivo 
                        colaborar, no sentido de colocar à disposição dos mesmos a diversidade de respostas 
                        e os saberes que a <strong>ATTENTUS</strong> pode oferecer.</p>
                    </div>
                </div>
            </ContentPage>
        )
    }
}
export default Servicos;