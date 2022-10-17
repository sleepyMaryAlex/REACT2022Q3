import React from 'react';
import './Progress.css';

class Progress extends React.Component {
  render() {
    return (
      <div className="circles">
        <div className="circles-wrapper">
          <div className="circle circle-lg">
            <div className="circle circle-md">
              <div className="circle circle-sm"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Progress;
