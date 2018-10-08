import React from 'react';
import NavLinkExtended from './NavLinkExtended';

class MainNavbar extends React.Component {
    
    constructor(props) {
        
        super(props);
        this.state = {
            links: [
                {path: "/", text: "Início", isActive: false},
                {path: "/quemsomos", text: "Quem Somos", isActive: false},
                {path: "/servicos", text: "Serviços", isActive: false},
                {path: "/equipa", text: "Equipa", isActive: false},
                {path: "/parcerias", text: "Parcerias", isActive: false},
                {path: "/noticias", text: "Notícias", isActive: false},
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
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-primary">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="">attentus saúde</a>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    {this.state.links.map((link, i) => 
                        <NavLinkExtended
                            path={link.path} 
                            text={link.text} 
                            isActive={link.isActive}
                            key={link.path} 
                            onClick={() => this.handleClick(i)}/> 
                    )}
                        <li className="nav-item">
                            <a className="nav-link" href="" onClick={this.props.themeHandler}>Alterar Tema ({this.props.currentTheme})</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default MainNavbar;
// Example usage: <MainNavbar />