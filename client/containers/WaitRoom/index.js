import React, { PropTypes } from 'react';
import styles from './index.sass';

const PlayerItem = ({ player }) =>
  <div className={styles.player}>
    <img className={styles.playerAvatar} src={player.avatar} alt={`${player.name} avatar`} />
    <span className={styles.playerName}>{ player.name }</span>
  </div>;

PlayerItem.propTypes = {
  player: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

const WaitRoom = ({ players }) =>
  <div className={styles.waitRoom}>
    <div className="container">
      <h2 className={styles.title}>Waiting for more players to join the game.</h2>
      <div className={styles.playerList}>
        { players.map(player => <PlayerItem key={player.id} player={player} />)}
      </div>
    </div>
  </div>;

WaitRoom.propTypes = {
  players: PropTypes.array.isRequired // eslint-disable-line react/forbid-prop-types
};

export default WaitRoom;
