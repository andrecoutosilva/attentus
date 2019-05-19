import React from 'react';
import './ContentPage.css';

class ContentPage extends React.Component {
    
    componentDidMount() {
        window.scrollTo(0,0);
    };

    
    render() {
        
        const negativeMargin = {
            marginLeft: -15,
            marginRight: -15
        };

        return (

            <div className="p-5" style={negativeMargin}>
                <div className="row content-page">
                    <div className="col d-flex h-100 flex-column">
                        <div className="row pt-5">
                            <div className="col-lg-3 col-md-12 col-sm-12">
                                <div className="content-image pl-lg-5 text-lg-left text-center">
                                    <img src={this.props.pageImg} alt={this.props.alt} height="230" width="230"/>
                                </div>
                                <div className="row pt-4">
                                    <div className="col-md-12 text-block">
                                        {this.props.navigation}                                    
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-12 col-sm-12 pb-5">
                                <h1 className="display-4 text-primary text-lg-left text-center">{this.props.pageTitle}</h1>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 px-lg-0 pl-lg-3 pr-lg-5 px-md-5 px-sm-5">
                                        <hr/>
                                    </div>
                                </div>
                                <div className="row pt-4">
                                    <div className="col-lg-12 col-md-12 px-lg-0 pl-lg-3 pr-lg-5 px-md-5 px-sm-5 text-block">
                                        {this.props.children}                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentPage;
// Example usage: <ContentPage />