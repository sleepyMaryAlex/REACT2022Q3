import React from 'react';
import './Progress.scss';

function Progress() {
  return (
    <div className="circles">
      <div className="wrapper">
        <div className="circle large">
          <div className="circle middle">
            <div className="circle small"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress;
