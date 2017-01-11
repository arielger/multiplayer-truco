import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { CreateGame, GameList } from '../';
import './index.sass';

const Home = ({ createGame }) =>
  <div className="container">
    { createGame && <CreateGame /> }
    <div className="home-container">
      <div className="home-header">
        <h1>TRUCO</h1>
      </div>
      <div className="home-filters end-xs">
        <div className="filters-content" />
        <Link to="/crear-partida">
          <button className="btn">Crear nueva partida</button>
        </Link>
      </div>
      <GameList />
    </div>
  </div>;

Home.propTypes = {
  createGame: PropTypes.bool
};

export default Home;
