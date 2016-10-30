import React, { Component } from 'react';
import { BrowserRouter, Match } from 'react-router';
import { Home } from '../';
import './index.sass';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="modals-container" />
          <Match exactly pattern="/" render={() => <Home />} />
          <Match pattern="/crear-partida" render={() => <Home createGame />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
