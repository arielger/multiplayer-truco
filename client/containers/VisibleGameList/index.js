import { connect } from 'react-redux';
import { GameList } from '../../components';

const mapStateToProps = state => ({
  games: state.gameList
});

const VisibleGameList = connect(
  mapStateToProps,
  null
)(GameList);

export default VisibleGameList;
