import React from 'react';
import {createStore} from "redux";
import App from './App';
import { render } from 'react-dom'
import registerServiceWorker from './registerServiceWorker';
import './index.css'
import 'semantic-ui-css/semantic.min.css';
import chatApp from "./reducers/reducers";
import {Provider} from "react-redux";

const store = createStore(chatApp)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker();
