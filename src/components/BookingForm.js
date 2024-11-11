import React, { useState } from 'react';
import axios from 'axios';
import '../styles/BookingForm.css';

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting the form', error);
    }
  };

  return (
    <div className="form-container">
      {submitted ? (
        <p>Thank you for your booking request!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          <label>Date</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default BookingForm;