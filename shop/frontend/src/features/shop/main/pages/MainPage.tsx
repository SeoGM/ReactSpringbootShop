import React from 'react';
import MainBanner from '../components/MainBanner';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 20px;
`;

const MainPage = () => {
  return (
    <div>
      <MainBanner />
      <PageContainer>
        <h2>Featured Products</h2>
        <p>Here you will find some of our best products.</p>
      </PageContainer>
    </div>
  );
};

export default MainPage;
