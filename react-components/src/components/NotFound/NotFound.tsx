import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFound.css';
import returnImg from '../../assets/icons/prev-arrow.svg';

class NotFound extends React.Component<object, { classNames: string[]; error: number }> {
  constructor(props: object) {
    super(props);
    this.state = {
      classNames: [
        'error__last',
        'error__second',
        'error__first',
        'error__basic',
        'error__first',
        'error__second',
        'error__last',
      ],
      error: 401,
    };
  }
  render() {
    return (
      <div className="wrapper">
        <div className="error">
          {this.state.classNames.map((className, index) => (
            <p className={className} key={this.state.error + index.toString()}>
              {this.state.error + index}
            </p>
          ))}
        </div>
        <p className="title">The page you were looking for could not be found</p>
        <NavLink to="/">
          <div className="return-button">
            <img src={returnImg} alt="image" />
            <p>RETURN TO MAIN PAGE</p>
          </div>
        </NavLink>
      </div>
    );
  }
}

export default NotFound;
