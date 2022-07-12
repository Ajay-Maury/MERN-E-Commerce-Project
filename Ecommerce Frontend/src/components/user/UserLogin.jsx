import React,{ useState }  from 'react'
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";

const UserLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleLogin() {
        const loginDetail = {
            email,password
        }
        console.log(loginDetail)
    }
  return (
    <div>
      <Box
        sx={{
          display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
          margin:"auto",
          "& > :not(style)": { m: 1 },
        }}
      >
        <Stack direction="column" spacing={2}>
          <TextField
            id="demo-helper-text-aligned"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="demo-helper-text-aligned"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Stack>
      </Box>
        <Button variant="outlined" onClick={handleLogin}>
          Login
        </Button>
    </div>
  );
}

export default UserLogin
