import React from 'react';
import './HeaderTextSection.css';

import {Link} from 'react-router-dom';

class HeaderTextSection extends React.Component {
    render() {

        var position = "order-lg-first";
        return (
            <div className="row">
                <div className={`col-5 order-sm-first column1 ${position}`}>                
                    <h1 className="text-center display-4">{this.props.sectionHeader}</h1>
                </div>
                <div className="col-7 column2">
                    <div className="pl-4 pr-5 py-4">
                        <p className="text-left">{this.props.mainText}</p>
                        <div className="text-right">
                            <Link to={this.props.path} className="btn btn-outline-primary">Ler Mais...</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderTextSection;
// Example usage: <HeaderTextSection />