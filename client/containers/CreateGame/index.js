import React from 'react';
import { Link } from 'react-router';
import { Modal } from '../../components/';
import { gamesActions } from '../../actions/';
import './index.sass';

class CreateGame extends React.Component {
  constructor() {
    super();

    this.state = {
      players: 2,
      flor: false,
      points: 15,
      waitingTime: 20
    };
    this.addGame = this.addGame.bind(this);
  }
  onGameConfigChange(e, property) {
    let propertyValue;

    switch (property) {
      case 'players':
        propertyValue = +e.currentTarget.value;
        break;
      case 'flor':
        propertyValue = e.currentTarget.value === 'on';
        break;
      case 'points':
        propertyValue = +e.currentTarget.value;
        break;
      case 'waitingTime':
        propertyValue = +e.currentTarget.value;
        break;
      default:
        return;
    }

    this.setState({
      [property]: propertyValue
    });
  }
  addGame(e) {
    e.preventDefault();
    const { players, flor, points, waitingTime } = this.state;
    gamesActions.createGame({ config: { players, flor, points, waitingTime } });
  }
  render() {
    return (
      <div className="create-game-modal">
        <Modal isOpen>
          <h2>Crear partida</h2>

          <form className="create-game-form" onSubmit={this.addGame}>

            <label htmlFor="players-count">Cantidad de jugadores</label>
            <input
              type="radio" name="players-count" defaultChecked
              value={2} onChange={(e) => { this.onGameConfigChange(e, 'players'); }}
            /> 2 jugadores
            <input
              type="radio" name="players-count"
              value={4} onChange={(e) => { this.onGameConfigChange(e, 'players'); }}
            /> 4 jugadores
            <input
              type="radio" name="players-count"
              value={6} onChange={(e) => { this.onGameConfigChange(e, 'players'); }}
            /> 6 jugadores
            <br />

            <label htmlFor="flor-checkbox">Con flor</label>
            <input
              id="flor-checkbox"
              type="checkbox"
              onChange={(e) => { this.onGameConfigChange(e, 'flor'); }}
            />
            <br />

            <label htmlFor="points-input">Puntos a jugar</label>
            <input
              type="radio" name="points-input"
              value={15} onChange={(e) => { this.onGameConfigChange(e, 'points'); }}
            /> 15 puntos
            <input
              type="radio" name="points-input"
              value={30} onChange={(e) => { this.onGameConfigChange(e, 'points'); }}
            /> 30 puntos
            <br />

            <label htmlFor="waiting-time-input">Tiempo de espera</label>
            <input
              type="radio" name="waiting-time-input"
              value={20} onChange={(e) => { this.onGameConfigChange(e, 'waitingTime'); }}
            /> 20 segundos
            <input
              type="radio" name="waiting-time-input"
              value={40} onChange={(e) => { this.onGameConfigChange(e, 'waitingTime'); }}
            /> 40 segundos
            <br />

            <input type="submit" value="Agregar partida" />
            <Link to="/"><button>Cancelar</button></Link>
          </form>
        </Modal>
      </div>
    );
  }
}

export default CreateGame;
