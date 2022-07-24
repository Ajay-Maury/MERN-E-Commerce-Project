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
import UserAddAddress from './components/user/UserAddAddress'
import Payment from './components/Payment'
import OrderAddress from './components/OrderAddress'
import CartCounter from './components/products/CartCounter'
import AllRoutes from './components/Routes/AllRoutes'



function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
       <AllRoutes/>
      </Provider>
    </div>
  );
}

export default App
