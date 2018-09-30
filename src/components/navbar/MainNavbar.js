import React from 'react';

class MainNavbar extends React.Component {
    render() {
        return(
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-primary">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="">attentus saúde</a>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="">Início <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#whoAreWeSection">Quem Somos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#servicesSection">Serviços</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#teamSection">Equipa</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contactsSection">Contactos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="" onClick={this.props.themeHandler}>Alterar Tema</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default MainNavbar;
// Example usage: <MainNavbar />