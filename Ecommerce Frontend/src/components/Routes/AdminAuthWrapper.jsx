import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const AdminAuthWrapper = ({children}) => {
  const navigate = useNavigate()
  const isLogin = JSON.parse(localStorage.getItem("LoginData")) || false;
  if (isLogin == false) {
    return <Navigate to='/' />;
    // return navigate(-1,{replace:true})
    
  }
  if (isLogin.user.role=="admin") {
    return children;
  }


}

export default AdminAuthWrapper
