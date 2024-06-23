import React, { useState } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
import Drawer from './components/Drawer';
import Buttons from './components/Buttons';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <NavLink to="/" className="title">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/Braze_Logo.svg/1200px-Braze_Logo.svg.png" alt="logo" style={{ height: "40px", marginLeft: "10px" }} />
          </NavLink>
          <div className="menu" onClick={toggleDrawer}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className="nav-links">
            <li><NavLink to="/">How it works</NavLink></li>
            <li><NavLink to="/product">Product</NavLink></li>
            <li><NavLink to="/solutions">Solutions</NavLink></li>
            <li><NavLink to="/customers">Customers</NavLink></li>
            <li><NavLink to="/partners">Partners</NavLink></li>
            <li><NavLink to="/company">Company</NavLink></li>
          </ul>
          <NavLink to="/login" className="login-button">Login</NavLink>
        </nav>
        <Buttons class="open-drawer-button" click={toggleDrawer} text="Open" />
        <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
        <div className="content">
          <h1>There's Never Been a Better Time to be a Better Marketer</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
          <img src="https://www.agitraining.com/sites/default/files/what-is-photoshop.jpg" alt="Example" />
        </div>
      </div>
    </Router>
  );
};

export default App;
