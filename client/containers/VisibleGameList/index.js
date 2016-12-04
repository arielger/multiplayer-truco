import { connect } from 'react-redux';
import { GameList } from '../../components';
import { gamesActions } from '../../actions';

const gameObjToArray = games => Object.keys(games).map(gameKey =>
    Object.assign({}, games[gameKey], { key: gameKey })
  );

const mapStateToProps = state => ({
  games: gameObjToArray(state.games)
});

const mapDispatchToProps = {
  fetchGames: gamesActions.fetchGames
};

const VisibleGameList = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameList);

export default VisibleGameList;
