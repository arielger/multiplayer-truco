import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../actions/';
import styles from './index.sass';

// Generate random avatar with Adorable API
const avatarSize = 32;
const generateRandomAvatarURL = str => `https://api.adorable.io/avatars/${avatarSize}/${str}`;

class Header extends Component {
  constructor() {
    super();

    this.state = {
      dropdownOpen: false
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
  }
  toggleDropdown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    const { isAuthenticated, avatar, uid, signOut } = this.props;
    const avatarSrc = isAuthenticated ? avatar || generateRandomAvatarURL(uid) : null;

    return (
      <div className={styles.header}>
        <div className="container">
          <div className="row center-xs middle-xs">
            <div className="col-xs-12">
              <h1 className={styles.title}>Truco</h1>
              { isAuthenticated &&
                <div className={styles.user} onClick={this.toggleDropdown}>
                  <span className={styles.userCaret} />
                  <img className={styles.userAvatar} src={avatarSrc} alt="User avatar" />
                  { this.state.dropdownOpen &&
                    <ul className={styles.userDropdown}>
                      <li><button onClick={signOut}>Sign up</button></li>
                    </ul>
                  }
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
  uid: PropTypes.string,
  signOut: PropTypes.func.isRequired
};

// -------------------------------------
//  CONNECT
// -------------------------------------

const mapStateToProps = (state) => {
  const isAuthenticated = state.user.authenticated;

  return {
    ...isAuthenticated ? {
      avatar: state.user.data.avatar,
      uid: state.user.data.uid
    } : {},
    isAuthenticated
  };
};

const mapDispatchToProps = {
  signOut: userActions.signOut
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

