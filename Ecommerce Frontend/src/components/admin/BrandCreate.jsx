import axios from 'axios'
import React from 'react'
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react'
import { Stack } from '@mui/material';

const BrandCreate = () => {
const [name,setName] = useState("")
const [logo,setLogo] = useState("")

 async function handleBrand() {
    const Brand = {
BrandName : name, BrandLogo : logo
    }
   console.log(Brand)
   const newBrand = await axios.post(`http://localhost:5000/brands/create`, Brand);
   console.log("BRand",newBrand)
  }
  return (
    <div>
      <Box
        sx={{
          // display: "flex",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
          width:"100%"
        }}
      >
        <Stack direction="column" spacing={2}>
          <TextField
            id="demo-helper-text-aligned"
            label="Brand Name"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="demo-helper-text-aligned-no-helper"
            label="Logo Url"
            onInput={(e) => setLogo(e.target.value)}
          />
        </Stack>
      </Box>
      <Button variant="outlined" onClick={handleBrand}>
        Create Brand
      </Button>
    </div>
  );
}

export default BrandCreate
