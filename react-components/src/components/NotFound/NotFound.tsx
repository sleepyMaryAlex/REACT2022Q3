import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';
import returnImg from '../../assets/icons/prev-arrow.svg';

function NotFound() {
  const classNames: string[] = [
    'error__last',
    'error__second',
    'error__first',
    'error__basic',
    'error__first',
    'error__second',
    'error__last',
  ];
  const error = 401;
  const navigate = useNavigate();

  return (
    <div className="not-found__wrapper">
      <div className="not-found__error">
        {classNames.map((className, index) => (
          <p className={className} key={(error + index).toString()}>
            {(error + index).toString()}
          </p>
        ))}
      </div>
      <p className="not-found__title">The page you were looking for could not be found</p>
      <div className="not-found__return-button" onClick={() => navigate('/')}>
        <img src={returnImg} alt="image" />
        <p>Return to main page</p>
      </div>
    </div>
  );
}

export default NotFound;
