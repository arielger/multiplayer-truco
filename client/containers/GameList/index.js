import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { GameListItem } from '../../components';
import { gamesActions } from '../../actions';
import './index.sass';

export class GameList extends Component {
  componentDidMount() {
    this.props.loadGames();
  }
  componentWillUnmount() {
    // this.props.unloadGames();
  }
  render() {
    return (
      <ul className="game-list row">
        { this.props.games.map(game =>
          <div className="col-xs-6" key={game.key}>
            <Link to={`/partida/${game.key}`}>
              <GameListItem {...game.config} />
            </Link>
          </div>
        ) }
      </ul>
    );
  }
}

GameList.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
  loadGames: PropTypes.func.isRequired,
  unloadGames: PropTypes.func.isRequired
};


// -------------------------------------
//  CONNECT
// -------------------------------------

const gameObjToArray = games => Object.keys(games).map(gameKey =>
    Object.assign({}, games[gameKey], { key: gameKey })
  );

const mapStateToProps = state => ({
  games: gameObjToArray(state.games)
});

const mapDispatchToProps = {
  loadGames: gamesActions.loadGames,
  unloadGames: gamesActions.unloadGames
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameList);
