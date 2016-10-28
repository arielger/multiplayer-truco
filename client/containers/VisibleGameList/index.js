import { connect } from 'react-redux';
import { toArray } from 'lodash';
import { GameList } from '../../components';
import { gamesActions } from '../../actions';

const mapStateToProps = state => ({
  games: toArray(state.games)
});

const mapDispatchToProps = {
  fetchGames: gamesActions.fetchGames
};

const VisibleGameList = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameList);

export default VisibleGameList;
