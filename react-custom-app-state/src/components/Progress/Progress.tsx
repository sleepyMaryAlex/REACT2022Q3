import React from 'react';
import './Progress.css';

function Progress() {
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

export default Progress;
