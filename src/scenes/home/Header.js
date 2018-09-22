import React from 'react';
import logo from './attentus_logo.png';
import './Header.css';

class Header extends React.Component {
    render() {
      return (
        <div className="row">
            <div className="col">
                <header className="App-header mt-5 text-center">
                {/* <h1 className="display-4 App-title">attentus</h1> */}
                    <img src={logo} alt="Attentus Saude" className="App-logo" height="282" width="843"/>
                </header>
            </div>
        </div>
      );
    }
  }
  
  export default Header;
  