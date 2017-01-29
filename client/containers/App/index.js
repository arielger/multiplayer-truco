import React, { PropTypes } from 'react';
import { BrowserRouter, Match } from 'react-router';
import { connect } from 'react-redux';
import { MatchAuthenticated, Header, Authentication, Home, Game } from '../';
import './index.sass';

const App = ({ isAuthenticated }) =>
  <BrowserRouter>
    <div className="app-container">
      <div className="modals-container" />

      {/* Show Header component if the route isn't /login */}
      <Match
        pattern="/"
        render={({ location }) => !location.pathname.startsWith('/login') && <Header />}
      />

      <MatchAuthenticated
        matchWhenAuthenticated={false}
        isAuthenticated={isAuthenticated}
        pattern="/login"
        exactly
        component={Authentication}
      />
      <MatchAuthenticated
        isAuthenticated={isAuthenticated}
        pattern="/"
        exactly
        component={Home}
      />
      <MatchAuthenticated
        isAuthenticated={isAuthenticated}
        pattern="/crear-partida"
        exactly
        render={() => <Home createGame />}
      />
      <MatchAuthenticated
        isAuthenticated={isAuthenticated}
        pattern="/partida/:gameId"
        exactly
        component={Game}
      />
    </div>
  </BrowserRouter>;

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

// -------------------------------------
//  CONNECT
// -------------------------------------

const mapStateToProps = state => ({
  isAuthenticated: state.user.authenticated
});

export default connect(
  mapStateToProps
)(App);

