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

const ProductDetail = () => {
  const [data,setData] = useState({})
  const { id } = useParams();
  
  async function getData() {
    const prod = await axios(`http://localhost:5000/products/${id}`).then(
      (d) => d.data
    );
    console.log(prod, "data");
    setData(prod)
  }
 
  useEffect(() => {
    getData();
  }, []);
  function handleCart(id) {
    console.log(id)
    const payload = {
      products : id,
      userId : "629f810c42a8105b131a4ae1"
    };

    const cart = axios.post(`http://localhost:5000/cart/create`, payload);
    console.log("cart",cart)
  }
  const { _id, colour, description, image_url, name, price, quantity } = data;
 
  return (
    <Card variant="outlined" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={data.image_url}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Colour :  {colour}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Quantity :  {quantity}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rs. {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>handleCart(_id)}>Add to Cart</Button>
        <Button size="small">Buy Now</Button>
      </CardActions>
    </Card>
  );
};

export default ProductDetail;
