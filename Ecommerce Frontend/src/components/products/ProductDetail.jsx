import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { IconButton, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../../redux/productByID/action";
import { addToCart } from "../../redux/cart/addToCart/action";


const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { loading, error, product } = useSelector(
    (state) => state.singleProduct
  );
  console.log("Single", loading, error, product);
  
  const isLogin = JSON.parse(localStorage.getItem("LoginData")) || false;

  useEffect(() => {
    dispatch(fetchProductById(id))
  }, []);
  function handleCart(id) {
     if (isLogin) {
       console.log(id);
       const payload = {
         products: id,
         userId: isLogin.user._id,
       };

       dispatch(addToCart(payload));
       console.log("cart", payload);
     } else {
       navigate("/login");
     }
  }
  const { _id, colour, description, image_url, name, price, quantity } =  product;
 
  return (
    <Box>
      {loading && <div>Loading please wait ...</div>}
      {error && <div>{error}</div>}
      {!loading && !error && (
        <Card variant='outlined' sx={{ maxWidth: 600, margin: "3% auto" }}>
          <Card sx={{ display: "flex" }}>
            <CardMedia
              component='img'
              sx={{ width: 200 }}
              image={image_url}
              alt={name}
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component='div' variant='h5'>
                  {name}
                </Typography>
                <Typography
                  variant='subtitle1'
                  color='text.secondary'
                  component='div'
                >
                  {description}
                </Typography>
                {/* <Typography variant='body2' color='text.secondary'>
                  Quantity : {quantity}
                </Typography> */}
                <Typography
                  variant='body2'
                  color='text.secondary'
                  sx={{ display: "flex", justifyContent: "space-around" }}
                >
                  <span>
                    <strong>Colour :</strong>
                    {colour}
                  </span>
                  <span>
                    <strong>Price :</strong>
                    {price}
                  </span>
                </Typography>
              </CardContent>
              <CardActions
                sx={{ display: "flex", justifyContent: "space-around" }}
              >
                <Button
                  size='small'
                  variant='contained'
                  onClick={() => handleCart(_id)}
                >
                  Add to Cart
                </Button>
                {/* <Button size='small'>Buy Now</Button> */}
              </CardActions>
            </Box>
          </Card>
        </Card>
      )}
    </Box>
  );
};

export default ProductDetail;
