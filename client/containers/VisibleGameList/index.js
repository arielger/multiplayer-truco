import { connect } from 'react-redux';
import { GameList } from '../../components';
import { gamesActions } from '../../actions';

const gameObjToArray = games => Object.keys(games).map(gameKey =>
    Object.assign({}, games[gameKey], { key: gameKey })
  );

const mapStateToProps = state => ({
  games: gameObjToArray(state.games)
});

const VisibleGameList = connect(
  mapStateToProps,
  { fetchGames: gamesActions.fetchGames }
)(GameList);

export default VisibleGameList;
