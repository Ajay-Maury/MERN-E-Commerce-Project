import React from 'react'

import { Box, IconButton, ListItemButton, MenuItem, Select, Stack } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from '../../redux/products/action';
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

import ProductCard from './ProductCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


const ProductList = () => {
  const dispatch = useDispatch()
  const {loading,error,products} = useSelector(state => state.allProducts);
  // const [sort,setSort] = useState("")
  
  useEffect(() => {
    dispatch(fetchProduct(""))
  }, [])
  const handleChange = (e) => {
    // setSort(e.target.value);
    console.log("sort va",e.target.value)
    dispatch(fetchProduct(e.target.value ));
    };

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
      width={"100%"}
    >
      {loading && <Box>Loading please wait....</Box>}
      {error && <Box>{error}</Box>}
      <Box sx={{ display: "flex" }}>
        <FormControl sx={{ m: 1, minWidth: 180 }} size='small'>
          <InputLabel id='demo-select-small'>Sort by Price</InputLabel>
          <Select
            labelId='demo-select-small'
            id='demo-select-small'
            value=""
            label='Price'
            onChange={handleChange}
          >
            <MenuItem value={''}>None</MenuItem>
            <MenuItem value="asc">Low to high</MenuItem>
            <MenuItem value="desc">High to low</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Grid justifyContent={"center"} container spacing={2}>
        {products?.map((elem) => (
          <Grid item xs={3} key={elem._id}>
            <ProductCard elem={elem} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductList
