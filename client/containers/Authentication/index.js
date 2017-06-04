import React, { PropTypes } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { Loader } from "../../components";
import { actions as userActions } from "../../user";
import styles from "./index.sass";

const SocialAuthButton = ({ name, onClick }) =>
  <button
    className={`btn ${styles.socialProviderBtn} ${styles[name.toLowerCase()]}`}
    onClick={onClick}
  >
    Sign in with {_.capitalize(name)}
  </button>;

SocialAuthButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

const Authentication = ({
  signInWithFacebook,
  signInWithTwitter,
  signInWithGithub,
  isLoading
}) =>
  <div className={styles.container}>
    <h1 className={styles.title}>Truco</h1>
    <div className={styles.modal}>
      <Loader show={isLoading}>
        <h4 className={styles.description}>
          Hi 👋 Please sign in to start playing.
        </h4>
        <SocialAuthButton name="facebook" onClick={signInWithFacebook} />
        <SocialAuthButton name="twitter" onClick={signInWithTwitter} />
        <SocialAuthButton name="github" onClick={signInWithGithub} />
      </Loader>
    </div>
  </div>;

Authentication.propTypes = {
  signInWithFacebook: PropTypes.func.isRequired,
  signInWithTwitter: PropTypes.func.isRequired,
  signInWithGithub: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

// -------------------------------------
//  CONNECT
// -------------------------------------

const mapStateToProps = state => ({
  isLoading: state.user.loading
});

const mapDispatchToProps = {
  signInWithFacebook: userActions.signInWithFacebook,
  signInWithTwitter: userActions.signInWithTwitter,
  signInWithGithub: userActions.signInWithGithub
};

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
