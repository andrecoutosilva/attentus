import React  from 'react';
import './Contactos.css';
import ImgNoticias from '../../images/icons/white/icons-04.png';
import ContentPage from '../../components/content_page/ContentPage';

class Contactos extends React.Component {
    render() {
        return(
            <ContentPage 
                pageImg={ImgNoticias} 
                pageTitle="Contactos">
                <div className="row flex-fill text-left">
                    <div className="col-lg-6 col-sm-12">
                        <p>Telefone: 915 958 480<br/></p>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <p className="card-text mr-2">
                            Av. Conde Margaride, nº 352 – 1º B<br/>
                            <span>4810-537 Guimarães</span>
                        </p>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col">
                        <div className="map-responsive">
                            <iframe title="attentus-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.8253519332216!2d-8.30148828458364!3d41.44301107925909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24efe7b87b6ca3%3A0xd0fc10843f85a8cd!2sAv.+Conde+de+Margaride+352%2C+4810-537+Guimar%C3%A3es!5e0!3m2!1spt-PT!2spt!4v1541860783920" width="900" height="500" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </ContentPage>
        )
    }
}
export default Contactos;