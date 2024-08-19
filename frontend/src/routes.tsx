import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShopLayout from './components/ShopLayout';
import AdminLayout from './components/AdminLayout';
import MainPage from './features/main/pages/MainPage';
import LoginPage from './features/user/pages/LoginPage';
import Dashboard from './features/admin/pages/Dashboard';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Shop Routes */}
        <Route path="/" element={<ShopLayout><MainPage /></ShopLayout>} />
        <Route path="/login" element={<ShopLayout><LoginPage /></ShopLayout>} />
        <Route path="/products" element={<ShopLayout><div>Products Page</div></ShopLayout>} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout><Dashboard /></AdminLayout>} />
        <Route path="/admin/users" element={<AdminLayout><div>Users Management</div></AdminLayout>} />
        <Route path="/admin/products" element={<AdminLayout><div>Products Management</div></AdminLayout>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
