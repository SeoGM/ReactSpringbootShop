import React from 'react';
import Header from './ShopHeader';

const ShopLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	
  return (
    <div>
	  <Header />
      <main style={{ padding: '20px' }}>
        {children}
      </main>
    </div>
  );
};

export default ShopLayout;
