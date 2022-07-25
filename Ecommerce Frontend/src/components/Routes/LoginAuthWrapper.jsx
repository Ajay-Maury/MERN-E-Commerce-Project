import React, { Children } from 'react'
import { useNavigate, Navigate } from "react-router-dom";

const LoginAuthWrapper = ({ children }) => {
    const navigate = useNavigate()
  const isLogin = JSON.parse(localStorage.getItem("LoginData")) || false;
  if (isLogin) {
    return children;
  }

  return <Navigate to='/login' />;
  // return navigate("/login",{replace:true})
};

export default LoginAuthWrapper
