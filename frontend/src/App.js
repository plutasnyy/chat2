import React, {Component} from 'react';
import HomePage from "./components/HomePage";
import Room from './components/Room'
import { BrowserRouter as Router, Route } from "react-router-dom";
export default class App extends Component {
    render() {
        return (
            <Router>
              <div className="container">
                <Route exact path="/" component={HomePage} />
                <Route path="/room/:username/:roomID" component={Room} />
              </div>
            </Router>
        );
    }
}