import React from 'react'
import { Box, Button, Divider } from '@mui/material'
import axios from "axios"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import OrderAddress from './OrderAddress';

const Payment = () => {
  const [Order, setOrder] = useState(
    JSON.parse(localStorage.getItem("PlacedOrder")));
  
  //     const dispatch = useDispatch();
  // const  orderPlaced  = useSelector((state) => state.userData.placedOrder);
  //     console.log("order", orderPlaced);
  //     const userId = "629f810c42a8105b131a4ae1";

      // useEffect(() => {
      //   const Order = JSON.parse(localStorage.getItem("PlacedOrder"));
      //   console.log("or", Order.Order.totalAmout);
      // }, []);
console.log(Order);
  
  const handlePay = async () => {
    const options = {
      key: "rzp_test_TCW6sqa80aLsFM", // Enter the Key ID generated from the Dashboard
      amount: Order.Order.totalAmout * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      // order_id: Order.Order._id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url:
        `${CONFIG.BASE_URL}/order/paymentVerification`,
      prefill: {
        name: "Ajay Kumar",
        email: "ajay.kumar@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
      rzp1.open();
    };
    // console.log(window);
  

  return (
    <>
      <Box
        sx={{
          // display: "flex",
          // justifyContent: "space-around",
          margin: "2%",
          width: "100%",
        }}
      >
        <Box sx={{ width: "50%" }}>
          {" "}
          <OrderAddress />{" "}
        </Box>
        <Divider  flexItem>
          Price
        </Divider>
        <Box sx={{ width: "50%" }}>
          <h1>Payment</h1>
          <Box sx={{ padding: "5% 1%" }}>
            <h3>Price : {Order.Order.price}</h3>
            <h3>Discount : {Order.Order.discount}</h3>
            <h3>Total Amount : {Order.Order.totalAmout}</h3>
          </Box>

          <Button
            variant='contained'
            onClick={handlePay}
            sx={{ margin: "2%", padding: "1%,3%" }}
          >
            Pay Now
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Payment
