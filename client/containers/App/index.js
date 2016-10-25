import React, { Component } from 'react';
import { BrowserRouter, Match, Miss, Link } from 'react-router';
import { Home, CreateGame, GameList } from '../';

const App = () =>
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create-game">Create game</Link></li>
        <li><Link to="/game-list">Game list</Link></li>
      </ul>
      <Match exactly pattern="/" component={Home} />
      <Match pattern="/create-game" component={CreateGame} />
      <Match pattern="/game-list" component={GameList} />
    </div>
  </BrowserRouter>;

export default App;
