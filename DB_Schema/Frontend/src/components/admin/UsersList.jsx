import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const UsersList = () => {
const [userData,setUserData] = useState([])

  async function fetchData() {
    let data = await axios("http://localhost:5000/user/");
    data = data.data.User
    console.log(data);
    setUserData(data);
  }
  useEffect(() => {
    fetchData()
  },[])
  return (
    <div>
      {
        userData.map((ele,i) => (
          <div key={i}>
            <p> Name : {ele.name}</p>
            <p> Email : {ele.email}</p>
            <p> Password : {ele.password}</p>
            <p> Mobile No. :{ele.mobile_no}</p>
            <p> Addesses : {ele.addresses}</p>
          <hr/>
          </div>
        ))}
    </div>
  );
}

export default UsersList
