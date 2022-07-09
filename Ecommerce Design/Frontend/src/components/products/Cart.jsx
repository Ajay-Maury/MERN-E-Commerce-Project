import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData } from "../../redux/cart/action";
import { getremoveCartItem } from "../../redux/cart/removeFromCart/action";
import { Grid, Stack, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

import Divider from "@mui/material/Divider";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [coupen,setCoupen] = useState("")
  const [discount,setDiscount] = useState(0)
  const removeItem = useSelector((state) => state.removeCartItem);
  console.log("Remove", removeItem);
  
  const { data, loading, error } = useSelector((state) => state.cartData);
  const { TotalPrice, Data, TotalProducts,Id,userId } = data
  // const {_id,products,userId} = data.Data?.Data
  console.log("cartd", TotalPrice, Data, TotalProducts, Id, userId);
  console.log("cartd", data, loading, error);
  
  useEffect(() => {
    dispatch(fetchCartData());
     
  }, [removeItem]);

  function handleRemove(item) {
    // console.log("item",item,"id",Id);
    dispatch(getremoveCartItem(Id, item));
    // console.log(1)
  }
  function handleDiscount() {
    console.log("coupen", coupen);
    if (coupen === "offer20") {
      setDiscount((TotalPrice*20)/100)
    }
  }
  return (
    <>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Box sx={{ width: "60%", padding: "2%" }}>
          {loading && <div>Loading please wait....</div>}
          {error && <div>{error}</div>}
          {Data?.length === 0 && (
            <div>
              <h3>Cart is Empty</h3>
            </div>
          )}
          <Grid justifyContent={"center"} container spacing={2}>
            {Data?.map((elem, i) => (
              <Card
                key={i}
                variant='outlined'
                sx={{ maxWidth: 600, height: "320", margin: "3% auto" }}
              >
                <Card sx={{ display: "flex" }}>
                  <CardMedia
                    component='img'
                    sx={{ width: 200, height: 180, margin: "auto" }}
                    image={elem.image_url}
                    alt={elem.name}
                    onClick={() => {
                      console.log("elem._id", elem._id);
                      navigate(`../product/${elem._id}`);
                    }}
                  />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component='div' variant='h6'>
                        {elem.name}
                      </Typography>
                      {/* <Typography
                      variant='subtitle1'
                      color='text.secondary'
                      component='div'
                    >
                      {description}
                    </Typography> */}
                      {/* <Typography variant='body2' color='text.secondary'>
                  Quantity : {quantity}
                </Typography> */}
                      <Typography
                        variant='body2'
                        color='text.secondary'
                        sx={{ display: "flex", justifyContent: "space-around" }}
                      >
                        <span>
                          <strong>Price :</strong>
                          {elem.price}
                        </span>
                        <span>
                          <strong>Colour :</strong>
                          {elem.colour}
                        </span>
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{ display: "flex", justifyContent: "space-around" }}
                    >
                      <Button
                        size='small'
                        variant='contained'
                        onClick={() => handleRemove(elem._id)}
                      >
                        Remove Item
                      </Button>
                    </CardActions>
                  </Box>
                </Card>
              </Card>
            ))}
          </Grid>
        </Box>
        <Divider orientation='vertical' flexItem>
          Price
        </Divider>
        <Box sx={{ width: "40%" }}>
          <Typography
            variant='h5'
            color='text.secondary'
            sx={{ display: "flex", justifyContent: "space-around" }}
          >
            {" "}
            Price Details
          </Typography>
          
          <Box sx={{ margin: "2%" }}>
            <TableContainer>
              <Table aria-label='simple table'>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component='th' scope='row'>
                      Price ({TotalProducts} items) :
                    </TableCell>
                    <TableCell align='right'>{TotalPrice}</TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component='th' scope='row'>
                      Coupen:
                    </TableCell>
                    <TableCell align='right'>
                      {" "}
                      <input
                        disabled={Data?.length === 0}
                        type='text'
                        name='coupen'
                        id='coupen'
                        placeholder='Enter coupen "offer20"'
                        onChange={(e) => setCoupen(e.target.value)}
                      />{" "}
                      <br />
                      <input
                        onClick={handleDiscount}
                        type='submit'
                        value='Apply Coupen'
                        disabled={Data?.length === 0}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component='th' scope='row'>
                      Discount :
                    </TableCell>
                    <TableCell align='right'>{discount}</TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component='th' scope='row'>
                      Total Price :
                    </TableCell>
                    <TableCell align='right'>{TotalPrice - discount}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Button variant='contained'>Place Order</Button>
        </Box>
      </Box>
    </>
  );
};

export default Cart;
