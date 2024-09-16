import React, { useEffect, useState } from 'react';
import MainBanner from '../components/MainBanner';
import styled from 'styled-components';
import { fetchData } from '../../../../utils/api';

const PageContainer = styled.div`
  padding: 20px;
`;

const MainPage = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const getMessage = async () => {
      try {
        // fetchData 함수를 사용하여 API 호출
        const data = await fetchData('/api/message');
        setMessage(data);
      } catch (error: unknown) {
        console.error('Error fetching message:', error);
      }
    };

    getMessage();
  }, []);

  return (
    <div>
      <MainBanner />
      <PageContainer>
        <p>Server Message: {message}</p>
      </PageContainer>
    </div>
  );
};

export default MainPage;
