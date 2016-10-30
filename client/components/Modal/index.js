import React, { PropTypes } from 'react';
import ReactModal from 'react-modal';
import './index.sass';

class Modal extends React.Component {
  constructor() {
    super();

    ReactModal.setAppElement('body');
  }
  render() {
    const { isOpen, children } = this.props;
    return (
      <ReactModal
        isOpen={isOpen}
        className="modal-content"
        overlayClassName="modal-overlay"
        {...this.props}
      >
        {children}
      </ReactModal>
    );
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default Modal;
