import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { CreateGame, GameList } from '../';
import styles from './index.sass';

const Home = ({ createGame }) =>
  <div className="container">
    { createGame && <CreateGame /> }
    <div className={styles.homeContainer}>
      <Link to="/crear-partida">
        { /* @todo: Add filter section */}
        <button className={`btn ${styles.newGameBtn}`}>Create new game</button>
      </Link>
      <GameList />
    </div>
  </div>;

Home.propTypes = {
  createGame: PropTypes.bool
};

export default Home;
