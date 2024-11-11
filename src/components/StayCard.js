import React from 'react';
import '../styles/StayCard.css';

function StayCard({ stay }) {
  return (
    <div className="stay-card">
      <h3>{stay.name}</h3>
      <p>{stay.description}</p>
      <p><strong>{stay.price}</strong></p>
    </div>
  );
}

export default StayCard;