import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { GameListItem } from "../../components";
import {
  actions as gamesActions,
  selectors as gamesSelectors
} from "../../games";
import styles from "./index.sass";

const EmptyState = () =>
  <div className={styles.emptyState}>
    <i
      className={`fa fa-gamepad ${styles.emptyStateIcon}`}
      aria-hidden="true"
    />
    <h5 className={styles.emptyStateText}>
      There are no games to play. <br />
      You can create a new game and invite your friends.
    </h5>
  </div>;

export class GameList extends Component {
  componentDidMount() {
    this.props.loadGames();
  }

  componentWillUnmount() {
    this.props.unloadGames();
  }

  render() {
    const { games } = this.props;
    if (!games.length) return <EmptyState />;

    return (
      <ul className={`${styles.gameList} row`}>
        {games.map(game =>
          <GameListItem
            key={game.id}
            id={game.id}
            creatorAvatar={game.creatorAvatar}
            players={game.players}
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

// Connect

const mapStateToProps = state => ({
  games: gamesSelectors.getGameUIList(state)
});

const mapDispatchToProps = {
  loadGames: gamesActions.loadGames,
  unloadGames: gamesActions.unloadGames
};

export default connect(mapStateToProps, mapDispatchToProps)(GameList);
