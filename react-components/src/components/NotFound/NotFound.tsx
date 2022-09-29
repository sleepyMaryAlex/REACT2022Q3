import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFound.css';
import returnImg from '../../assets/icons/prev-arrow.svg';

class NotFound extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="error__wrapper">
          <div className="last">401</div>
          <div className="second">402</div>
          <div className="first">403</div>
          <div className="main__error">404</div>
          <div className="first">405</div>
          <div className="second">406</div>
          <div className="last">407</div>
        </div>
        <div className="title">The page you were looking for could not be found</div>
        <NavLink to="/">
          <div className="return-button">
            <img src={returnImg} alt="image" />
            <div>RETURN TO MAIN</div>
          </div>
        </NavLink>
      </div>
    );
  }
}

export default NotFound;
