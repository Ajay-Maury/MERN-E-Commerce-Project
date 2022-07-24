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
import AdminRoute from './AdminRoute';
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
      </Routes>
          <LoginPrivateRoute />
          <AdminRoute/>
    </div>
  );
}

export default AllRoutes
