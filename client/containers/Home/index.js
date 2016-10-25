import React from 'react';
import { Link } from 'react-router';
import { VisibleGameList } from '../';

const Home = () =>
  <div>
    <h1>Truco</h1>
    <Link to="/crear-partida"><button>Crear nueva partida</button></Link>

    <VisibleGameList />
  </div>;

export default Home;
