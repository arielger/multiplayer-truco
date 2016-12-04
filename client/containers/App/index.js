import React, { Component } from 'react';
import { BrowserRouter, Match } from 'react-router';
import { userActions } from '../../actions';
import { Home, WaitRoomGame } from '../';
import './index.sass';

class App extends Component {
  componentDidMount() {
    userActions.signInAnonymously();
  }
  render() {
    return (
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
      </BrowserRouter>
    );
  }
}

export default App;
