import React from 'react'
import BrandCreate from './admin/BrandCreate'
import BrandsList from './admin/BrandsList'
import UsersList from './admin/UsersList'
import Navbar from './Navbar'
import UserSignup from './user/UserSignup'

const Home = () => {
  return (
    <div>
     
          <UserSignup />
      <UsersList />
      <BrandCreate />
      <BrandsList/>
    </div>
  )
}

export default Home
