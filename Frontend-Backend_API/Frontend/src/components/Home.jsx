import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {
    // const [data,setData] = useState([])
    
useEffect(() => {
  getData();
}, []);

    async function  getData() {
        try {
            let data = await axios(
              `http://localhost:6000/products?_sort_cost=${-1}&_limit=${3}&_page=${2}&_rating=${3}&&_low_cost=${100}&_high_cost=${10000}`
            );
            console.log(data.data.products)
            
        } catch (error) {
            console.log("Error : ",error.message)
        }
    }
    
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

export default Home
