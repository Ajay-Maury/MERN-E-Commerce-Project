import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { AvatarGroup, Button, CardActionArea, CardActions, ListItemButton, Stack } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar"
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}


const UserProfile = () => {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  const isLogin = JSON.parse(localStorage.getItem("LoginData")) || false;
  const {age,email,gender,mobile,name,role} = isLogin.user
  // console.log(age, email, gender, mobile, name, role);

  return (
    <>
      {isLogin ? (
        <Box>
          <Box>
            {/* Hello from Profile */}
            <Stack direction='row' spacing={2}>
              <Box sx={{ margin: "auto" }}>
                <Avatar
                  {...stringAvatar(name + " " + role)}
                  sx={{ width: 70, height: 70, margin:"15% auto" }}
                />
              </Box>
            </Stack>
          </Box>
          <Box sx={{ margin: "auto" }}></Box>
          <Box>
            <p>
              <strong>Name : </strong> {name}
            </p>
          </Box>
          <Box>
            <p>
              {" "}
              <strong>Email : </strong> {email}
            </p>
          </Box>
          <Box>
            {" "}
            <p>
              <strong>Mobile : </strong> {mobile}
            </p>
          </Box>
          <Box>
            {" "}
            <p>
              <strong>Gender : </strong> {gender}
            </p>{" "}
          </Box>
          <Box>
            {" "}
            <p>
              <strong>Age : </strong> {age}
            </p>
          </Box>
        </Box>
      ) : (
        <Box>Data not found. Please Login..</Box>
      )}
    </>
  );
}

export default UserProfile
