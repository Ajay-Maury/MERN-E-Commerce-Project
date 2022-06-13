import React from 'react'

import DeleteIcon from "@mui/icons-material/Delete";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Box, IconButton, ListItemButton } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([])
  let navigate = useNavigate();

  async function getData() {
    const data = await axios("http://localhost:5000/products").then((d) => d.data)
    console.log(data)
    setProducts(data);
  }
  useEffect(() => {
    getData()
  }, [])
  const handleClick = (id) => {
    console.log("check",id)
    navigate(`./product/${id}`, { replace: false });
  }
  return (
    <div>
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          margin:"2% auto",
          alignItems: "center",
        }}
      >
        {products?.map((ele) => (
          <Box key={ele._id}>
            <ListItemButton onClick={()=>handleClick(ele._id)}>
              <ListItem
                alignItems="flex-start"
                fontSize="50px"
                // secondaryAction={
                //   <IconButton edge="end" aria-label="delete">
                //     <DeleteIcon />
                //   </IconButton>
                // }
              >
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={ele.image_url} />
                </ListItemAvatar>
                <ListItemText
                  primary=  {ele.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        REVIEWS
                      </Typography>
                      <br />
                      <span>{ele.description}</span><br />
                      <span>Rs. {ele.price}</span>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </ListItemButton>
            <Divider component="li" />
          </Box>
        ))}
      </List>
    </div>
  );
}

export default ProductList
