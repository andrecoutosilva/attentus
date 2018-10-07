import React  from 'react';
import './Noticias.css';
import circle1 from '../../images/circle1.png';

class Noticias extends React.Component {
    render() {
        return(
            <div className="row content-page">
                <div className="col d-flex h-100 flex-column">
                    <div className="row pt-5">
                        <div className="col-md-3 col-sm-1">
                            <img src={circle1} alt={this.props.alt} height="230" width="230"/>
                        </div>
                        <div className="col-md-9 col-sm-11 pl-4 pr-5 pb-5">
                            <h1 className="display-3 mb-3">Notícias</h1>
                            <hr/>
                            <div>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Noticias;