import React, { PropTypes } from 'react';
import _ from 'lodash';
import styles from './index.sass';

const PlayerItem = ({ player }) =>
  <div className={styles.player}>
    <img className={styles.playerAvatar} src={player.avatar} alt={`${player.name} avatar`} />
    <span className={styles.playerName}>{ player.name }</span>
  </div>;

const EmptyItem = () =>
  <div className={styles.player}>
    <img
      className={styles.playerAvatar}
      src="http://www.teequilla.com/images/tq/empty-avatar.png"
      alt="Waiting for user"
    />
  </div>;

PlayerItem.propTypes = {
  player: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

const WaitRoom = ({ players, playersCount }) =>
  <div className={styles.waitRoom}>
    <div className="container">
      <h2 className={styles.title}>Waiting for more players to join the game.</h2>
      <div className={styles.playerList}>
        { players.map(player => <PlayerItem key={player.id} player={player} />)}
        { _.times(
          playersCount - players.length,
          i => <EmptyItem key={i} />)
        }
      </div>
    </div>
  </div>;

WaitRoom.propTypes = {
  players: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  playersCount: PropTypes.number.isRequired
};

export default WaitRoom;
