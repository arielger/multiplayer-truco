import React from 'react';
import { Link } from 'react-router';
import { VisibleGameList } from '../';
import './index.sass';

const Home = () =>
  <div className="container">
    <div className="home-container">
      <div className="home-header">
        <h1>TRUCO</h1>
      </div>
      <div className="home-filters end-xs">
        <div className="filters-content"></div>
        <Link to="/crear-partida">
          <button className="btn">Crear nueva partida</button>
        </Link>
      </div>
      <VisibleGameList />
    </div>
  </div>;

export default Home;
