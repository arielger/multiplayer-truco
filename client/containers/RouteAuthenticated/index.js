import React, { PropTypes } from "react";
import { Route, Redirect } from "react-router-dom";

// RouteAuthenticated based on react-router example
// https://react-router.now.sh/auth-workflow
const RouteAuthenticated = ({
  matchWhenAuthenticated,
  isAuthenticated,
  component: Component,
  render,
  ...rest
}) =>
  <Route
    {...rest}
    render={props => {
      if (matchWhenAuthenticated === isAuthenticated) {
        return render ? render() : <Component {...props} />;
      }

      return (
        <Redirect
          to={{
            pathname: matchWhenAuthenticated ? "/login" : "/",
            state: { from: props.location } // eslint-disable-line react/prop-types
          }}
        />
      );
    }}
  />;

RouteAuthenticated.defaultProps = {
  matchWhenAuthenticated: true
};

RouteAuthenticated.propTypes = {
  matchWhenAuthenticated: PropTypes.bool,
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  render: PropTypes.func
};

export default RouteAuthenticated;
