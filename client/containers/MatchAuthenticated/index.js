import React, { PropTypes } from 'react';
import { Match, Redirect } from 'react-router';

// MatchAuthenticated based on react-router example
// https://react-router.now.sh/auth-workflow
const MatchAuthenticated = ({
  matchWhenAuthenticated,
  isAuthenticated,
  component: Component,
  render,
  ...rest
  }) =>
    <Match
      {...rest}
      render={(props) => {
        if (matchWhenAuthenticated === isAuthenticated) return (render ? render() : <Component />);

        return (
          <Redirect
            to={{
              pathname: matchWhenAuthenticated ? '/login' : '/',
              state: { from: props.location } // eslint-disable-line react/prop-types
            }}
          />
        );
      }}
    />;

MatchAuthenticated.defaultProps = {
  matchWhenAuthenticated: true
};

MatchAuthenticated.propTypes = {
  matchWhenAuthenticated: PropTypes.bool,
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element
  ]),
  render: PropTypes.func
};

export default MatchAuthenticated;
