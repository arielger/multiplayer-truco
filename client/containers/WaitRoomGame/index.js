import React, { Component } from 'react';
import styles from './index.sass';

class WaitRoomGame extends Component {
  componentDidMount() {
    console.log('Save user as waiting user.');
  }
  componentWillUnmount() {
    console.log('User is leaving the waiting room');
  }
  render() {
    return (
      <div className={styles.waitRoom}>
        <div className="container">
          <h2 className={styles.title}>Waiting for more players to join the game.</h2>
        </div>
      </div>
    );
  }
}

export default WaitRoomGame;
