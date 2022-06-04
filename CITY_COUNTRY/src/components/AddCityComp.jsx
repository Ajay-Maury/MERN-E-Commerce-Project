import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { Button, Stack, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AddNewCity } from "../Redux/AddCity/Action";

export default function AddCityComp() {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [populations, setPopulation] = useState("");
  const countryData = useSelector((store) => store.CountrysName.AddCountry);
  const dispatch = useDispatch();
  const handleChange = () => {
    axios
      .post("http://localhost:8080/citydata", {
        country: country,
        city: city,
        population: populations,
      })
      .then((res) =>
        dispatch(
          AddNewCity(res.data),
          setCity(""),
          setCountry(""),
          setPopulation("")
        )
      );
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Country</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={country}
        label="Country"
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {countryData.map((ele) => (
          <MenuItem value={ele.country}>{ele.country}</MenuItem>
        ))}
      </Select>
      <Stack direction="column" spacing={2}>
        <TextField
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          placeholder="Enter CityName"
        ></TextField>
        <TextField
          value={populations}
          onChange={(e) => {
            setPopulation(e.target.value);
          }}
          placeholder="Enter Population"
        ></TextField>
      </Stack>
      <Button variant="contained" onClick={handleChange}>
        Add City
      </Button>
    </FormControl>
  );
}
