import { Box, Grid } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWishlistProducts } from '../../redux/wishlist/action';
import ProductCard from './ProductCard';

const Wishlist = () => {
  const dispatch = useDispatch()
  let data = useSelector((state) => state.wishlistData);
  let data1 = data?.data?.Wishlist?.[0]?.products;
  console.log("Wishlist data", data);
  useEffect(() => {
    dispatch(getWishlistProducts());
  }, [dispatch]);
    
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
      width={"100%"}
    >
      {/* {loading && <div>Loading please wait....</div>}
      {error && <div>{error}</div>} */}
      <Grid justifyContent={"center"} container spacing={2}>
        {data1?.map((elem) => (
          <Grid item xs={3} key={elem._id}>
            <ProductCard elem={elem} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Wishlist
