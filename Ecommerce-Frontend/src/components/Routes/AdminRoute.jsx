import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AdminPage from '../admin/AdminPage';
import BrandCreate from '../admin/BrandCreate';
import CategoryCreate from '../admin/CategoryCreate';
import UsersList from '../admin/UsersList';
import ProductCreate from "../admin/ProductCreate";
import AdminAuthWrapper from './AdminAuthWrapper';


const AdminRoute = () => {
  return (
    <div>
      <Routes>
        <Route
          path='/admin/products/create'
          element={
            <AdminAuthWrapper>
              <ProductCreate />
            </AdminAuthWrapper>
          }
        />
        <Route
          path='/admin/brands/create'
          element={
            <AdminAuthWrapper>
              <BrandCreate />
            </AdminAuthWrapper>
          }
        />
        <Route
          path='/admin/catogery/create'
          element={
            <AdminAuthWrapper>
              <CategoryCreate />
            </AdminAuthWrapper>
          }
        />
        <Route
          path='/admin/users'
          element={
            <AdminAuthWrapper>
              <UsersList />
            </AdminAuthWrapper>
          }
        />

        <Route
          path='/admin'
          element={
            <AdminAuthWrapper>
              <AdminPage />
            </AdminAuthWrapper>
          }
        />
      </Routes>
    </div>
  );
}

export default AdminRoute