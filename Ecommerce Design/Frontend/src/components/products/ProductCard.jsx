import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/addToCart/action";
import { addToWishlist } from "../../redux/wishlist/addToWishlist/action";

const ProductCard = ({ elem }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log("elem",elem)

  function handleCart(id) {
    console.log(id);
    const payload = {
      products: id,
      userId: "629f810c42a8105b131a4ae1",
    };

    dispatch(addToCart(payload));
    console.log("cart", payload);
  }
  function handleWishlist(id) {
    console.log(id);
    const payload = {
      products: id,
      userId: "629f810c42a8105b131a4ae1",
    };

    dispatch(addToWishlist(payload));
    console.log("wishlist", payload);
  }

  return (
    <Card sx={{ maxWidth: 345, height: 400, margin: 1.5 }} key={elem.id}>
      <CardMedia
        component='img'
        height='200'
        className='productimgdiv'
        image={elem.image_url}
        alt='green iguana'
        onClick={() => {
          console.log("elem._id",elem._id);
          navigate(`./product/${elem._id}`);
        }}
      />
      <CardContent sx={{ height: 120, padding: 1 }}>
        <Typography
          gutterBottom
          variant='p'
          component='div'
          sx={{ height: 90 }}
        >
          {elem.name}
        </Typography>
        <Stack justifyContent={"space-between"} direction={"row"}>
          <span className='productpricetag' variant='h6'>
            Price : {elem.price} Rs
          </span>
          <FavoriteIcon
            // onClick={() => {
            //   if (!userId) navigate("/login");
            //   AddtoWishList(elem._id);
            // }}
            onClick={() => handleWishlist(elem._id)}
          ></FavoriteIcon>
        </Stack>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button
          // onClick={() => {
          //   if (!userId) navigate("/login");
          //   AddtoCart(ele._id);
          // }}
          onClick={() => handleCart(elem._id)}
          variant='contained'
          fullWidth
        >
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
