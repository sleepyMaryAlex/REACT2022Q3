import React from 'react';
import './Message.css';
import closeButton from '../../assets/icons/close-button.svg';
import { IMessage } from 'types/types';

function Message(props: IMessage) {
  return (
    <div className="message">
      <img
        className="message__close-button"
        src={closeButton}
        alt="close"
        onClick={() => {
          props.setDisplayMessage(false);
        }}
      />
      <p className="message__message">CONGRATULATIONS!!!</p>
      <p className="message__message">Your character has been created successfully!</p>
    </div>
  );
}

export default Message;
