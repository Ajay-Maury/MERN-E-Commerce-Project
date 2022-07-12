import { Box } from '@mui/material';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleUserAddress } from '../../redux/userData/action';

const UserAddAddress = () => {
  const dispatch = useDispatch();
  const {address} = useSelector(state => state.userData.address)
  console.log("Address", address)
  const userId = "629f810c42a8105b131a4ae1";

  useEffect(() => {
    dispatch(fetchSingleUserAddress(userId));
  },[])
  return (
    <Box>

    </Box>
  )
}

export default UserAddAddress
