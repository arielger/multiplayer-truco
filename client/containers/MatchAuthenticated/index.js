import React, { PropTypes } from 'react';
import { Match, Redirect } from 'react-router';

// MatchAuthenticated based on react-router example
// https://react-router.now.sh/auth-workflow
const MatchAuthenticated = ({ matchWhenAuthenticated, isAuthenticated, render, ...rest }) =>
  <Match
    {...rest}
    render={(props) => {
      if (matchWhenAuthenticated === isAuthenticated) return render();

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
  render: PropTypes.func.isRequired
};

export default MatchAuthenticated;
