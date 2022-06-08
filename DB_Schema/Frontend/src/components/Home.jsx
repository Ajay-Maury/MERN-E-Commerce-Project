import React from 'react'
import UsersList from './admin/UsersList'
import UserSignup from './UserSignup'

const Home = () => {
  return (
    <div>
          <UserSignup />
          <UsersList/>
    </div>
  )
}

export default Home
