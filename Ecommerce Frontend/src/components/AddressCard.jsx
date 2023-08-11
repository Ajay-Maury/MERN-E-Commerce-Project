import { Box } from '@mui/material'
import React from 'react'

const AddressCard = ({ data }) => {
    const { address_line, city, country, district, pinCode, state } = data
  return (
      <Box>
          <Box> <strong>Address : </strong> {address_line} </Box>
          <Box> <strong>City : </strong> {city} </Box>
          <Box> <strong>District : </strong> {district} </Box>
          <Box> <strong>Pin Code : </strong> {pinCode} </Box>
          <Box> <strong>State : </strong> {state} </Box>
          <Box> <strong>Country : </strong> {country} </Box>
    </Box>
  )
}

export default AddressCard
