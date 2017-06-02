import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import _get from 'lodash/get';
import { WaitRoom, Board } from '../';
import { actions as gameActions } from '../../game';
import { selectors as usersSelectors } from '../../users';
import './index.sass';

class Game extends Component {
  constructor(props) {
    super();

    this.gameId = props.match.params.gameId;
  }
  componentDidMount() {
    const { userId, joinGame } = this.props;

    joinGame(userId, this.gameId)
      .then(userKey => console.log(userKey))
      .catch(error => console.log(error));
  }
  componentWillUnmount() {
    const { userId, game, leaveGame } = this.props;

    leaveGame(userId, this.userKey, this.gameId, game.createdBy, game.started);
  }
  render() {
    const { game, players } = this.props;

    if (!game) return <h1>Game is loading ...</h1>;

    // If waiting for more players to enter to the game, show waiting room component
    if (!!players.length || players.length < game.configuration.playersCount) {
      return <WaitRoom players={players} playersCount={game.configuration.playersCount} />;
    }

    return <Board />;
  }
}

Game.propTypes = {
  game: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  players: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  match: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  userId: PropTypes.string.isRequired,
  joinGame: PropTypes.func.isRequired,
  leaveGame: PropTypes.func.isRequired
};

// Connect

const mapStateToProps = state => ({
  userId: state.user.data.uid,
  game: state.game,
  players: _get(state, 'game.players') ? (
    Object.keys(state.game.players).map((key) => {
      const userId = state.game.players[key];
      return usersSelectors.getUserById(state, userId);
    })
  ) : []
});

const mapDispatchToProps = {
  joinGame: gameActions.joinGame,
  leaveGame: gameActions.leaveGame
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
