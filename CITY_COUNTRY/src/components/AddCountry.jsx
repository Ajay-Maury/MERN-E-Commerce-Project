import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import axios from "axios";
import { Button, Stack, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { AddNewCountry } from "../Redux/AddCountry/Action";

export default function AddCountry() {
  const [countryName, setCountry] = useState("");
  const dispatch = useDispatch();
  const handleChange = () => {
    axios
      .post("http://localhost:8080/countryData", { country: countryName })
      .then((res) => dispatch(AddNewCountry(res.data)), setCountry(""));
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <Stack direction="column" spacing={2}>
        <TextField
          value={countryName}
          onChange={(e) => {
            setCountry(e.target.value);
          }}
          placeholder="Enter CountryName"
        ></TextField>
      </Stack>
      <Button variant="contained" onClick={handleChange}>
        Add Country
      </Button>
    </FormControl>
  );
}
