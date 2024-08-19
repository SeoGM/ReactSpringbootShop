import React from 'react';
import { Link } from 'react-router-dom';

const ShopLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <header style={headerStyle}>
        <Link to="/" style={logoStyle}>Shop Logo</Link>
        <nav>
          <ul style={navListStyle}>
            <li style={navItemStyle}><Link to="/">Home</Link></li>
            <li style={navItemStyle}><Link to="/login">Login</Link></li>
            <li style={navItemStyle}><Link to="/products">Products</Link></li>
          </ul>
        </nav>
      </header>
      <main style={{ padding: '20px' }}>
        {children}
      </main>
    </div>
  );
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: '#333',
  color: '#fff',
};

const logoStyle = {
  fontSize: '1.5rem',
  color: '#fff',
  textDecoration: 'none',
};

const navListStyle = {
  display: 'flex',
  listStyleType: 'none',
};

const navItemStyle = {
  marginLeft: '20px',
};

export default ShopLayout;
