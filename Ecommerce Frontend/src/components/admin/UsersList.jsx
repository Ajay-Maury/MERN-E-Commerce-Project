import axios from 'axios';
import React, { useState,useEffect }  from 'react'
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { IconButton, ListItemButton } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import { CONFIG } from '../../config/config';

const UsersList = () => {
const [userData,setUserData] = useState([])

  async function fetchData() {
    let data = await axios(`${CONFIG.BASE_URL}/user`);
    data = data.data.User
    console.log(data);
    setUserData(data);
  }
  useEffect(() => {
    fetchData()
  },[])
  return (
    <div>
      <List
        sx={{
          width: "800%",
          bgcolor: "background.paper",
          alignItems: "center",
        }}>
      {userData.map((ele, i) => (
        <div key={i}>
          <ListItemButton>
            <ListItem
              alignItems="flex-start"
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar alt="profile_pic" src={ele.profile} />
              </ListItemAvatar>
              <ListItemText
                primary={ele.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                     Email: {ele.email}
                     <br />
                    </Typography>
                    Mobile No. :{ele.mobile} <br />
                    {ele.addresses}
                  </React.Fragment>
                }
              />
            </ListItem>
          </ListItemButton>
          <Divider variant="inset" component="li" />
        </div>
      ))}

      
      </List>
    </div>
  );
}

export default UsersList
