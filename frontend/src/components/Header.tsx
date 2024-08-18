import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div>
        <Link to="/" style={logoStyle}>MyShop</Link>
      </div>
      <nav>
        <ul style={navListStyle}>
          <li style={navItemStyle}>
            <Link to="/">Home</Link>
          </li>
          <li style={navItemStyle}>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// 간단한 스타일을 추가했습니다.
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

export default Header;
