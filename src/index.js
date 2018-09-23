import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';
import './include/bootstrap';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
