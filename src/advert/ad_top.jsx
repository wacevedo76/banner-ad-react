import React from 'react';
import AdCard from './ad_top_card.jsx';

const AdTop = () => {
  return (
    <div className="ad-top-container">
      <div className="top-image">
        <img src='https://images.unsplash.com/photo-1429667947446-3c93a979b7e0' alt='City' />
      </div>
      <AdCard />
    </div>
  );
};

export default AdTop;
