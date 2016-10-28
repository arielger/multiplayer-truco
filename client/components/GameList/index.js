import React, { PropTypes } from 'react';
import './index.sass';

class GameList extends React.Component {
  componentDidMount() {
    this.props.fetchGames();
  }
  render() {
    return (
      <ul className="game-list row">
        { this.props.games.map((game) => {
          const { name, users, flor } = game.config;
          return (
            <div className="col-xs-6">
              <li className="game-list-item">
                <div className="game-avatar" />
                <div className="item-content">
                  Nombre: {name}
                  Usuarios: {users}
                  Flor: {flor}
                </div>
              </li>
            </div>
          );
        }) }
      </ul>
    );
  }
}

GameList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchGames: PropTypes.func.isRequired
};

export default GameList;
