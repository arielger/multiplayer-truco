import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const GameList = () =>
  <div>
    <h1>Truco</h1>

    <Link to="/crear-partida"><button>Crear nueva partida</button></Link>
    <h3>Lista de partidas</h3>

  </div>;

export default GameList;
