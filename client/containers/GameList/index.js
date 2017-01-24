import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { GameListItem } from '../../components';
import { gamesActions } from '../../actions';
import { getAllGames } from '../../reducers/games';
import styles from './index.sass';

export class GameList extends Component {
  componentDidMount() {
    this.props.loadGames();
  }
  componentWillUnmount() {
    // this.props.unloadGames();
  }
  render() {
    const { games } = this.props;

    if (!games.length) return <h4>No games yet.</h4>;

    return (
      <ul className={`${styles.gameList} row`}>
        { games.map(game =>
          <GameListItem
            key={game.id}
            id={game.id}
            creatorAvatar={game.creatorAvatar}
            players={[]}
            {...game.configuration}
          />
        )}
      </ul>
    );
  }
}

GameList.propTypes = {
  games: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  loadGames: PropTypes.func.isRequired,
  unloadGames: PropTypes.func.isRequired
};


// -------------------------------------
//  CONNECT
// -------------------------------------

const mapStateToProps = state => ({
  games: getAllGames(state)
});

const mapDispatchToProps = {
  loadGames: gamesActions.loadGames,
  unloadGames: gamesActions.unloadGames
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameList);
