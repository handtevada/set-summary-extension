import { useState } from 'react';

import Modal from './components/Modal';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleDisplay = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div>
      {isVisible && <Modal onClose={handleToggleDisplay} />}
      <button className="sse-float-btn" onClick={handleToggleDisplay}>
        SSE
      </button>
    </div>
  );
}

export default App;
