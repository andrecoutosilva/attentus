import React  from 'react';
import './Contactos.css';
import ImgNoticias from '../../images/icons/03.png';
import ContentPage from '../../components/content_page/ContentPage';

class Contactos extends React.Component {
    render() {
        return(
            <ContentPage 
                pageImg={ImgNoticias} 
                pageTitle="Contactos">
                <div className="row flex-fill text-left">
                    <div className="col-lg-6 col-sm-12">
                        <p className="card-text mr-2">attentus.saude@attentus.pt<br/>
                                                915 958 480<br/></p>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <p className="card-text mr-2">
                            Av. Conde Margaride, nº 352 – 1º B<br/>
                            <span>4810-537 Guimarães</span>
                        </p>
                    </div>
                </div>
            </ContentPage>
        )
    }
}
export default Contactos;