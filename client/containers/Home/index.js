import React, { PropTypes } from 'react';
import { CreateGame, GameList } from '../';
import styles from './index.sass';

const Home = ({ createGame }) =>
  <div className="container">
    { createGame && <CreateGame /> }
    <div className={styles.homeContainer}>
      <GameList />
    </div>
  </div>;

Home.propTypes = {
  createGame: PropTypes.bool
};

export default Home;
