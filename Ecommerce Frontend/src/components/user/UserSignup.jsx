import axios from "axios";
import React,{ useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const UserSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState();
  const [age,setAge] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("user");

  async function handleSignUP(e) {
    // e.preventDefault();
    const userDetail = {
      name,
      email,
      password,
      mobile_no: mobile,
      gender,
      role,
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
        <Stack direction='column' spacing={2}>
          <TextField
            id='demo-helper-text-aligned'
            label='Name'
            required
            onInput={(e) => setUser(e.target.value)}
          />
          <TextField
            id='demo-helper-text-aligned'
            label='Email'
            required
            onInput={(e) => setUser(e.target.value)}
          />
          <TextField
            id='demo-helper-text-aligned'
            label='Password'
            required
            onInput={(e) => setUser(e.target.value)}
          />
          <TextField
            id='demo-helper-text-aligned'
            label='Mobile No.'
            required
            onInput={(e) => setUser(e.target.value)}
          />
          <TextField
            id='demo-helper-text-aligned'
            label='Age'
            required
            onInput={(e) => setUser(e.target.value)}
          />
          <FormControl sx={{textAlign:"left"}}>
            <FormLabel id='demo-row-radio-buttons-group-label'>
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby='demo-row-radio-buttons-group-label'
              name='row-radio-buttons-group'
              // onChange={handleChange}
            >
              <FormControlLabel
                value='female'
                control={<Radio />}
                label='Female'
              />
              <FormControlLabel value='male' control={<Radio />} label='Male' />
              <FormControlLabel
                value='other'
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
    </div>
  );
};

export default UserSignup;
