import React, { PropTypes } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { RouteAuthenticated, Header, Authentication, Home, Game } from "../";
import "./index.sass";

const App = ({ isAuthenticated }) =>
  <BrowserRouter>
    <div className="app-container">
      <div className="modals-container" />

      {/* Show Header component if the route isn't /login */}
      <Switch>
        <Route path="/login" component={null} />
        <Route path="/" component={Header} />
      </Switch>

      <RouteAuthenticated
        matchWhenAuthenticated={false}
        isAuthenticated={isAuthenticated}
        path="/login"
        exact
        component={Authentication}
      />
      <RouteAuthenticated
        isAuthenticated={isAuthenticated}
        path="/"
        exact
        component={Home}
      />
      <RouteAuthenticated
        isAuthenticated={isAuthenticated}
        path="/crear-partida"
        exact
        render={() => <Home createGame />}
      />
      <RouteAuthenticated
        isAuthenticated={isAuthenticated}
        path="/partida/:gameId"
        exact
        component={Game}
      />
    </div>
  </BrowserRouter>;

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.authenticated
});

export default connect(mapStateToProps)(App);
