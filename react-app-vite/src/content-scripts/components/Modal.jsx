import React from 'react';

import Information from './Sections/Information';
import Finance from './Sections/Finance';
import ShareHolder from './Sections/ShareHolder';
import Benefit from './Sections/Benefit';
import News from './Sections/News';

const Modal = ({ onClose }) => {
  const symbol = window.location.pathname.split('/')[6];
  return (
    <div className="sse-container">
      <div className="sse-paper">
        {/* Header */}
        <div className="sse-header">
          <h1>SET Summary Extension</h1>
          <button onClick={onClose}>x</button>
        </div>

        {/* Content */}
        <div className="sse-sections-container">
          <Information symbol={symbol} />
          <Finance symbol={symbol} />
          <ShareHolder symbol={symbol} />
          <Benefit symbol={symbol} />
          <News symbol={symbol} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
