import React from 'react'
import axios from "axios";
import { useState } from 'react'
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';

const ProductCreate = () => {
    const [productName,setProductName] = useState("")
    const [productDesc,setProductDesc] = useState("")
    const [productCategory,setProductCategory] = useState("")
    const [productBrand,setProductBrand] = useState("")
    const [productPrice,setProductPrice] = useState("")
    const [productColour,setProductColour] = useState([])
    const [productQuantity,setProductQuantity] = useState("")
    const [productImage,setProductImage] = useState("")

  async function handleProduct() {
    const product = {
      name: productName,
      description: productDesc,
      category: productCategory,
      brand_Id: productBrand,
      price: productPrice,
      colour: productColour,
      quantity: productQuantity,
      image_url: productImage,
    };
    console.log(product)
    const data = axios.post(`http://localhost:5000/products/create`, product);
    console.log("Product : ",data)
  }
  
  return (
    <div>
      <Box
        sx={{
          // display: "flex",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
          width:"100%",
        }}
      >
        <Stack direction="column" spacing={2}>
          <TextField
            id="demo-helper-text-aligned"
            label="Product Name"
            onChange={(e) => setProductName(e.target.value)}
          />
          <TextField
            id="demo-helper-text-aligned"
            label="Product Description"
            onChange={(e) => setProductDesc(e.target.value)}
          />
          <TextField
            id="demo-helper-text-aligned"
            label="Product Category"
            onChange={(e) => setProductCategory(e.target.value)}
          />
          <TextField
            id="demo-helper-text-aligned"
            label="Product Brand"
            onChange={(e) => setProductBrand(e.target.value)}
          />
          <TextField
            id="demo-helper-text-aligned"
            label="Product Price"
            onChange={(e) => setProductPrice(e.target.value)}
          />
          <TextField
            id="demo-helper-text-aligned"
            label="Product Image_URL"
            onChange={(e) => setProductImage(e.target.value)}
          />
          <TextField
            id="demo-helper-text-aligned"
            label="Product Colours seprated by ,"
            onChange={(e) => setProductColour(e.target.value)}
          />
          <TextField
            id="demo-helper-text-aligned"
            label="Product Quantity"
            onChange={(e) => setProductQuantity(e.target.value)}
          />
        </Stack>
      </Box>
      <Button variant="outlined" onClick={handleProduct}>
        Create Product
      </Button>
    </div>
  );
}

export default ProductCreate
