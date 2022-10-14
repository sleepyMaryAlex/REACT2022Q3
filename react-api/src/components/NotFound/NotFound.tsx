import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFound.css';
import returnImg from '../../assets/icons/prev-arrow.svg';

class NotFound extends React.Component<object> {
  classNames: string[];
  error: number;
  constructor(props: object) {
    super(props);
    this.classNames = [
      'error__last',
      'error__second',
      'error__first',
      'error__basic',
      'error__first',
      'error__second',
      'error__last',
    ];
    this.error = 401;
  }

  render() {
    return (
      <div className="not-found__wrapper">
        <div className="not-found__error">
          {this.classNames.map((className, index) => (
            <p className={className} key={(this.error + index).toString()}>
              {(this.error + index).toString()}
            </p>
          ))}
        </div>
        <p className="not-found__title">The page you were looking for could not be found</p>
        <NavLink to="/">
          <div className="not-found__return-button">
            <img src={returnImg} alt="image" />
            <p>Return to main page</p>
          </div>
        </NavLink>
      </div>
    );
  }
}

export default NotFound;
