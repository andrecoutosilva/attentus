import React from 'react';
import { Link } from 'react-router-dom';
import './NavLinkExtended.css';

class NavLinkExtended extends React.Component {
    render() {
        return(
            <li className={"nav-item " + (this.props.isActive ? "active": "")}>
                <Link to={this.props.path} className="nav-link text-primary" onClick={() => this.props.onClick()}>{this.props.text}</Link>
            </li>
        );
    }
}

export default NavLinkExtended;