import React, { PropTypes } from 'react';
import _ from 'lodash';
import './index.sass';

const GameListItem = ({ players, flor, points, waitingTime }) =>
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
  </li>;

GameListItem.propTypes = {
  players: PropTypes.number.isRequired,
  flor: PropTypes.bool.isRequired,
  points: PropTypes.number.isRequired,
  waitingTime: PropTypes.number.isRequired
};

export default GameListItem;
