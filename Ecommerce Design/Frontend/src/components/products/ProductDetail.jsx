import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../../redux/productByID/action";
import { addToCart } from "../../redux/cart/addToCart/action";


const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, error, product } = useSelector(
    (state) => state.singleProduct
  );
  console.log("Single", loading, error, product);
  

  useEffect(() => {
    dispatch(fetchProductById(id))
  }, []);
  function handleCart(id) {
    console.log(id)
    const payload = {
      products : id,
      userId : "629f810c42a8105b131a4ae1"
    };

    dispatch(addToCart(payload));
    console.log("cart", payload);
  }
  const { _id, colour, description, image_url, name, price, quantity } =  product;
 
  return (
    <>
    {loading && <div>Loading please wait ...</div>}
    {error && <div>{error}</div>}
     {!loading && !error && <Card variant="outlined" sx={{ maxWidth: 345, margin: "3% auto" }}>
        <CardMedia component="img" height="140" image={image_url} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Quantity : {quantity}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
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
        <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
          <Button size="small" onClick={() => handleCart(_id)}>
            Add to Cart
          </Button>
          <Button size="small">Buy Now</Button>
        </CardActions>
      </Card>}
    </>
  );
};

export default ProductDetail;
