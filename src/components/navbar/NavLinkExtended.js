import React from 'react';
import { Link } from 'react-router-dom';

class NavLinkExtended extends React.Component {
    render() {
        return(
            <li className={"nav-item " + (this.props.isActive ? "active": "")}>
                <Link to={this.props.path} className="nav-link" onClick={() => this.props.onClick()}>{this.props.text}</Link>
            </li>
        );
    }
}

export default NavLinkExtended;