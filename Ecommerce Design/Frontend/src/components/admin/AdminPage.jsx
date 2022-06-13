import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Welcome to Admin Page</h1>
      <Stack spacing={2} direction="row">
        <Button
          variant="outlined"
          onClick={() => navigate("/admin/products/create", { replace: false })}
        >
          Create Product
        </Button>
        <Button
          variant="outlined"
          onClick={() => navigate("/admin/brands/create", { replace: false })}
        >
          Create Brand
        </Button>
        <Button
          variant="outlined"
          onClick={() => navigate("/admin/catogery/create", { replace: false })}
        >
          Create Category
        </Button>
        <Button
          variant="outlined"
          onClick={() => navigate("/admin/users", { replace: false })}
        >
          Users List
        </Button>
        <Button
          variant="outlined"
          onClick={() => navigate("/brands", { replace: false })}
        >
          Brands List
        </Button>
        <Button
          variant="outlined"
          onClick={() => navigate("/products", { replace: false })}
        >
          Products List
        </Button>
      </Stack>
    </div>
  );
}

export default AdminPage
