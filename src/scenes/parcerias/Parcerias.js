import React  from 'react';
import './Parcerias.css';
import ImgParcerias from '../../images/icons/white/icons-02.png';
import ContentPage from '../../components/content_page/ContentPage';
import AttentusLogo from '../../images/attentus_logo_2.png';

class Parcerias extends React.Component {
    render() {
        return(
            <ContentPage 
                pageImg={ImgParcerias} 
                pageTitle="Parcerias">
                <h3 className="pt-4">Em construção...</h3>
                <h4 className="text-center">Estamos a trabalhar na construção dos conteúdos desta página.</h4>
                <img className="attentus_logo" src={AttentusLogo} alt="attentus" />
            </ContentPage>
        )
    }
}
export default Parcerias;