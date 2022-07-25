import { Box } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import OrderAddress from '../OrderAddress';
import Payment from '../Payment';
import Cart from '../products/Cart';
import Wishlist from '../products/Wishlist';
import UserAddAddress from '../user/UserAddAddress';
import UserProfile from '../user/UserProfile';
import LoginAuthWrapper from './LoginAuthWrapper'
const LoginPrivateRoute = () => {
  return (
    <Box>
      <Routes>
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
      </Routes>
    </Box>
  );
}

export default LoginPrivateRoute
