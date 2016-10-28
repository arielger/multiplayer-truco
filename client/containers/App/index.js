import React, { Component, PropTypes } from 'react';
import { BrowserRouter, Match } from 'react-router';
import { Home, CreateGame } from '../';
import './index.sass';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={Home} />
          <Match pattern="/crear-partida" component={CreateGame} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
