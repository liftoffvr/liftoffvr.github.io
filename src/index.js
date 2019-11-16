import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'

const app = (
    <Router>
        <Route path="/" exact component={App} />
        <Route path="/g1" exact component={(props) => <App ad="g1" />} />
        <Route path="/g2" exact component={(props) => <App ad="g2" />} />
        <Route path="/fb1" exact component={(props) => <App ad="fb1" />} />
        <Route path="/fb2" exact component={(props) => <App ad="fb2" />} />
    </Router>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
