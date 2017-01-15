import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { userActions } from '../../actions/';
import './index.sass';

// Generate random avatar with Adorable API
const avatarSize = 32;
const generateRandomAvatarURL = str => `https://api.adorable.io/avatars/${avatarSize}/${str}`;

const Header = ({ userAuthenticated, userName, userImage, userUID, signOut }) => {
  const avatarSrc = userAuthenticated ? userImage || generateRandomAvatarURL(userUID) : null;

  return (
    <div className="main-header">
      <div className="container">
        <div className="row center-xs middle-xs">
          <div className="col-xs-12">
            <h1 className="main-header-title">Truco 🃏🔥</h1>
            { userAuthenticated &&
              <div className="main-header-user">
                <span className="user-name">{userName}</span>
                <img className="user-avatar" src={avatarSrc} alt={`${userName} avatar`} />
                <button onClick={signOut}>Sign out</button>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  userAuthenticated: PropTypes.bool.isRequired,
  userName: PropTypes.string,
  userImage: PropTypes.string,
  userUID: PropTypes.string,
  signOut: PropTypes.func.isRequired
};

// -------------------------------------
//  CONNECT
// -------------------------------------

const mapStateToProps = state => ({
  userAuthenticated: !!state.user,
  userName: _.get(state, 'user.displayName'),
  userImage: _.get(state, 'user.photoURL'),
  userUID: _.get(state, 'user.uid')
});

const mapDispatchToProps = {
  signOut: userActions.signOut
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

