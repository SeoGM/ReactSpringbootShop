import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header>
        <Logo to="/admin">Admin Dashboard</Logo>
        <nav>
          <NavList>
            <NavItem>
              <Link to="/admin">Dashboard</Link>
            </NavItem>
            <NavItem>
              <Link to="/admin/users">Users</Link>
            </NavItem>
            <NavItem>
              <Link to="/admin/products">Products</Link>
            </NavItem>
          </NavList>
        </nav>
      </Header>
      <Main>{children}</Main>
    </div>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #555;
  color: #fff;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  color: #fff;
  text-decoration: none;
`;

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
`;

const NavItem = styled.li`
  margin-left: 20px;
`;

const Main = styled.main`
  padding: 20px;
`;

export default AdminLayout;
