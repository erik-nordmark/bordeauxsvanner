import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import { Home } from './components/Home/Home';
import { Upload } from './components/Upload/Upload';
import { Wines } from './components/Wines/Wines';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="app">
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
