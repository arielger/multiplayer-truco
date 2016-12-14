import React from 'react';
import { BrowserRouter, Match } from 'react-router';
import { Home, WaitRoomGame } from '../';
import './index.sass';

const App = () =>
  <BrowserRouter>
    <div>
      <div className="modals-container" />
      <Match exactly pattern="/" render={() => <Home />} />
      <Match pattern="/crear-partida" render={() => <Home createGame />} />
      <Match
        pattern="/partida/:gameId"
        render={() => <WaitRoomGame />}
      />
    </div>
  </BrowserRouter>;

export default App;
