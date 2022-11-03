import React from 'react';
import './Message.css';
import closeButton from '../../assets/icons/close-button.svg';
import { useAppDispatch } from 'hooks/hooks';
import { setDisplayMessage } from 'store/formSlice';

function Message() {
  const dispatch = useAppDispatch();

  return (
    <div className="message">
      <img
        className="message__close-button"
        src={closeButton}
        alt="close"
        onClick={() => {
          dispatch(setDisplayMessage(false));
        }}
      />
      <p className="message__message">CONGRATULATIONS!!!</p>
      <p className="message__message">Your character has been created successfully!</p>
    </div>
  );
}

export default Message;
