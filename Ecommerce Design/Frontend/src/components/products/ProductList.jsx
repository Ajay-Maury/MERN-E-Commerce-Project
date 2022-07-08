import React from 'react'

import DeleteIcon from "@mui/icons-material/Delete";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Box, IconButton, ListItemButton, Stack } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from '../../redux/products/action';
import { addToCart } from "../../redux/cart/addToCart/action";

import FavoriteIcon from "@mui/icons-material/Favorite";

// import * as React from "react";
import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import ProductCard from './ProductCard';
// import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


const ProductList = () => {
  const dispatch = useDispatch()
  const {loading,error,products} = useSelector(state => state.allProducts)
  // console.log(loading, error, products, "Prod");
  
  useEffect(() => {
    dispatch(fetchProduct())
    // getData()
  }, [])

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
      width={"100%"}
    >
      {loading && <div>Loading please wait....</div>}
      {error && <div>{error}</div>}
      <Grid justifyContent={"center"} container spacing={2}>
        {products?.map((elem) => (
          <Grid item xs={3} key={elem._id}>
            <ProductCard elem = {elem}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductList
