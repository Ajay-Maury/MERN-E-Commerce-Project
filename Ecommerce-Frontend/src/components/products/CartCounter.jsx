import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartData } from '../../redux/cart/action';

const CartCounter = () => {
    const dispatch = useDispatch();
    const [count,setCount] = useState(0)
    const { data, loading, error } = useSelector((state) => state.cartData);
    const isLogin = JSON.parse(localStorage.getItem("LoginData")) || false;
    
    useEffect(() => {
        if (isLogin) {
            if (data?.Data?.length === 0) {
                dispatch(fetchCartData(isLogin.user._id))
                setCount(data?.Data?.length)
            }    
        }


    },[dispatch,data?.Data?.length])
    return (
        <>
            {count}
            
  </>
  );
}

export default CartCounter
