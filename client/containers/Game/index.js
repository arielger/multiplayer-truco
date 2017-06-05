import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import _get from "lodash/get";
import { WaitRoom, Board } from "../";
import { actions as gameActions } from "../../game";
import { selectors as usersSelectors } from "../../users";
import "./index.sass";

class Game extends Component {
  constructor(props) {
    super();

    this.state = {
      loadingError: false
    };

    this.gameId = props.match.params.gameId;
  }
  componentDidMount() {
    const { userId, joinGame } = this.props;

    joinGame(userId, this.gameId)
      .then(userKey => console.log("OK", userKey))
      .catch(error => {
        this.setState({ loadingError: true });
        console.log("ERROR", error);
      });
  }
  componentWillUnmount() {
    const { userId, game, leaveGame } = this.props;

    leaveGame(userId, this.userKey, this.gameId, game.createdBy, game.started);
  }
  render() {
    const { game, players } = this.props;

    if (this.state.loadingError) return <h1>There is no game with that ID.</h1>;

    if (!game) return <h1>Game is loading ...</h1>;

    if (!game.started) {
      return (
        <WaitRoom
          players={players}
          playersCount={game.configuration.playersCount}
        />
      );
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
  players: _get(state, "game.players")
    ? Object.keys(state.game.players).map(key =>
        usersSelectors.getUserById(state, state.game.players[key].id)
      )
    : []
});

const mapDispatchToProps = {
  joinGame: gameActions.joinGame,
  leaveGame: gameActions.leaveGame
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
