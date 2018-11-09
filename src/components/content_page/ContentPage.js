import React from 'react';

class ContentPage extends React.Component {
    
    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {

        return (
            <div className="p-5">
                <div className="row content-page">
                    <div className="col d-flex h-100 flex-column">
                        <div className="row pt-5">
                            <div className="col-md-3 col-sm-1">
                                <img src={this.props.pageImg} alt={this.props.alt} height="230" width="230"/>
                            </div>
                            <div className="col-md-9 col-sm-11 pl-4 pr-5 pb-5">
                                <h1 className="display-3 py-5 my-3 text-primary">{this.props.pageTitle}</h1>
                                <hr/>
                                <div>
                                    {this.props.children}                                    
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