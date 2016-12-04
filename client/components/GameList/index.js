import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import './index.sass';

class GameList extends React.Component {
  componentDidMount() {
    this.props.fetchGames();
  }
  render() {
    return (
      <ul className="game-list row">
        { this.props.games.map((game) => {
          const { players, flor, points, waitingTime } = game.config;
          return (
            <div className="col-xs-6" key={game.key}>
              <Link to={`/partida/${game.key}`}>
                <li className="game-list-item">
                  <div className="game-avatar" />
                  <div className="item-content row">
                    <div className="col-xs-6">
                      <span className="item-info-label">
                        Jugadores
                        <span className="item-players-count"> (x/{players})</span>
                      </span>
                      <div className="game-players-wrapper">
                        { _.times(players, () => <div className="game-player" />) }
                      </div>
                    </div>
                    <div className="col-xs-6">
                      <span className="item-info-label">Con flor</span>
                      <span className="item-info-content">{ flor ? 'SI' : 'NO'}</span>
                    </div>
                    <div className="col-xs-6">
                      <span className="item-info-label">Puntos</span>
                      <span className="item-info-content">{points} PUNTOS</span>
                    </div>
                    <div className="col-xs-6">
                      <span className="item-info-label">Tiempo de espera</span>
                      <span className="item-info-content">{waitingTime} SEGUNDOS</span>
                    </div>
                  </div>
                </li>
              </Link>
            </div>
          );
        }) }
      </ul>
    );
  }
}

GameList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchGames: PropTypes.func.isRequired
};

export default GameList;
