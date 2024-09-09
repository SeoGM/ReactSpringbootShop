import React, { ReactNode } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import ShopLayout from './layout/ShopLayout';
import AdminLayout from './layout/AdminLayout';
import MainPage from './features/main/pages/MainPage';
import TestPage from './features/main/pages/TestPage';
import LoginPage from './features/user/login/pages/LoginPage';
import RegisterPage from './features/user/register/pages/RegisterPage';
import Dashboard from './features/admin/pages/Dashboard';

// import CartPage from './features/shop/pages/CartPage'; // 카트 페이지 추가
// import OrderPage from './features/shop/pages/OrderPage'; // 주문 페이지 추가

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // JWT 토큰이 있는지 확인

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />; // 로그인하지 않은 경우 로그인 페이지로 리다이렉트
  }

  return <>{children}</>; // children을 그대로 렌더링
};

const AdminRoute = ({ children }: { children: ReactNode }) => {
  const token = localStorage.getItem('token');
  const userRole = token ? 'admin' : null; // 실제 토큰에서 역할 정보를 가져오는 로직 추가 필요

  if (userRole !== 'admin') {
    return <Navigate to="/login" replace />; // 관리자가 아닌 경우 로그인 페이지로 리다이렉트
  }

  return <>{children}</>; // children을 그대로 렌더링
};

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Shop Routes */}
        <Route
          path="/"
          element={
            <ShopLayout>
              <MainPage />
            </ShopLayout>
          }
        />
        <Route path="/test" element={<TestPage />} />
        <Route
          path="/login"
          element={
            <ShopLayout>
              <LoginPage />
            </ShopLayout>
          }
        />
        <Route
          path="/register"
          element={
            <ShopLayout>
              <RegisterPage />
            </ShopLayout>
          }
        />
        <Route
          path="/products"
          element={
            <ShopLayout>
              <div>Products Page</div>
            </ShopLayout>
          }
        />

        {/* Protected Routes (로그인한 사용자만 접근 가능) */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <ShopLayout>
                {/* <CartPage /> */}
                <div>Cart Page</div>
              </ShopLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/order"
          element={
            <ProtectedRoute>
              <ShopLayout>
                {/* <OrderPage /> */}
                <div>Order Page</div>
              </ShopLayout>
            </ProtectedRoute>
          }
        />

        {/* Admin Routes (관리자만 접근 가능) */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            </AdminRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <AdminRoute>
              <AdminLayout>
                <div>Users Management</div>
              </AdminLayout>
            </AdminRoute>
          }
        />
        <Route
          path="/admin/products"
          element={
            <AdminRoute>
              <AdminLayout>
                <div>Products Management</div>
              </AdminLayout>
            </AdminRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
