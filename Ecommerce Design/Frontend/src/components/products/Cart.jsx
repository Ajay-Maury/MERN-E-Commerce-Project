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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Cart = () => {
    const [productsData, setProducts] = useState([])
    const [cartId, setcarId] = useState()
    const [deleteItem, setdeleteItem] = useState()
    const getData = async () => {
        const data = await axios(`http://localhost:5000/cart`).then((d)=>d.data);
      console.log(data.Cart[0]);
      
      setcarId(data.Cart[0]._id);
        setProducts(data.Cart[0].products);
    }
    useEffect(() => {
      getData();
    }, [deleteItem]);
  async function handleRemove(item) {
    console.log(item);
    setdeleteItem(item);
    const data = await axios.delete(`http://localhost:5000/cart/${cartId}/delete/${item}`);
    console.log(data.data)
  }

  
  return (
    <Box sx={{ width: 1 }}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        {productsData?.map((item,i) => (
          <>
            <Box gridColumn="span 4" key={i}>
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
                  <Button size="small" onClick={()=>handleRemove(item._id)} >Remove</Button>
                  <Button size="small">Buy Now</Button>
                </CardActions>
              </Card>
            </Box>
          </>
        ))}
      </Box>
    </Box>
  );
}

export default Cart