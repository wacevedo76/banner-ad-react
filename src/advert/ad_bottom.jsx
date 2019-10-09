import React from 'react';
import AdBTop from './ad_b_top.jsx';
import AdBBottom from './ad_b_bottom.jsx';

const AdBottom = () => {
  return (
    <div className="ad-bottom-container">
      <AdBTop/>
      <AdBBottom/>
    </div>
  );
};

export default AdBottom;
