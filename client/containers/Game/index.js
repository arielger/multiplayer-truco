import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { WaitRoom, Board } from '../';
import { actions as gameActions } from '../../game';
import { selectors as usersSelectors } from '../../users';
import './index.sass';

const GameLoader = () => <h5>Loading game</h5>;

class Game extends Component {
  componentDidMount() {
    const { userId, params, joinGame } = this.props;

    // Load game and add current player to the players list
    joinGame(userId, params.gameId);
  }
  componentWillUnmount() {
    // @todo: Remove game state from store
  }
  render() {
    const { game, players } = this.props;

    // If game is loading show loader
    if (!game) return <GameLoader />;

    // If waiting for more players to enter to the game, show waiting room component
    if (players.length < game.configuration.playersCount) {
      return <WaitRoom players={players} playersCount={game.configuration.playersCount} />;
    }

    return <Board />;
  }
}

Game.propTypes = {
  game: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  players: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  params: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  userId: PropTypes.string.isRequired,
  joinGame: PropTypes.func.isRequired
};

// Connect

const mapStateToProps = state => ({
  userId: state.user.data.uid,
  game: state.game,
  players: state.game && Object.keys(state.game.players).map((key) => {
    const userId = state.game.players[key];
    return usersSelectors.getUserById(state, userId);
  })
});

const mapDispatchToProps = dispatch => ({
  joinGame: (userId, gameId) => dispatch(gameActions.joinGame(userId, gameId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
