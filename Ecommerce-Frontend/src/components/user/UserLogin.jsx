import React,{ useState }  from 'react'
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";
import axios from 'axios';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../redux/auth/action';
import { CONFIG } from '../../config/config';

const UserLogin = () => {
  const navigate = useNavigate()
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false)
  const dispatch = useDispatch()
  
    async function handleLogin() {
        const loginDetail = {
            email,password
        }
      // dispatch(userLogin(loginDetail));

      const data = await axios
        .post(`${CONFIG.BASE_URL}/login`, loginDetail)
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          setError(true);
          return err;
        });
      if (data.user) {
        localStorage.setItem("LoginData", JSON.stringify(data));
        setError(false);
        navigate("/", { replace: true });
      } else {
        setError(data);
      }
      
  }
  // useEffect(() => {
    
  // })
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
            label='Email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id='demo-helper-text-aligned'
            label='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </Stack>
      </Box>
      <Button variant='outlined' onClick={handleLogin}>
        Login
      </Button>
      <Box sx={{padding:"2%"}} > New user! 
      <Link to="/signup"> Signup Now </Link>
      </Box>
       {error && <Box sx={{color:"red"}}>{error}</Box>}
    </Box>
  );
}

export default UserLogin
