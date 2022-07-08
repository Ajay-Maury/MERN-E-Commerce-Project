import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Wishlist = () => {
  const dispatch = useDispatch()
    const data = useSelector((state) => state.wishlistData.data);
  console.log("Wishlist data", data)
  useEffect(() => {
    dispatch()
  },[])
    
  return (
    <div>
      Wishlist
    </div>
  )
}

export default Wishlist
