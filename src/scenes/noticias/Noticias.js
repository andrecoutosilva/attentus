import React  from 'react';
import './Noticias.css';
import ImgNoticias from '../../images/icons/03_w.png';
import AttentusLogo from '../../images/attentus_logo_2.png';
import ContentPage from '../../components/content_page/ContentPage';

class Noticias extends React.Component {
    render() {
        return(
            <ContentPage 
                pageImg={ImgNoticias} 
                pageTitle="Notícias">
                <h3 className="pt-4">Em construção...</h3>
                <h4>Estamos a trabalhar na construção dos conteúdos desta página.</h4>
                <img className="attentus_logo" src={AttentusLogo} alt="attentus" />
            </ContentPage>
        )
    }
}
export default Noticias;