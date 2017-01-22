import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { userActions } from '../../actions';
import styles from './index.sass';

const SocialAuthButton = ({ name, onClick }) =>
  <button className={`btn ${styles.socialProviderBtn} ${styles[name.toLowerCase()]}`} onClick={onClick}>
    Sign in with {_.capitalize(name)}
  </button>;

SocialAuthButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

const Authentication = ({ signInWithFacebook, signInWithTwitter, signInWithGithub }) =>
  <div className={styles.container}>
    <h4 className={styles.description}>Hi 👋 Please sign in to start playing.</h4>
    <SocialAuthButton name="facebook" onClick={signInWithFacebook} />
    <SocialAuthButton name="twitter" onClick={signInWithTwitter} />
    <SocialAuthButton name="github" onClick={signInWithGithub} />
  </div>;

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
