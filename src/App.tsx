import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.scss';

import { Home } from './components/Home/Home';
import { Upload } from './components/Upload/Upload';
import { Wines } from './components/Wines/Wines';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="app">
                <ul>
                    <li><Link to="/upload">Ladda upp</Link></li>
                    <li><Link to="/wines">Viner</Link></li>
                </ul>
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route path="/upload" component={ Upload } />
                    <Route path="/wines" component={ Wines } />
                </Switch>
            </div>
        </Router>
    );
}
}

export default App;
