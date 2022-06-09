import axios from "axios";
import React from "react";
import { useState } from "react";

const UserSignup = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState();

  async function handleSubmit(e) {
    // e.preventDefault();
    const userDetail = {
      name: user,
      email,
      password,
      mobile_no: mobile,
    };
    console.log("user", userDetail);
    const data = await axios.post(`http://localhost:5000/user/create`, userDetail);
    console.log("data",data)
  }

  return (
    <div>
      <form action="" method="post">
        <strong>Name : </strong>{" "}
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          onInput={(e) => setUser(e.target.value)}
        />
        <br />
        <strong>Email : </strong>{" "}
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your Email"
          onInput={(e) => setEmail(e.target.value)}
        />
        <br />
        <strong>Password : </strong>{" "}
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Enter your password"
          onInput={(e) => setPassword(e.target.value)}
        />
        <br />
        <strong>Mobile : </strong>{" "}
        <input
          type="number"
          name="mobile"
          id="mobile"
          placeholder="Enter your Mobile No."
          onInput={(e) => setMobile(e.target.value)}
        />
        <br />
        {/* <input type="submit" value="Submit" onClick={handleSubmit} /> */}
      </form>
      <button onClick={handleSubmit}>Sign Up</button>
    </div>
  );
};

export default UserSignup;
