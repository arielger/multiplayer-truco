import React from 'react';
import { BrowserRouter, Match, Link } from 'react-router';
import { Home, CreateGame, GameList } from '../';

const App = () =>
  <BrowserRouter>
    <div>
      <Match exactly pattern="/" component={GameList} />
      <Match pattern="/crear-partida" component={CreateGame} />
    </div>
  </BrowserRouter>;

export default App;
