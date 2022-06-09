import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './components/Home'
import { Routes } from 'react-router-dom'
import AdminPage from './components/admin/AdminPage'
import { Route } from 'react-router-dom'
import ProductCreate from './components/admin/ProductCreate'
import ProductList from './components/admin/ProductList'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPage/>} />
        <Route path="/products/create" element={<ProductCreate/>} />
        <Route path="/products" element={<ProductList/>} />
      </Routes>
    </div>
  );
}

export default App
