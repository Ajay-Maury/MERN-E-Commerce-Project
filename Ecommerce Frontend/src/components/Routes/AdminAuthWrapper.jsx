import React from 'react'
import { useNavigate } from 'react-router-dom';

const AdminAuthWrapper = ({children}) => {
  const navigate = useNavigate()
  const isLogin = JSON.parse(localStorage.getItem("LoginData")) || false;
  if (isLogin.user.role=="admin") {
    return children;
  }

  return navigate("/",{replace:true})

}

export default AdminAuthWrapper
