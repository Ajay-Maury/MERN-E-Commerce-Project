import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const BrandsList = () => {
    const [brandData, setBrandData] = useState([])
    async function getBrandData() {
        let data = await axios(`http://localhost:5000/brands/`);
      console.log(data.data)
      setBrandData(data.data)
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
