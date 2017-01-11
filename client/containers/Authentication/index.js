import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../actions';
import './index.sass';

class Authentication extends Component {
  render() {
    return (
      <div className="container">
        <div className="authentication-panel">
          <button className="btn" onClick={this.props.signInWithFacebook}>
            Authenticate with facebook
          </button>
          <button className="btn" onClick={this.props.signInWithTwitter}>
            Authenticate with Twitter
          </button>
          <button className="btn" onClick={this.props.signInWithGithub}>
            Authenticate with Github
          </button>
        </div>
      </div>
    );
  }
}

Authentication.propTypes = {
  signInWithFacebook: PropTypes.func.isRequired,
  signInWithTwitter: PropTypes.func.isRequired,
  signInWithGithub: PropTypes.func.isRequired
};

// -------------------------------------
//  CONNECT
// -------------------------------------

const mapDispatchToProps = {
  signInWithFacebook: userActions.signInWithFacebook,
  signInWithTwitter: userActions.signInWithTwitter,
  signInWithGithub: userActions.signInWithGithub
};

export default connect(
  () => ({}),
  mapDispatchToProps
)(Authentication);
