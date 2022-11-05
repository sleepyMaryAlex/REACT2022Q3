import React from 'react';
import './Message.scss';
import closeButton from '../../assets/icons/close-button.svg';
import { useAppDispatch } from 'hooks/hooks';
import { setDisplayMessage } from 'store/formSlice';

function Message() {
  const dispatch = useAppDispatch();

  return (
    <div className="message-container">
      <img
        className="close-button"
        src={closeButton}
        alt="close"
        onClick={() => {
          dispatch(setDisplayMessage(false));
        }}
      />
      <p className="message">CONGRATULATIONS!!!</p>
      <p className="message">Your character has been created successfully!</p>
    </div>
  );
}

export default Message;
