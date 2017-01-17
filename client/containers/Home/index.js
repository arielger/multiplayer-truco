import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { CreateGame, GameList } from '../';
import './index.sass';

const Home = ({ createGame }) =>
  <div className="container">
    { createGame && <CreateGame /> }
    <div className="home-container">
      <Link to="/crear-partida">
        { /* @todo: Add filter section */}
        <button className="btn new-game-btn">Create new game</button>
      </Link>
      <GameList />
    </div>
  </div>;

Home.propTypes = {
  createGame: PropTypes.bool
};

export default Home;
