import React from 'react';
import StayCard from './StayCard';
import '../styles/Home.css';

function Home() {
  const stays = [
    { id: 1, name: 'Ladakh Hills', description: 'Beautiful view of the mountains', price: '$100/night' },
    { id: 2, name: 'Ladakh Lake View', description: 'Peaceful lakeside stay', price: '$120/night' }
  ];

  return (
    <div className="home-container">
      <h2>Choose Your Stay in Ladakh</h2>
      <div className="stay-list">
        {stays.map(stay => (
          <StayCard key={stay.id} stay={stay} />
        ))}
      </div>
    </div>
  );
}

export default Home;