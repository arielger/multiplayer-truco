import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { gamesActions } from '../../actions/'
import { Modal } from '../../components/';

class CreateGame extends React.Component {
  constructor() {
    super();

    this.addGame = this.addGame.bind(this);
  }
  addGame() {
    const game = {
      config: {
        name: this.gameNameInput.value,
        players: this.playersInput.value,
        flor: this.florCheckbox.checked
      }
    };
    gamesActions.createGame(game);
  }
  render() {
    return (
      <Modal>
        <div className="container">
          <h1>Crear partida</h1>

          <label htmlFor="game-name-input">Nombre de la partida</label><br />
          <input id="game-name-input" ref={node => (this.gameNameInput = node)} type="text" /><br />

          <label htmlFor="players-count-input">Cantidad de usuarios</label><br />
          <input id="players-count-input" ref={node => (this.playersInput = node)} type="number" /><br />

          <label htmlFor="flor-checkbox">Con flor</label><br />
          <input id="flor-checkbox" ref={node => (this.florCheckbox = node)} type="checkbox" /><br />

          <button onClick={this.addGame}>Agregar partida</button>
          <Link to="/"><button>Cancelar</button></Link>
        </div>
      </Modal>
    );
  }
}

export default CreateGame;
