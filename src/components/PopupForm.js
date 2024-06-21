import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PopupForm.css';
import { ENTITY_AUTHENTICATION_TOKEN } from '../api';
import { API_KEY } from '../api';
import { ENTITY_ID } from '../api';
import { CAMPAIGN_ID } from '../api';
const PopupForm = ({ isOpen, onClose }) => {

  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formValues, setFormValues] = useState({});
  const [submitError, setSubmitError] = useState(null);

  useEffect(() => {
    if (isOpen) {
      axios.get('https://staging.questprotocol.xyz/api/campaign/details', {
        headers: {
          'Authorization': `Bearer ${ENTITY_AUTHENTICATION_TOKEN}`,
          'x-api-key': API_KEY
        },
        params: {
          entityId: ENTITY_ID,
          campaignId: CAMPAIGN_ID
        }
      })
      .then(response => {
        setFormData(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch form data.');
        setLoading(false);
      });
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = () => {
  // Example of basic validation
  for (const field of formData.fields) {
    if (field.required && !formValues[field.name]) {
      return false;
    }
  }
  return true;
};

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://staging.questprotocol.xyz/api/campaign/verify', formValues, {
      headers: {
        'Authorization': `Bearer ${ENTITY_AUTHENTICATION_TOKEN}`,
        'x-api-key': API_KEY
      }
    })
    .then(response => {
      onClose();
    })
    .catch(err => {
      setSubmitError('Failed to submit form.');
    });
  };

  if (!isOpen) return null;

  return (
    <div className="popup-form-overlay">
      <div className="popup-form">
        <button className="close-btn" onClick={onClose}>✖️</button>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          
          <form onSubmit={handleSubmit}>
            {formData.fields.map(field => (
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
        )}
        {submitError && <p>{submitError}</p>}
      </div>
    </div>
  );
};

export default PopupForm;
