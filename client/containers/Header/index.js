import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actions as userActions } from "../../user";
import styles from "./index.sass";

// Generate random avatar with Adorable API
const avatarSize = 32;
const generateRandomAvatarURL = str =>
  `https://api.adorable.io/avatars/${avatarSize}/${str}`;

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
    const { avatar, uid, signOut } = this.props;
    const avatarSrc = avatar || generateRandomAvatarURL(uid);

    return (
      <div className={styles.header}>
        <div className="container">
          <div className="row center-xs middle-xs">
            <div className="col-xs-12">
              <h1 className={styles.title}>Truco</h1>
              <div className={styles.rightContainer}>
                <Link to="/crear-partida">
                  <button className={styles.newGameBtn}>Create new game</button>
                </Link>
                <div className={styles.user} onClick={this.toggleDropdown}>
                  <span className={styles.userCaret} />
                  <img
                    className={styles.userAvatar}
                    src={avatarSrc}
                    alt="User avatar"
                  />
                  {this.state.dropdownOpen &&
                    <ul className={styles.userDropdown}>
                      <li><button onClick={signOut}>Sign out</button></li>
                    </ul>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  avatar: PropTypes.string,
  uid: PropTypes.string,
  signOut: PropTypes.func.isRequired
};

// Connect

const mapStateToProps = state => ({
  avatar: state.user.data.avatar,
  uid: state.user.data.uid
});

const mapDispatchToProps = {
  signOut: userActions.signOut
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
