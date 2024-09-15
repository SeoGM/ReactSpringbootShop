import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShopLayout from './layout/ShopLayout';
import ProtectedRoute from './routes/ProtectedRoute';
import MainPage from '../features/main/pages/MainPage';
import TestPage from '../features/main/pages/TestPage';
import LoginPage from '../features/user/login/pages/LoginPage';
import RegisterPage from '../features/user/register/pages/RegisterPage';

import AdminLayout from './layout/AdminLayout';
import AdminRoute from './routes/AdminRoute';
import Dashboard from '../features/admin/pages/Dashboard';

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

        {/* Protected Routes (로그인한 사용자만 접근 가능) */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <ShopLayout>
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
