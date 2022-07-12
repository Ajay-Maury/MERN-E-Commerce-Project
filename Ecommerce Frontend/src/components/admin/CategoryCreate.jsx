import axios from "axios";
import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Stack } from "@mui/material";

const CategoryCreate = () => {
  const [name, setName] = useState("");

  async function handleCategory() {
    const Category = {
      category: name,
    };
    console.log(Category);
    const newCat = await axios.post(
      `http://localhost:5000/category/create`,
      Category
    );
    console.log("Category", newCat);
  }
  return (
    <div>
      <Box
        sx={{
          // display: "flex",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
          width: "100%",
        }}
      >
        <Stack direction="column" spacing={2}>
          <TextField
            id="demo-helper-text-aligned"
            label="Category Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Stack>
      </Box>
      <Button variant="outlined" onClick={handleCategory}>
        Create Category
      </Button>
    </div>
  );
};

export default CategoryCreate;
