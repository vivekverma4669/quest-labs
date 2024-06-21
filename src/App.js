// src/App.js
import React, { useState } from 'react';
import PopupForm from './components/PopupForm';
import './App.css';


const App = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleButtonClick = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleButtonClick}>Open Form</button>
        <PopupForm isOpen={isFormOpen} onClose={handleCloseForm} />
      </header>
    </div>
  );
};

export default App;
