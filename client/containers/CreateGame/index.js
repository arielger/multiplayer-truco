import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const CreateGame = () =>
  <div>
    <h1>Crear partida</h1>
    <Link to="/"><button>Cancelar</button></Link>
  </div>;

export default CreateGame;
