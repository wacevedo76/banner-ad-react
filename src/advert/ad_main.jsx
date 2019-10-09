import React, { Component } from 'react';
import AdTop from './ad_top.jsx';
import AdBottom from './ad_bottom.jsx';

class Ad extends Component {
  render() {
    return(
      <div className="ad-container">
        <AdTop />
        <AdBottom />
      </div>
    );
  }
}

export default Ad;
