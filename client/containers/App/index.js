import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Match, Redirect } from 'react-router';
import { Header, Authentication, Home, WaitRoomGame } from '../';
import './index.sass';

const App = ({ isAuthenticated }) =>
  <BrowserRouter>
    <div>
      <div className="modals-container" />
      <Header />
      {/* Redirect all routes to login page if the user is not logged in */}
      <Match
        pattern="/"
        render={() => {
          if (!isAuthenticated) return <Redirect to={{ pathname: '/login' }} />;
          return null;
        }}
      />

      <Match pattern="/" exactly render={() => <Home />} />
      <Match pattern="/login" render={() => <Authentication />} />
      <Match pattern="/crear-partida" render={() => <Home createGame />} />
      <Match pattern="/partida/:gameId" render={() => <WaitRoomGame />} />
    </div>
  </BrowserRouter>;

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

// -------------------------------------
//  CONNECT
// -------------------------------------

const mapStateToProps = state => ({
  isAuthenticated: !!state.user
});

export default connect(
  mapStateToProps
)(App);
