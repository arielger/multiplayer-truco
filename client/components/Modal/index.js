import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../';
import './index.sass';

class Modal extends Component {
  componentDidMount() {
    this.modalTarget = document.createElement('div');
    this.modalTarget.className = 'modal';
    document.body.appendChild(this.modalTarget);
    this._render();
  }

  componentWillUpdate() {
    this._render();
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.modalTarget);
    document.body.removeChild(this.modalTarget);
  }

  _render() {
    ReactDOM.render(
      <Provider store={store}>
        <div>
          <div className="modal-shadow" />
          <div className="modal-content">{this.props.children}</div>
        </div>
      </Provider>,
      this.modalTarget
    );
  }

  render() {
    return <noscript />;
  }
}

Modal.propTypes = {
  children: PropTypes.node.isRequired
};

export default Modal;
