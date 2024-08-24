import React, { useState, CSSProperties } from 'react';
import { Link } from 'react-router-dom';

import SearchBar from '../components/SearchBar';

const Header = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div>
      {showBanner && (
        <div style={bannerStyle}>
          <p style={{ margin: 0 }}>
            Special Sale! Get 50% off on all products!
            <Link to="/sale" style={bannerLinkStyle}>Shop Now</Link>
            <button style={bannerCloseButtonStyle} onClick={() => setShowBanner(false)}>X</button>
          </p>
        </div>
      )}

      <header style={headerStyle}>
        <Link to="/" style={logoStyle}>MyShop</Link>
	    <SearchBar />
        <nav>
          <ul style={navListStyle}>
            <li style={navItemStyle}><Link to="/">Home</Link></li>
            <li style={navItemStyle}><Link to="/login">Login</Link></li>
            <li style={navItemStyle}><Link to="/products">Products</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

// 스타일 객체에 CSSProperties 타입을 명시적으로 지정
const bannerStyle: CSSProperties = {
  backgroundColor: '#ffcc00',
  color: '#333',
  textAlign: 'center',
  padding: '10px 0',
  fontSize: '14px',
  position: 'relative',
};

const bannerLinkStyle: CSSProperties = {
  color: '#333',
  textDecoration: 'underline',
  fontWeight: 'bold',
};

// 여기서 'position' 속성을 명확히 정의
const bannerCloseButtonStyle: CSSProperties = {
  position: 'absolute', // 'absolute'는 명확히 CSSPosition 타입의 값임을 알림
  right: '10px',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  color: '#333',
};

const headerStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: '#333',
  color: '#fff',
};

const logoStyle: CSSProperties = {
  fontSize: '1.5rem',
  color: '#fff',
  textDecoration: 'none',
};

const navListStyle: CSSProperties = {
  display: 'flex',
  listStyleType: 'none',
};

const navItemStyle: CSSProperties = {
  marginLeft: '20px',
};

export default Header;
