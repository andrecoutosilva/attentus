import React from 'react';
import './Contacts.css';
import brandLar from '../../images/attentus_lar.png';

class Contacts extends React.Component {
    render() {
        return(
            <footer className="footer mt-auto text-left">
                <div className="container-fluid">
                    <div className="row">
                        {/* ALTERNATIVE FOR XS: d-none d-sm-none: Visible only on XS */}
                        <div className="col-sm-12 d-block d-sm-none">
                            <p className="text-center mb-2"><img src={brandLar} alt="attentus saúde" /></p>
                        </div>
                        {/* ALTERNATIVE FOR OTHER SIZES: d-none d-sm-none: Hidden Only on XS */}
                        <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 d-none d-sm-block">
                            <span className="ml-4"><img src={brandLar} alt="attentus saúde" /></span>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <p className="card-text border-top mr-2 pt-2 pb-2 ">915 958 480<br/></p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <p className="card-text border-top mr-2 pt-2 pb-2">Av. Conde Margaride, nº 352 – 1º B<br/><span>4810-537 Guimarães</span></p>
                        </div>
                    </div>
                </div> 
            </footer>
        );
    }
}

export default Contacts;
// Example usage: <Contacts />