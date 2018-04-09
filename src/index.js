import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/game';
import registerServiceWorker from './registerServiceWorker';
import App from './components/app';

ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();
