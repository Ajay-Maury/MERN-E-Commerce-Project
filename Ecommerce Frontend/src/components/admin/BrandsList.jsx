import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const BrandsList = () => {
    const [brandData, setBrandData] = useState([])
    async function getBrandData() {
        let data = await axios(`https://mern-e-commerce-api-v-0.herokuapp.com/brands/`);
      console.log("Brand :", data.data.Brand);
      setBrandData(data.data.Brand);
  }
  useEffect(() => {
   getBrandData() 
  },[])
  return (
    <div>
      {brandData.map((ele) => (
        <div key={ele._id}>
          <p>Brand Name : {ele.BrandName}</p>
          <p>Brand Logo : {ele.BrandLogo}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default BrandsList
