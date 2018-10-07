import React from 'react';
// import whoarewe from '../../whoarewe.png';
import circle1 from '../../images/circle1.png';
import circle2 from '../../images/circle2.png';
// import circle3 from '../../images/circle3.png';
import circle4 from '../../images/circle4.png';
// import circle_hands from '../../images/circle_team.png';
// import circle_lettering from '../../images/circle_lettering.png';
import Header from './Header';
import ImageTextSection from '../../components/ImageTextSection';
import HeaderTextSection from '../../components/HeaderTextSection';
import Contacts from './Contacts';
import './Home.css';

class Home extends React.Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {

        const sectionHeader1 = "Quem Somos";
        const sectionHeader2 = "Serviços";
        const sectionHeader3 = "Equipa";
        
        // const imgPath1 = circle_hands;
        // const imgPath2 = circle_lettering;
        const imgPath1 = circle2;
        const imgPath2 = circle4;
        const imgPath3 = circle1;
        
        var json = require("./text_sections.json");
        
        const mainText1 = json.whoarewe;
        const mainText2 = json.services;
        const mainText3 = json.team;
        console.log("Current theme ", this.props.currentTheme);

        let content; 

        if (this.props.currentTheme === 1) {
            content = <div>
                <HeaderTextSection 
                        id="whoAreWeSection"
                        sectionHeader={sectionHeader1} 
                        imgPath={imgPath1} 
                        imgAlt="Quem Somos"
                        mainText={mainText1}
                        imgPos="left"
                        path="/quemsomos" />
                    <HeaderTextSection 
                        id="servicesSection"
                        sectionHeader={sectionHeader2} 
                        imgPath={imgPath2} 
                        imgAlt="Serviços"
                        mainText={mainText2} 
                        imgPos="right" 
                        path="/servicos"/>
                    <HeaderTextSection 
                        id="teamSection"
                        sectionHeader={sectionHeader3} 
                        imgPath={imgPath3} 
                        imgAlt="Equipa"
                        mainText={mainText3} 
                        imgPos="left"
                        path="/equipa" />
            </div>;
        }
        else if (this.props.currentTheme === 2) {
            content = 
                <div>
            <ImageTextSection 
                        id="whoAreWeSection"
                        sectionHeader={sectionHeader1} 
                        imgPath={imgPath1} 
                        imgAlt="Quem Somos"
                        mainText={mainText1}
                        imgPos="left"
                        path="/quemsomos" />
                    <ImageTextSection 
                        id="servicesSection"
                        sectionHeader={sectionHeader2} 
                        imgPath={imgPath2} 
                        imgAlt="Serviços"
                        mainText={mainText2} 
                        imgPos="right" 
                        path="/servicos"/>
                    <ImageTextSection 
                        id="teamSection"
                        sectionHeader={sectionHeader3} 
                        imgPath={imgPath3} 
                        imgAlt="Equipa"
                        mainText={mainText3} 
                        imgPos="left"
                        path="/equipa" />
            </div>;
        }

        return (
            <div className="row landing-page">
                <div className="col d-flex h-100 flex-column">
                    <Header />
                    {content}                                    
                    <Contacts />
                </div>
            </div>
        );
    }
}

export default Home;
// Example usage: <Home />