import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AdminPage from '../admin/AdminPage';
import BrandCreate from '../admin/BrandCreate';
import BrandsList from '../admin/BrandsList';
import CategoryCreate from '../admin/CategoryCreate';
import ProductCreate from '../admin/ProductCreate';
import UsersList from '../admin/UsersList';
import Home from '../Home';
import OrderAddress from '../OrderAddress';
import Payment from '../Payment';
import Cart from '../products/Cart';
import CartCounter from '../products/CartCounter';
import ProductDetail from '../products/ProductDetail';
import ProductList from '../products/ProductList';
import Wishlist from '../products/Wishlist';
import UserAddAddress from '../user/UserAddAddress';
import UserLogin from '../user/UserLogin';
import UserProfile from '../user/UserProfile';
import UserSignup from '../user/UserSignup';
import AdminAuthWrapper from './AdminAuthWrapper';
import AdminRoute from './AdminRoute';
import LoginAuthWrapper from './LoginAuthWrapper';
import LoginPrivateRoute from './LoginPrivateRoute';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/count' element={<CartCounter />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/brands' element={<BrandsList />} />
        <Route path='/products' element={<ProductList />} />

        <Route
          path='/profile'
          element={
            <LoginAuthWrapper>
              <UserProfile />
            </LoginAuthWrapper>
          }
        />
        <Route path='/user/:id/address' element={<UserAddAddress />} />
        <Route
          path='/cart'
          element={
            <LoginAuthWrapper>
              <Cart />
            </LoginAuthWrapper>
          }
        />
        <Route
          path='/wishlist'
          element={
            <LoginAuthWrapper>
              <Wishlist />
            </LoginAuthWrapper>
          }
        />
        <Route
          path='order/address'
          element={
            <LoginAuthWrapper>
              <OrderAddress />
            </LoginAuthWrapper>
          }
        />
        <Route
          path='order/payment'
          element={
            <LoginAuthWrapper>
              <Payment />
            </LoginAuthWrapper>
          }
        />

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
      {/* <LoginPrivateRoute />
      <AdminRoute /> */}
    </div>
  );
}

export default AllRoutes
