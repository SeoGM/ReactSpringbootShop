import React from 'react';
import MainBanner from '../components/MainBanner';

const MainPage = () => {
  return (
    <div>
      <MainBanner />
      <div style={{ padding: '20px' }}>
        <h2>Featured Products</h2>
        <p>Here you will find some of our best products.</p>
      </div>
    </div>
  );
};

export default MainPage;
