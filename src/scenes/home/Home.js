import React from 'react';
// import whoarewe from '../../whoarewe.png';
import circle1 from '../../images/circle1.png';
import circle2 from '../../images/circle2.png';
// import circle3 from '../../images/circle3.png';
import circle4 from '../../images/circle4.png';
import Header from './Header';
import ImageTextSection from '../../components/ImageTextSection';
import Contacts from './Contacts';
import './Home.css';

class Home extends React.Component {
    render() {

        const sectionHeader1 = "Quem Somos";
        const sectionHeader2 = "Serviços";
        const sectionHeader3 = "Equipa";
        const imgPath1 = circle2;
        const imgPath2 = circle4;
        const imgPath3 = circle1;
        
        var json = require("./text_sections.json");
        
        const mainText1 = json.whoarewe;
        const mainText2 = json.services;
        const mainText3 = json.team;
        
        return (
            <div>
                <Header />
                <ImageTextSection 
                    id="whoAreWeSection"
                    sectionHeader={sectionHeader1} 
                    imgPath={imgPath2} 
                    imgAlt="Quem Somos"
                    mainText={mainText1}
                    imgPos="left"
                    readMoreLink="/quemsomos" />
                <ImageTextSection 
                    id="servicesSection"
                    sectionHeader={sectionHeader2} 
                    imgPath={imgPath3} 
                    imgAlt="Serviços"
                    mainText={mainText2} 
                    imgPos="right" 
                    readMoreLink="/servicos"/>
                <ImageTextSection 
                    id="teamSection"
                    sectionHeader={sectionHeader3} 
                    imgPath={imgPath1} 
                    imgAlt="Equipa"
                    mainText={mainText3} 
                    imgPos="left"
                    readMoreLink="/equipa" />
                <Contacts />
            </div>
        );
    }
}

export default Home;
// Example usage: <Home />