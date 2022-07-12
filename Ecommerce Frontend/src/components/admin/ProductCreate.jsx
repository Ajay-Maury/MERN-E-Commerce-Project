import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ProductCreate = () => {
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productColour, setProductColour] = useState([]);
  const [productQuantity, setProductQuantity] = useState("");
  const [productImage, setProductImage] = useState("");
  const [Brands, setBrands] = useState([]);
  const [Category, setCategory] = useState([]);

  async function brand() {
    const data = await axios
      .get("http://localhost:5000/brands")
      .then((d) => d.data);
    console.log(data.Brand);
    setBrands(data.Brand);
  }
  async function categ() {
    const data = await axios
      .get("http://localhost:5000/category")
      .then((d) => d.data);
    console.log(data);
    setCategory(data.Category);
  }
  useEffect(() => {
    brand();
    categ();
  }, []);

  async function handleProduct() {
    const product = {
      name: productName,
      description: productDesc,
      categoryId: productCategory,
      brandId: productBrand,
      price: productPrice,
      colour: productColour,
      quantity: productQuantity,
      image_url: productImage,
    };

    console.log(product);
    const data = axios
      .post(`http://localhost:5000/products/create`, product)
      .then((d) => d.data);
    console.log("Product : ", data);
     setProductBrand(""),
       setProductCategory(""),
       setProductName(""),
       setProductDesc(""),
       setProductPrice(""),
       setProductColour(""),
       setProductQuantity(""),
       setProductImage("");
  }

  return (
    <div>
      <Box
        sx={{
          // display: "flex",
          margin: "auto",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
          width: "40%",
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
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={productCategory}
              label="Category"
              onChange={(e) => setProductCategory(e.target.value)}
            >
              {Category?.map((elem) => (
                <MenuItem value={elem._id} key={elem._id}>
                  {elem.category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Brand</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={productBrand}
              label="Brand"
              onChange={(e) => setProductBrand(e.target.value)}
            >
              {Brands?.map((elem) => (
                <MenuItem value={elem._id} key={elem._id}>
                  {elem.BrandName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
            label="Product Colour"
            onChange={(e) => setProductColour(e.target.value)}
          />
          <TextField
            id="demo-helper-text-aligned"
            label="Product Quantity"
            onChange={(e) => setProductQuantity(e.target.value)}
          />
        </Stack>
      </Box>
      <Button variant="contained" onClick={handleProduct}>
        Create Product
      </Button>
    </div>
  );
};

export default ProductCreate;
