import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate 사용
import styled from 'styled-components';
import { useIsLoggedIn } from '../../hooks/useIsLoggedIn';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/userSlice'; // userSlice에서 로그아웃 액션 가져오기
import SearchBar from '../components/SearchBar';

const Header = () => {
  const isLoggedIn = useIsLoggedIn();
  const [showBanner, setShowBanner] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleLogout = () => {
    // 로그아웃 처리
    localStorage.removeItem('token'); // 토큰 삭제
    dispatch(logout()); // Redux 상태 업데이트 (로그아웃 상태로 변경)
    navigate('/'); // 로그아웃 후 메인 페이지로 이동
  };

  return (
    <div>
      {showBanner && (
        <Banner>
          <p>
            Special Sale! Get 50% off on all products!
            <BannerLink to="/sale">Shop Now</BannerLink>
            <BannerCloseButton onClick={() => setShowBanner(false)}>
              X
            </BannerCloseButton>
          </p>
        </Banner>
      )}

      <StyledHeader>
        <Logo to="/">MyShop</Logo>
        <SearchBar />
        <Nav>
          <NavList>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              {isLoggedIn ? (
                <button onClick={handleLogout}>Logout</button> // 로그아웃 버튼
              ) : (
                <Link to="/login">Login</Link> // 로그인 버튼
              )}
            </NavItem>
            <NavItem>
              <Link to="/products">Products</Link>
            </NavItem>
          </NavList>
        </Nav>
      </StyledHeader>
    </div>
  );
};

// styled-components로 스타일 정의
const Banner = styled.div`
  background-color: #ffcc00;
  color: #333;
  text-align: center;
  padding: 10px 0;
  font-size: 14px;
  position: relative;
`;

const BannerLink = styled(Link)`
  color: #333;
  text-decoration: underline;
  font-weight: bold;
`;

const BannerCloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #333;
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  color: #fff;
  text-decoration: none;
`;

const Nav = styled.nav``;

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
`;

const NavItem = styled.li`
  margin-left: 20px;
`;

export default Header;
