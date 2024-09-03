import React, { useEffect, useState } from 'react';
import MainBanner from '../components/MainBanner';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 20px;
`;

const MainPage = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(
      'https://8080-seogm-reactspringboots-n6p9ze8t2z8.ws-us115.gitpod.io/hello',
    )
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error('Error fetching message:', error));
  }, []);

  return (
    <div>
      <MainBanner />
      <PageContainer>
        <h2>Featured Products</h2>
        <p>Here you will find some of our best products.</p>
        <p>Server Message: {message}</p>
      </PageContainer>
    </div>
  );
};

export default MainPage;
