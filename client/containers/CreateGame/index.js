import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Modal } from '../../components/';
import { gamesActions } from '../../actions/';
import styles from './index.sass';

const RadioButtonField = ({ name, id, value, icon }) =>
  <div className="col-xs">
    <Field
      className={styles.radioInput}
      name={name} id={id} component="input" type="radio"
      value={value} parse={val => Number(val)}
    />
    <label className={styles.radioLabel} htmlFor={id}>
      <i className={`fa fa-${icon} ${styles.radioLabelIcon}`} />
      {value}
    </label>
  </div>;

RadioButtonField.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired
};

const CreateGame = ({ handleSubmit, ownHandleSubmit, userUID }) =>
  <div>
    <Modal isOpen>
      <div className={styles.createGameModal}>
        <h2 className={styles.title}>Create game</h2>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            ownHandleSubmit(handleSubmit(), userUID);
          }}
        >
          <label className={styles.inputGroupLabel} htmlFor="playersCount">Players</label>
          <div className={`row ${styles.inputGroupContainer}`}>
            <RadioButtonField name="playersCount" id="players-count-2" value={2} icon="users" />
            <RadioButtonField name="playersCount" id="players-count-4" value={4} icon="users" />
            <RadioButtonField name="playersCount" id="players-count-6" value={6} icon="users" />
          </div>

          <label className={styles.inputGroupLabel} htmlFor="points">Points to win</label>
          <div className={`row ${styles.inputGroupContainer}`}>
            <RadioButtonField name="points" id="points-15" value={15} icon="star" />
            <RadioButtonField name="points" id="points-30" value={30} icon="star" />
          </div>

          <label className={styles.inputGroupLabel} htmlFor="waitingTime">Waiting time</label>
          <div className={`row ${styles.inputGroupContainer}`}>
            <RadioButtonField name="waitingTime" id="waiting-time-20" value={20} icon="clock-o" />
            <RadioButtonField name="waitingTime" id="waiting-time-40" value={40} icon="clock-o" />
          </div>

          <div className={styles.btnContainer}>
            <Link to="/">
              <button className={styles.cancelBtn}>Cancelar</button>
            </Link>
            <input className={styles.createGameBtn} type="submit" value="Add game" />
          </div>
        </form>
      </div>
    </Modal>
  </div>;

CreateGame.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  ownHandleSubmit: PropTypes.func.isRequired,
  userUID: PropTypes.string.isRequired
};

// Connect

const mapStateToProps = state => ({
  userUID: state.user.data.uid
});

const mapDispatchToProps = dispatch => ({
  ownHandleSubmit: (values, userUID) => {
    dispatch(gamesActions.createGame({
      started: false,
      createdBy: userUID,
      players: [userUID],
      configuration: { ...values }
    }));
  }
});

const connectedCreateGame = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateGame);

export default reduxForm({
  form: 'newGame',
  initialValues: {
    playersCount: 2,
    points: 15,
    waitingTime: 20
  },
  onSubmit: values => values
})(connectedCreateGame);
