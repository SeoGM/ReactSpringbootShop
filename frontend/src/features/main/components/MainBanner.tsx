import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  text-align: center;
`;

const MainBanner = () => {
  return (
    <BannerContainer>
      <h1>Welcome to Our Shop!</h1>
      <p>Discover amazing products and deals!</p>
    </BannerContainer>
  );
};

export default MainBanner;
