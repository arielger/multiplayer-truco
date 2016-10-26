import React from 'react';
import { BrowserRouter, Match } from 'react-router';
import { Home, CreateGame } from '../';
import './index.sass';

const App = () =>
  <BrowserRouter>
    <div>
      <Match exactly pattern="/" component={Home} />
      <Match pattern="/crear-partida" component={CreateGame} />
    </div>
  </BrowserRouter>;

export default App;
