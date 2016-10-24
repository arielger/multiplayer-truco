import React, { Component } from 'react';
import { HashRouter, Match, Miss, Link } from 'react-router';
import { Home, CreateGame, GameList } from '../';

console.log('HashRouter', HashRouter);
console.log('Match', Match);
console.log('Link', Link);
console.log('Home', Home);
console.log('CreateGame', CreateGame);
console.log('GameList', GameList);

const App = () =>
  <HashRouter basename="/">
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
  </HashRouter>;

export default App;
