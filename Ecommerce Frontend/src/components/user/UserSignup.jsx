import axios from "axios";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Link, useNavigate } from "react-router-dom";

const UserSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState();
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("user");
  const [error,setError] = useState(false)
  const navigate = useNavigate()

  function handleSignUP(e) {
    e.preventDefault();
    const userDetail = {
      name,
      email,
      password,
      mobile,
      age,
      gender,
    };
    console.log("user", userDetail);
    const data = axios
      .post(`http://localhost:5000/signup`, userDetail)
      .then((res) => {
        setError(false)
        navigate("/login",{replace:true})
        return res.data})
      .catch((err) => setError(err.response.data.errors[0].msg));
    console.log("data", data);
  }

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
          "& > :not(style)": { m: 1 },
        }}
      >
        <Stack direction='column' spacing={2}>
          <TextField
            id='demo-helper-text-aligned'
            label='Name'
            required
            onInput={(e) => setName(e.target.value)}
          />
          <TextField
            id='demo-helper-text-aligned'
            label='Email'
            required
            onInput={(e) => setEmail(e.target.value)}
          />
          <TextField
            id='demo-helper-text-aligned'
            label='Password'
            required
            onInput={(e) => setPassword(e.target.value)}
          />
          <TextField
            id='demo-helper-text-aligned'
            label='Mobile No.'
            required
            onInput={(e) => setMobile(e.target.value)}
          />
          <TextField
            id='demo-helper-text-aligned'
            label='Age'
            required
            onInput={(e) => setAge(e.target.value)}
          />
          <FormControl sx={{ textAlign: "left" }}>
            <FormLabel id='demo-row-radio-buttons-group-label'>
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby='demo-row-radio-buttons-group-label'
              name='row-radio-buttons-group'
              onChange={(e) => setGender(e.target.value)}
            >
              <FormControlLabel
                value='Female'
                control={<Radio />}
                label='Female'
              />
              <FormControlLabel value='Male' control={<Radio />} label='Male' />
              <FormControlLabel
                value='Other'
                control={<Radio />}
                label='Other'
              />
            </RadioGroup>
          </FormControl>
        </Stack>
      </Box>
      <Button variant='outlined' onClick={handleSignUP}>
        Sign Up
      </Button>
      <Box sx={{ padding: "2%" }}>
        Already Registered
        <Link to='/login'> Login </Link>
      </Box>
      {error && <Box sx={{ color: "red", margin: "1%" }}>{error}</Box>}
    </Box>
  );
};

export default UserSignup;
