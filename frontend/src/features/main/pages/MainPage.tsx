import React, { useEffect, useState } from 'react';
import MainBanner from '../components/MainBanner';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 20px;
`;

const MainPage = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch(
          'https://8080-seogm-reactspringboots-n6p9ze8t2z8.ws-us115.gitpod.io/hello',
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.text();
        setMessage(data);
      } catch (error) {
        console.error('Error fetching message:', error.message);
      }
    };

    fetchMessage();
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
