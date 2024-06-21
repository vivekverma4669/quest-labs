import React, { useState } from 'react';
import PopupForm from './components/PopupForm';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={togglePopup}>Open Form</button>
      </header>
      {isOpen && <PopupForm closePopup={togglePopup} />}
    </div>
  );
}

export default App;
