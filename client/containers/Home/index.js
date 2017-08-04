import React, { PropTypes, Component } from "react";
import { connect } from "react-redux";
import { CreateGame, GameList } from "../";
import styles from "./index.sass";
import { actions as UIActions } from "../../ui";

class Home extends Component {
  componentWillUnmount() {
    this.props.dispatch(UIActions.closeCreateGameModal());
  }
  render() {
    const { showCreateGameModal } = this.props;

    return (
      <div className="container">
        {showCreateGameModal && <CreateGame />}
        <div className={styles.homeContainer}>
          <GameList />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  showCreateGameModal: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  showCreateGameModal: state.ui.showCreateGameModal
});

export default connect(mapStateToProps)(Home);
