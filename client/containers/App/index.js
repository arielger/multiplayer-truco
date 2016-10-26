import React, { Component, PropTypes } from 'react';
import { BrowserRouter, Match } from 'react-router';
import Rebase from 're-base';
import { Home, CreateGame } from '../';
import './index.sass';
import firebaseConfig from '../../../firebase.json';

const { apiKey, authDomain, databaseURL, storageBucket } = firebaseConfig;

// Pass firebase configuration to re-base setup
const base = Rebase.createClass({
  apiKey,
  authDomain,
  databaseURL,
  storageBucket
});

class App extends Component {
  componentWillMount() {
    base.bindToState('games', {
      context: this,
      state: 'games',
      asArray: true
    });
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          {this.props.games}
          <Match exactly pattern="/" component={Home} />
          <Match pattern="/crear-partida" component={CreateGame} />
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  games: PropTypes.array
};

export default App;
