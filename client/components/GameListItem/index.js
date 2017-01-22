import React, { PropTypes } from 'react';
import _ from 'lodash';
import { Link } from 'react-router';
import styles from './index.sass';

const GameListItem = ({ id, players, flor, points, waitingTime }) =>
  <div className="col-xs-6">
    <Link to={`/partida/${id}`}>
      <li className={styles.item}>
        <div className={styles.avatar} />
        <div className={`${styles.content} row`}>
          <div className="col-xs-6">
            <span className={styles.infoLabel}>
              Jugadores
              <span className="item-players-count"> (x/{players})</span>
            </span>
            <div className={styles.playersWrapper}>
              { _.times(players, i => <div className={styles.player} key={i} />) }
            </div>
          </div>
          <div className="col-xs-6">
            <span className={styles.infoLabel}>Con flor</span>
            <span className={styles.infoContent}>{ flor ? 'SI' : 'NO'}</span>
          </div>
          <div className="col-xs-6">
            <span className={styles.infoLabel}>Puntos</span>
            <span className={styles.infoContent}>{points} PUNTOS</span>
          </div>
          <div className="col-xs-6">
            <span className={styles.infoLabel}>Tiempo de espera</span>
            <span className={styles.infoContent}>{waitingTime} SEGUNDOS</span>
          </div>
        </div>
      </li>
    </Link>
  </div>;

GameListItem.propTypes = {
  id: PropTypes.string.isRequired,
  players: PropTypes.number.isRequired,
  flor: PropTypes.bool.isRequired,
  points: PropTypes.number.isRequired,
  waitingTime: PropTypes.number.isRequired
};

export default GameListItem;
