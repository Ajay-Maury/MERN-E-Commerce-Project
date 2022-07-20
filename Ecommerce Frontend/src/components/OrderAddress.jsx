import { Box, Button } from '@mui/material'
import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleUserAddress } from "../redux/userData/action";
import Cart from "./products/Cart"
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import AddressCard from './AddressCard';
import { updateOrder } from '../redux/order/action';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const OrderAddress = () => {
  const [addressVal, setAddressVal] = useState("")
  const navigate = useNavigate()
     const dispatch = useDispatch();
     const { address } = useSelector((state) => state.userData.address);
     console.log("Address", address);
     const userId = "629f810c42a8105b131a4ae1";

     useEffect(() => {
       dispatch(fetchSingleUserAddress(userId));
     }, []);

     const handleChange = (e) => {
       // setValue((event.target as HTMLInputElement).value);
       console.log("Add", e.target.value)
       setAddressVal(e.target.value);
        //  dispatch(updateOrder(userI));
  };
  const handlePayment = () => {
    navigate("/order/payment",{replace:false})
  }
  return (
    <Box>
      <Box>
        <h1>Shipping Address</h1>
      </Box>

      <FormControl sx={{ padding: "5% 1%" }}>
        <FormLabel id='demo-radio-buttons-group-label'>
          <h3>Address</h3>
        </FormLabel>
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          // defaultValue={<AddressCard data={address?.[0]} />}
          onChange={handleChange}
          name='radio-buttons-group'
        >
          {address?.map((elem) => (
            <FormControlLabel
              value={elem._id}
              key={elem._id}
              control={<Radio />}
              label={<AddressCard data={elem} />}
            />
          ))}
        </RadioGroup>
      </FormControl>

      <Box>
        {/* <Button
          variant='contained'
          disabled={addressVal==""}
          onClick={handlePayment}
        >
          Make Payment
        </Button> */}
      </Box>
    </Box>
  );
}

export default OrderAddress
