import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartData, removeCartItem } from '../../redux/cart/action';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Cart = () => {
  const dispatch = useDispatch();
  const cartdata = useSelector((state) => state.cartData.data);
  console.log("cartd", cartdata);
  
  const { _id, products, userId } = cartdata;
  console.log(_id, products, userId);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

   function handleRemove(item) {
    // console.log("item",item,"id",_id);
    // const data = await axios.delete(`http://localhost:5000/cart/${_id}/delete/${item}`);
    dispatch(removeCartItem(_id,item))
    // console.log(data.data)
    console.log(1)
  }

  return (
    <Box sx={{ width: 1 }}>
      {products?.length === 0 && <div>Cart is empty</div>}
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        {products?.map((item, i) => (
          
            <Box gridColumn="span 4" key={item._id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt={item.name}
                  height="140"
                  image={item.image_url}
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <span>
                      <strong>Colour :</strong>
                      {item.colour}
                    </span>
                    <span>
                      <strong>Price :</strong>
                      {item.price}
                    </span>
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Button size="small" onClick={() => handleRemove(item._id)}>
                    Remove
                  </Button>
                  <Button size="small">Buy Now</Button>
                </CardActions>
              </Card>
            </Box>
          
        ))}
      </Box>
    </Box>
  );
}

export default Cart