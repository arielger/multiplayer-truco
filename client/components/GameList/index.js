import React, { PropTypes } from 'react';
import './index.sass';

class GameList extends React.Component {
  componentDidMount() {
    this.props.fetchGames();
  }
  render() {
    return (
      <ul className="game-list row">
        { this.props.games.map((game) => {
          const { name, users, flor } = game.config;
          return (
            <div className="col-xs-6">
              <li className="game-list-item">
                <div className="game-avatar" />
                <div className="item-content row">
                  <div className="col-xs-6">
                    <span className="item-info-label">Jugadores</span>
                    <div className="game-players-wrapper">
                      <div className="game-player"></div>
                      <div className="game-player"></div>
                      <div className="game-player"></div>
                      <div className="game-player"></div>
                    </div>
                  </div>
                  <div className="col-xs-6">
                    <span className="item-info-label">Con flor</span>
                    <span className="item-info-content">SI</span>
                  </div>
                  <div className="col-xs-6">
                    <span className="item-info-label">Puntos</span>
                    <span className="item-info-content">30 PTOS.</span>
                  </div>
                  <div className="col-xs-6">
                    <span className="item-info-label">Tiempo de espera</span>
                    <span className="item-info-content">30 SEG.</span>
                  </div>
                </div>
              </li>
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
