import React from 'react'
import { Box } from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleUserAddress } from '../redux/userData/action';

const Payment = () => {
      const dispatch = useDispatch();
      const { address } = useSelector((state) => state.userData.address);
      console.log("Address", address);
      const userId = "629f810c42a8105b131a4ae1";

      useEffect(() => {
        dispatch(fetchSingleUserAddress(userId));
      }, []);

  const handleChange = (ev) => {
    // setValue((event.target as HTMLInputElement).value);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <FormControl>
        <FormLabel id='demo-controlled-radio-buttons-group'>Address</FormLabel>
          <RadioGroup
            aria-labelledby='demo-controlled-radio-buttons-group'
            name='controlled-radio-buttons-group'
            value={address}
            onChange={handleChange}
          >
        {address?.map((elem) => (
            <FormControlLabel
              value={elem._id}
              control={<Radio />}
              label={elem.address_line}
            />
        ))}
          </RadioGroup>
      </FormControl>
      <Box></Box>
    </Box>
  );
}

export default Payment
