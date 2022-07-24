import { Box } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartData } from '../../redux/cart/action';

const CartCounter = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.cartData);
    console.log("Count", data)
    const isLogin = JSON.parse(localStorage.getItem("LoginData")) || false;
    
    useEffect(() => {
        if (isLogin) {
            if (data?.Data?.length === 0) {
                dispatch(fetchCartData(isLogin.user._id))
            }    
        }


    },[dispatch,data?.Data?.length])
  return (
      <Box>
          {data?.Data?.length ? data?.Data?.length : 0}
    </Box>
  );
}

export default CartCounter
