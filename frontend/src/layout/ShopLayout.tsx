import React, { ReactNode } from 'react';
import Header from './ShopHeader';
import styled from 'styled-components';

const MainContent = styled.main`
  padding: 20px;
`;

const ShopLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <MainContent>{children}</MainContent>
    </div>
  );
};

export default ShopLayout;
