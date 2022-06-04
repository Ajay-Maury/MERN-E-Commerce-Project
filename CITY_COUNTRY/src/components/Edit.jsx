import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Stack, TextField } from "@mui/material";
import axios from "axios";
import { useDispatch, useSelector, useStore } from "react-redux";
import { EditCity } from "../Redux/AddCity/Action";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function Edit({ value }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [cityname, setCity] = useState(value.city);
  const [countryname, setCountry] = useState(value.country);
  const [populations, setPopulation] = useState(value.population);
  const dispatch = useDispatch();
  const handlechange = () => {
    axios
      .patch(`http://localhost:8080/citydata/${value.id}`, {
        country: countryname,
        city: cityname,
        population: populations,
      })
      .then((res) => {
        console.log(res.data, "resData");
        dispatch(EditCity(res.data));
      });
  };
  return (
    <div>
      <Button onClick={handleOpen}>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Details
          </Typography>
          <Stack direction="column" spacing={2}>
            <TextField
              onChange={(e) => {
                setCity(e.target.value);
              }}
              defaultValue={value.city}
            ></TextField>
            <TextField
              onChange={(e) => {
                setCountry(e.target.value);
              }}
              defaultValue={value.country}
            ></TextField>
            <TextField
              onChange={(e) => {
                setPopulation(e.target.value);
              }}
              defaultValue={value.population}
            ></TextField>
            <TextField
              onClick={() => {
                handlechange();
                handleClose();
              }}
              type="submit"
            ></TextField>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
