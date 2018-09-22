import React from 'react';
import whoarewe from '../../whoarewe.png';
import Header from './Header';
import ImageTextSection from '../../components/ImageTextSection';
import Contacts from './Contacts';
import './Home.css';

class Home extends React.Component {
    render() {

        const sectionHeader1 = "Quem Somos";
        const sectionHeader2 = "Serviços";
        const sectionHeader3 = "Equipa";
        const imgPath1 = whoarewe;
        const imgPath2 = whoarewe;
        const imgPath3 = whoarewe;
        const mainText1 = "A ATTENTUS é uma estrutura na área da saúde e do desenvolvimento que visa a promoção do crescimento harmonioso e do bem-estar da pessoa. Desenvolve a sua actividade na área da PSICOLOGIA, da TERAPIA DA FALA e da PEDOPSIQUIATRIA, com uma diversidade de intervenções individuais e em grupo, dirigidas a CRIANÇAS, JOVENS e ADULTOS.";
        const mainText2 = mainText1;
        const mainText3 = mainText1;

        return (
          <div className="container pt-5 landing-background">
            <div className="row landing-page">
              <div className="col d-flex h-100 flex-column">
                <Header />
                <ImageTextSection 
                    sectionHeader={sectionHeader1} 
                    imgPath={imgPath2} 
                    mainText={mainText2}
                    imgPos="left" />
                <ImageTextSection 
                    sectionHeader={sectionHeader2} 
                    imgPath={imgPath3} 
                    mainText={mainText3} 
                    imgPos="right" />
                <ImageTextSection 
                    sectionHeader={sectionHeader3} 
                    imgPath={imgPath1} 
                    mainText={mainText1} 
                    imgPos="left" />
                <Contacts />
              </div>
            </div>
          </div>
        );
    }
}

export default Home;
// Example usage: <Home />