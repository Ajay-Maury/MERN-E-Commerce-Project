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
import { Link } from 'react-router-dom';

const OrderAddress = () => {
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
        //  dispatch(updateOrder(userI));
    };
  return (
    <Box>
      <Box>
        <strong>Select Address</strong>
      </Box>

      <FormControl>
        <FormLabel id='demo-radio-buttons-group-label'>
          <strong>Address</strong>
        </FormLabel>
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          // defaultValue='female'
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
      <Link to='/payment'>
        <Button varient='contained' onClick={handlePayment}>
          Make Payment
        </Button>
      </Link>
    </Box>
  );
}

export default OrderAddress
