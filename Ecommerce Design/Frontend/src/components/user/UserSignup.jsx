import axios from "axios";
import React,{ useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";

const UserSignup = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState();
  const [profilePic, setProfilePic] = useState("");

  async function handleSignUP(e) {
    // e.preventDefault();
    const userDetail = {
      name: user,
      email,
      password,
      mobile_no: mobile,
      profilePic,
    };
    console.log("user", userDetail);
    const data = await axios.post(`http://localhost:5000/user/create`, userDetail);
    console.log("data",data)
  }

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
          "& > :not(style)": { m: 1 },
        }}
      >
        <Stack direction="column" spacing={2}>
          <TextField
            id="demo-helper-text-aligned"
            label="Name"
            required
            onInput={(e) => setUser(e.target.value)}
          />
          <TextField
            id="demo-helper-text-aligned"
            label="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="demo-helper-text-aligned"
            label="Mobile Number"
            required
            onInput={(e) => setMobile(e.target.value)}
          />
          <TextField
            id="demo-helper-text-aligned"
            label="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            id="demo-helper-text-aligned"
            label="Profile Pic"
            onChange={(e) => setProfilePic(e.target.value)}
          />
        </Stack>
      </Box>
      <Button variant="outlined" onClick={handleSignUP}>
        Sign Up
      </Button>
    </div>
  );
};

export default UserSignup;
