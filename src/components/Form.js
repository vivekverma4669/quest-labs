import React, { useState } from 'react';
import Input from './Input';
import Buttons from './Buttons';
import '../styles/Form.css';

const Form = ({ fields }) => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  
 const API_KEY = 'k-8f7aa4ea-a0c7-42ac-a821-a342d21887fe';
 const ENTITY_AUTHENTICATION_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbnRpdHlJZCI6ImUtYjY2YmNhMjQtZjZjZS00NDg5LWIyZTktZTI0YTkwZTA0ODc3IiwiaWF0IjoxNzE4ODcyODg0fQ.O0DEB_S-dirK4MMa2nm0yqwDhdCtdvTySPGpmCGAqqU';
 const CAMPAIGN_ID = 'c-14d4f959-5999-4308-af48-37549b89eec7';
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form
    if (Object.values(formData).some(value => !value)) {
      setError('All fields are required.');
      return;
    }

    try {
      const response = await fetch('https://staging.questprotocol.xyz/api/veirfycampaignaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${ENTITY_AUTHENTICATION_TOKEN}`,
          'API_KEY': API_KEY
        },
        body: JSON.stringify({ ...formData, campaignId: CAMPAIGN_ID })
      });

      if (response.ok) {
        setSuccess(true);
        setError(null);
      } else {
        throw new Error('Submission failed.');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <Input key={index} name={field.name} placeholder={field.placeholder} onChange={handleInputChange} />
      ))}
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">Form submitted successfully!</p>}
      <Buttons text="Submit" type="submit" />
    </form>
  );
};

export default Form;
