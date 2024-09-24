import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useIsLoggedIn } from '@hooks/useIsLoggedIn';
import { useDispatch } from 'react-redux';
import { logout } from '@store/userSlice';
import SearchBar from '../components/SearchBar';

const Header = () => {
  const isLoggedIn = useIsLoggedIn();
  const [showBanner, setShowBanner] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(logout());
    navigate('/');
  };

  return (
    <div>
      {showBanner && (
        <Banner>
          <p>
            Special Sale! Get 50% off on all products!
            <BannerLink to="/sale">Shop Now</BannerLink>
            <BannerCloseButton onClick={() => setShowBanner(false)}>X</BannerCloseButton>
          </p>
        </Banner>
      )}

      <StyledHeader>
        <Logo to="/">MyShop</Logo>
        <SearchBar />
        <Nav>
          <NavList>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            {isLoggedIn ? (
              <NavItem>
                <StyledButton onClick={handleLogout}>Logout</StyledButton>
              </NavItem>
            ) : (
              <>
                <NavItem>
                  <NavLink to="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/register">Register</NavLink>
                </NavItem>
              </>
            )}
            <NavItem>
              <NavLink to="/products">Products</NavLink>
            </NavItem>
          </NavList>
        </Nav>
      </StyledHeader>
    </div>
  );
};

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

const NavLink = styled(Link)`
  font-size: 1rem;
  color: #fff;
  text-decoration: none;
  padding: 5px 10px;
  border: 1px solid transparent;
  border-radius: 5px;
  transition: background-color 0.3s, border-color 0.3s;
  cursor: pointer;
  background: none;

  &:hover {
    background-color: #555;
    border-color: #fff;
  }
`;

const StyledButton = styled.button`
  font-size: 1rem;
  color: #fff;
  background: none;
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;

  &:hover {
    background-color: #555;
    border-color: #fff;
  }
`;

export default Header;
