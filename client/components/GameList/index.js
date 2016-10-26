import React, { PropTypes } from 'react';

const GameList = ({ games }) =>
  <ul>
    { games.map(game =>
      <li key={game.config.key}>
        Usuarios: {game.config.users}
        A {game.config.points} puntos
        {game.config.flor ? 'Con' : 'Sin'} flor
      </li>
    ) }
  </ul>;

GameList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object)
};

export default GameList;
