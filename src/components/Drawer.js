import React, { useEffect, useState } from 'react';
import '../styles/Drawer.css';
import Form from './Form';
import Buttons from './Buttons';

const Drawer = ({ isOpen, toggleDrawer }) => {
  const [formFields, setFormFields] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isOpen) {
      fetchFormFields();
    }
  }, [isOpen]);

 const API_KEY = 'k-8f7aa4ea-a0c7-42ac-a821-a342d21887fe';
 const ENTITY_AUTHENTICATION_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbnRpdHlJZCI6ImUtYjY2YmNhMjQtZjZjZS00NDg5LWIyZTktZTI0YTkwZTA0ODc3IiwiaWF0IjoxNzE4ODcyODg0fQ.O0DEB_S-dirK4MMa2nm0yqwDhdCtdvTySPGpmCGAqqU';
  const fetchFormFields = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://staging.questprotocol.xyz/api/campaigndetails', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${ENTITY_AUTHENTICATION_TOKEN}`,
          'API_KEY': API_KEY
        }
      });
      const data = await response.json();
      setFormFields(data.fields);
    } catch (error) {
      setError('Failed to load form fields.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`drawer ${isOpen ? "open" : ""}`}>
      <div className="drawer-header">
        <Buttons onClick={toggleDrawer} class="close-drawer-button" text="X" />
      </div>
      <div className="drawer-content">
        {loading ? <p>Loading...</p> : error ? <p>{error}</p> : <Form fields={formFields} />}
      </div>
    </div>
  );
};

export default Drawer;
