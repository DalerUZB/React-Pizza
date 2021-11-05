import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';
import { BrowserRouter as Router } from 'react-router-dom'
// import { Header } from './Components';


import '../src/Components/scss/app.scss'

ReactDOM.render(
    <Router>
        <App />
    </Router>
    , document.getElementById('root'));

