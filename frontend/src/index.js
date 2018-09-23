import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import chatApp from './reducers/reducers';
import './index.css'
import {backHome, goRooms, dupa} from "./actions/actions";

const store = createStore(chatApp)

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
