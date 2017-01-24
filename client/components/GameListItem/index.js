import React, { PropTypes } from 'react';
import _ from 'lodash';
import { Link } from 'react-router';
import styles from './index.sass';

const GameListItem = ({ id, players, playersCount, points, waitingTime, creatorAvatar }) =>
  <div className={`${styles.itemContainer} col-xs-12 col-sm-4 col-md-3`}>
    <Link to={`/partida/${id}`}>
      <li className={styles.item}>
        <img src={creatorAvatar} alt="Game creator avatar" className={styles.avatar} />
        <div className={styles.content}>
          <div className={styles.infoWrapper}>
            <span className={styles.infoLabel}>Jugadores</span>
            <div className={styles.players}>
              { _.times(playersCount, i => <div className={styles.player} key={i} />) }
            </div>
          </div>
          <div className={styles.infoWrapper}>
            <span className={styles.infoLabel}>Puntos</span>
            <span className={styles.infoContent}>{points} PUNTOS</span>
          </div>
          <div className={styles.infoWrapper}>
            <span className={styles.infoLabel}>Tiempo de espera</span>
            <span className={styles.infoContent}>{waitingTime} SEGUNDOS</span>
          </div>
        </div>
      </li>
    </Link>
  </div>;

GameListItem.propTypes = {
  id: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired,
  playersCount: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
  waitingTime: PropTypes.number.isRequired,
  creatorAvatar: PropTypes.string.isRequired
};

export default GameListItem;
