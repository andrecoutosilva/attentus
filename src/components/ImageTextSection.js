import React from 'react';
import './ImageTextSection.css';

class ImageTextSection extends React.Component {
    render() {

        var position;

        switch (this.props.imgPos) {
            case "left":
                position = "order-lg-first";
                break;

            case "right":
                position = "order-lg-last";
                break;
            
            default:
                position = "order-lg-first";
                break;
        }

        return (
            <div className="row">
                <div className={`col order-sm-first my-auto column1 ${position}`}>
                    <img src={this.props.imgPath} alt="Quem Somos" height="300" width="300"/>
                </div>
                <div className="col column2">
                    <div className="pl-4 pr-5 py-4">
                        <h1 className="text-left"><strong>{this.props.sectionHeader}</strong></h1>
                        <p className="text-left">{this.props.mainText}</p>
                        <div className="text-right">
                            <button type="button" className="btn btn-outline-primary">Ler mais...</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageTextSection;
// Example usage: <ImageTextSection />