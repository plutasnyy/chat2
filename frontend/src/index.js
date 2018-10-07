import React from 'react';
import App from './App';
import { render } from 'react-dom'

import { BrowserRouter as Router, Route } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
import './index.css'
import 'semantic-ui-css/semantic.min.css';

render(
    <Router>
        <Route exact path="/" component={App} />
    </Router>,
    document.getElementById('root')
)
registerServiceWorker();
