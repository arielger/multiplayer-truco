import React, { PropTypes } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Modal } from "../../components/";
import { actions as gamesActions } from "../../games";
import { actions as UIActions } from "../../ui";
import styles from "./index.sass";

const RadioButtonField = ({ name, id, value, icon }) =>
  <div className="col-xs">
    <Field
      className={styles.radioInput}
      name={name}
      id={id}
      component="input"
      type="radio"
      value={value}
      parse={val => Number(val)}
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

const playersCountOptions = [2, 4, 6];
const pointsOptions = [15, 30];
const waitingTimeOptions = [20, 40];

const CreateGame = ({ handleSubmit, ownHandleSubmit, closeModal, userId }, context) =>
  <div>
    <Modal isOpen>
      <div className={styles.createGameModal}>
        <h2 className={styles.title}>Create game</h2>
        <form
          onSubmit={event => {
            event.preventDefault();
            ownHandleSubmit(handleSubmit(), userId, context.router);
          }}
        >
          <label className={styles.inputGroupLabel} htmlFor="playersCount">
            Players
          </label>
          <div className={`row ${styles.inputGroupContainer}`}>
            { playersCountOptions.map(opt =>
              <RadioButtonField
                name="playersCount"
                id={`players-count-${opt}`}
                key={`players-count-${opt}`}
                value={opt}
                icon="users"
              />  
            )}
          </div>

          <label className={styles.inputGroupLabel} htmlFor="points">
            Points to win
          </label>
          <div className={`row ${styles.inputGroupContainer}`}>
            { pointsOptions.map(opt =>
              <RadioButtonField
                name="points"
                id={`points-${opt}`}
                key={`points-${opt}`}
                value={opt}
                icon="star"
              />  
            )}
          </div>

          <label className={styles.inputGroupLabel} htmlFor="waitingTime">
            Waiting time
          </label>
          <div className={`row ${styles.inputGroupContainer}`}>
            { waitingTimeOptions.map(opt =>
              <RadioButtonField
                name="waitingTime"
                id={`waiting-time-${opt}`}
                key={`waiting-time-${opt}`}
                value={opt}
                icon="clock-o"
              />
            )}
          </div>

          <div className={styles.btnContainer}>
            <button
              type="button"
              className={styles.cancelBtn}
              onClick={closeModal}
            >
              Cancelar
            </button>
            <input
              className={styles.createGameBtn}
              type="submit"
              value="Add game"
            />
          </div>
        </form>
      </div>
    </Modal>
  </div>;

CreateGame.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  ownHandleSubmit: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired
};

CreateGame.contextTypes = {
  router: PropTypes.object.isRequired
};

// Connect

const mapStateToProps = state => ({
  userId: state.user.data.uid
});

const mapDispatchToProps = dispatch => ({
  ownHandleSubmit: (values, userId, router) => {
    // Push new game to firebase
    dispatch(
      gamesActions.createGame(
        {
          started: false,
          createdBy: userId,
          configuration: { ...values }
        },
        userId,
        router
      )
    );
  },
  closeModal: () => dispatch(UIActions.closeCreateGameModal())
});

const connectedCreateGame = connect(mapStateToProps, mapDispatchToProps)(
  CreateGame
);

export default reduxForm({
  form: "newGame",
  initialValues: {
    playersCount: 2,
    points: 15,
    waitingTime: 20
  },
  onSubmit: values => values
})(connectedCreateGame);
