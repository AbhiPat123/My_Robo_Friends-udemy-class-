import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App'
import * as serviceWorker from './serviceWorker';
import 'tachyons';
// why {}? because in robots.js the export line does not have a 
// default. That means multiple things can be exported.
// To select whatever you want select it within the {}
//import {robots} from './robots';

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
