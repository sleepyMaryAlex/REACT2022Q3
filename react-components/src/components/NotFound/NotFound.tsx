import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.scss';
import returnImg from '../../assets/icons/prev-arrow.svg';

function NotFound() {
  const classNames: string[] = ['last', 'second', 'first', 'basic', 'first', 'second', 'last'];
  const error = 401;
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <div className="error">
        {classNames.map((className, index) => (
          <p className={className} key={(error + index).toString()}>
            {(error + index).toString()}
          </p>
        ))}
      </div>
      <p className="title">The page you were looking for could not be found</p>
      <div className="return-button" onClick={() => navigate('/')}>
        <img src={returnImg} alt="image" />
        <p>Return to main page</p>
      </div>
    </div>
  );
}

export default NotFound;
