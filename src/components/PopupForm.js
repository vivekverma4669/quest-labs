import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PopupForm.css';

function PopupForm({ closePopup }) {
  const [formData, setFormData] = useState({});
  const [formValues, setFormValues] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = 'k-8f7aa4ea-a0c7-42ac-a821-a342d21887fe';
  const ENTITY_AUTHENTICATION_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbnRpdHlJZCI6ImUtYjY2YmNhMjQtZjZjZS00NDg5LWIyZTktZTI0YTkwZTA0ODc3IiwiaWF0IjoxNzE4ODcyODg0fQ.O0DEB_S-dirK4MMa2nm0yqwDhdCtdvTySPGpmCGAqqU';
  const ENTITY_ID = 'e-b66bca24-f6ce-4489-b2e9-e24a90e04877';
  const CAMPAIGN_ID = 'c-14d4f959-5999-4308-af48-37549b89eec7';

  useEffect(() => {
    axios.get(`https://staging.questprotocol.xyz/api/campaigns/${CAMPAIGN_ID}`, {
      headers: {
        'Authorization': `Bearer ${ENTITY_AUTHENTICATION_TOKEN}`,
        'x-api-key': API_KEY
      }
    })
    .then(response => {
      setFormData(response.data);
      setLoading(false);
    })
    .catch(error => {
      setError(error.message);
      setLoading(false);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation example
    if (!formValues.name || !formValues.email) {
      setError('All fields are required');
      return;
    }

    axios.post(`https://staging.questprotocol.xyz/api/campaigns/${CAMPAIGN_ID}/actions`, formValues, {
      headers: {
        'Authorization': `Bearer ${ENTITY_AUTHENTICATION_TOKEN}`,
        'x-api-key': API_KEY
      }
    })
    .then(response => {
      alert('Form submitted successfully');
      closePopup();
    })
    .catch(error => {
      setError(error.message);
    });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="popup-form">
      <button className="close-button" onClick={closePopup}>X</button>
      <form onSubmit={handleSubmit}>
        {/* Render form fields dynamically based on fetched form data */}
        {formData.fields && formData.fields.map(field => (
          <div key={field.id}>
            <label>{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              value={formValues[field.name] || ''}
              onChange={handleChange}
              required={field.required}
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PopupForm;
