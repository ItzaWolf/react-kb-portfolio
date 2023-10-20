import React, { useState } from 'react';

function FormComponent() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const [submissionStatus, setSubmissionStatus] = useState(null);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(formData);
      try {
        const response = await fetch('http://localhost:3000/input', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          setSubmissionStatus('success'); // Update submission status to 'success'
        } else {
          setSubmissionStatus('error'); // Update submission status to 'error'
        }
      } catch (error) {
        console.error(error);
        setSubmissionStatus('error'); // Update submission status to 'error' in case of an error
      }
  
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    };
  
    const SubmissionMessage = () => {
      if (submissionStatus === 'success') {
        return <p>Form submitted successfully! Thank you for your message.</p>;
      } else if (submissionStatus === 'error') {
        return <p>Form submission failed. Please try again later.</p>;
      }
      return null;
    };
  
    return (
      <div className="contact-form-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        <div className='SubMessage'>
        <SubmissionMessage />
        </div>
      </div>
    );
  }

export default FormComponent;
