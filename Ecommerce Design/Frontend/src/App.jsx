import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './components/Home'
import { Routes } from 'react-router-dom'
import AdminPage from './components/admin/AdminPage'
import { Route } from 'react-router-dom'
import ProductCreate from './components/admin/ProductCreate'
import ProductList from './components/products/ProductList'
import ProductDetail from "./components/products/ProductDetail";
import UserSignup from './components/user/UserSignup'
import UserLogin from './components/user/UserLogin'
import UserProfile from "./components/user/UserProfile";
import Navbar from './components/Navbar'
import BrandCreate from './components/admin/BrandCreate'
import UsersList from './components/admin/UsersList'
import BrandsList from './components/admin/BrandsList'
import CategoryCreate from './components/admin/CategoryCreate'
import Cart from "./components/products/Cart";
import { Provider } from 'react-redux'
import store from "./redux/store"
import Wishlist from './components/products/Wishlist'



function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/products/create" element={<ProductCreate />} />
          <Route path="/admin/brands/create" element={<BrandCreate />} />
          <Route path="/admin/catogery/create" element={<CategoryCreate />} />
          <Route path="/admin/users" element={<UsersList />} />
          <Route path="/user/signup" element={<UserSignup />} />
          <Route path="/user/login" element={<UserLogin />} />
          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/products" element={<ProductDetail />} />
          <Route path="/brands" element={<BrandsList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='wishlist' element={<Wishlist/>} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App
