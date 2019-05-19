import React from 'react';
import NavLinkExtended from './NavLinkExtended';
import './MainNavbar.css';
import brand from '../../images/attentus_logo_1.png';

class MainNavbar extends React.Component {
    
    constructor(props) {
        
        super(props);
        this.state = {
            links: [
                {path: "/", text: "Início", isActive: false},
                {path: "/quemsomos", text: "Quem Somos", isActive: false},
                {path: "/equipa", text: "Equipa", isActive: false},
                {path: "/servicos", text: "Serviços", isActive: false},
                {path: "/parcerias", text: "Parcerias", isActive: false},
                {path: "/contactos", text: "Contactos", isActive: false},
            ]
        }
    }

    handleClick(i) {
        
        const links = this.state.links.slice();
        
        for (let index = 0; index < links.length; index++) {
            const element = links[index];
            element.isActive = i === index;
        }

        this.setState({links: links});
    }

    render() {
        return(
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light-2">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <a className="navbar-brand" href="/"><img src={brand} alt="attentus saúde" /></a>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
   
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    {this.state.links.map((link, i) => 
                        <NavLinkExtended
                            path={link.path} 
                            text={link.text} 
                            isActive={link.isActive}
                            key={link.path} 
                            onClick={() => this.handleClick(i)}/> 
                    )}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default MainNavbar;
// Example usage: <MainNavbar />