import React, { PropTypes } from 'react';
import Rebase from 're-base';
import { Link } from 'react-router';

import firebaseConfig from '../../../firebase.json';

const { apiKey, authDomain, databaseURL, storageBucket } = firebaseConfig;

// Pass firebase configuration to re-base setup
const base = Rebase.createClass({
  apiKey,
  authDomain,
  databaseURL,
  storageBucket
});

class CreateGame extends React.Component {
  constructor() {
    super();

    this.addGame = this.addGame.bind(this);
  }
  addGame() {
    debugger;
    const gameName = this.gameNameInput.value;
    const players = this.playersInput.value;
    base.push('games', {
      data: { gameName, players },
      then(err) {
        console.log(err);
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Crear partida</h1>
        <input ref={node => (this.gameNameInput = node)} type="text" placeholder="game name" />
        <input ref={node => (this.playersInput = node)} type="number" placeholder="players" />
        <button onClick={this.addGame}>Agregar partida</button>
        <Link to="/"><button>Cancelar</button></Link>
      </div>
    );
  }
}

export default CreateGame;
