import React  from 'react';
import './Servicos.css';
import ImgServicos from '../../images/icons/02_w.png';
import AttentusLogo from '../../images/attentus_logo_2.png';
import ContentPage from '../../components/content_page/ContentPage';

class Servicos extends React.Component {
    render() {
        return(
            <ContentPage 
                pageImg={ImgServicos} 
                pageTitle="Serviços">
                <div className="servicos">
                    <h3 className="pt-4">Em construção...</h3>
                    <h4>Estamos a trabalhar na construção dos conteúdos desta página.</h4>
                    <img className="attentus_logo" src={AttentusLogo} alt="attentus" />
                </div>
            </ContentPage>
        )
    }
}
export default Servicos;