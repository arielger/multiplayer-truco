import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { Modal } from '../../components/';
import { gamesActions } from '../../actions/';
import './index.sass';

const RadioButtonField = ({ name, id, value }) =>
  <div>
    <label htmlFor={id}>{value}</label>
    <Field
      name={name} id={id} component="input" type="radio"
      value={value} parse={val => Number(val)}
    />
  </div>;

RadioButtonField.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
};

const CreateGame = ({ handleSubmit }) =>
  <div className="create-game-modal">
    <Modal isOpen>
      <h2>Crear partida</h2>
      <form className="create-game-form" onSubmit={handleSubmit}>

        <label htmlFor="playersCount">Players 👥</label>
        <RadioButtonField name="playersCount" id="players-count-2" value={2} />
        <RadioButtonField name="playersCount" id="players-count-4" value={4} />
        <RadioButtonField name="playersCount" id="players-count-6" value={6} />

        <label htmlFor="flor">Flor 🌻</label>
        <Field name="flor" id="flor" component="input" type="checkbox" />

        <label htmlFor="points">Points to play 💯</label>
        <RadioButtonField name="points" id="points-15" value={15} />
        <RadioButtonField name="points" id="points-30" value={30} />

        <label htmlFor="waitingTime">Waiting time 🕒</label>
        <RadioButtonField name="waitingTime" id="waiting-time-20" value={20} />
        <RadioButtonField name="waitingTime" id="waiting-time-40" value={40} />

        <input type="submit" value="Add game" />
        <Link to="/"><button>Cancelar</button></Link>
      </form>
    </Modal>
  </div>;

CreateGame.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'newGame',
  initialValues: {
    playersCount: 2,
    flor: false,
    points: 15,
    waitingTime: 20
  },
  onSubmit: (values, dispatch) => {
    dispatch(gamesActions.createGame({
      started: false,
      configuration: { ...values }
    }));
  }
})(CreateGame);
