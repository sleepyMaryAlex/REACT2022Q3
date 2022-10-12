import React from 'react';
import './Modal.css';
import closeButton from '../../assets/icons/close-button.svg';

class Modal extends React.Component<{
  handleModal: (openModal: boolean) => void;
}> {
  render() {
    return (
      <div className="modal">
        <img
          className="modal__close-button"
          src={closeButton}
          alt="close"
          onClick={() => {
            this.props.handleModal(false);
          }}
        />
        <p className="modal__message">CONGRATULATIONS!!!🥗🍜🍱</p>
        <p className="modal__message">YOUR RECIPE HAS BEEN CREATED SUCCESSFULLY!</p>
      </div>
    );
  }
}

export default Modal;
