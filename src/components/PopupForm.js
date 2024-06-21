import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PopupForm.css';
import { API_KEY, ENTITY_AUTHENTICATION_TOKEN, ENTITY_ID, CAMPAIGN_ID } from '../api';

const PopupForm = ({ isOpen, onClose }) => {
  const [userId, setUserId] = useState(null);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formValues, setFormValues] = useState({});
  const [submitError, setSubmitError] = useState(null);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      // Step 1: Generate User ID and Token
      axios.post('https://staging.questprotocol.xyz/api/loginwithexternaluserid', {
        externalUserId: "someUniqueExternalId" // Generate a unique external ID as needed
      }, {
        headers: {
          'x-api-key': API_KEY
        }
      })
      .then(response => {
        const { userId, token } = response.data;
        setUserId(userId);
        
        // Step 2: Fetch Form Data
        return axios.get('https://staging.questprotocol.xyz/api/getcampaigndetails', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'x-api-key': API_KEY
          },
          params: {
            entityId: ENTITY_ID,
            campaignId: CAMPAIGN_ID,
            userId
          }
        });
      })
      .then(response => {
        setFormData(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
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
    for (const field of formData.fields) {
      if (field.required && !formValues[field.name]) {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setSubmitError('Please fill out all required fields.');
      return;
    }
    setSubmitError(null);
    
    // Step 3: Submit Form Data
    axios.post('https://staging.questprotocol.xyz/api/verifycampaignaction', {
      ...formValues,
      userId
    }, {
      headers: {
        'Authorization': `Bearer ${ENTITY_AUTHENTICATION_TOKEN}`,
        'x-api-key': API_KEY
      }
    })
    .then(response => {
      onClose();
    })
    .catch(err => {
      console.error(err);
      setSubmitError('Failed to submit form.');
    });
  };

  if (!isOpen) return null;

  return (
    <div className="popup-form-overlay">
      <div className="popup-form" style={{backgroundColor :"purple"}}>
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
