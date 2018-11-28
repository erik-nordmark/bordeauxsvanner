import React, { Component } from 'react';
import './App.scss';


class App extends Component {
  render() {
    return (
        <div className="app">
            <div className="splash"></div>
            <div className="logo"></div>
            <section>
                <h2>Vinmässa 2019</h2>
                <p>9/2 Quality Hotel, Vänersborg. 16.00 - 22.00</p>
                <a href="mailto:info@bordeauxsvanner.se">info@bordeauxsvanner.se</a>
            </section>
            <aside>
                <h3>Veckans vintips</h3>
                <h4>Côtes-du-Rhône 2015 E. Guigal (2011)</h4>
            </aside>
        </div>
    );
}
}

export default App;
