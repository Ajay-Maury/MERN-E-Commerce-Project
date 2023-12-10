import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

const AdminPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Welcome to Admin Page</h1>
      <Stack spacing={2} direction='column'>
        <Box>
          <Button
            sx={{ width: 200, margin: "auto" }}
            variant='outlined'
            onClick={() =>
              navigate("/admin/products/create", { replace: false })
            }
          >
            Add Product
          </Button>
        </Box>

        <Box>
          {" "}
          <Button
            sx={{ width: 200, margin: "auto" }}
            variant='outlined'
            onClick={() => navigate("/admin/brands/create", { replace: false })}
          >
            Add Brand
          </Button>
        </Box>

        <Box>
          <Button
            sx={{ width: 200, margin: "auto" }}
            variant='outlined'
            onClick={() =>
              navigate("/admin/catogery/create", { replace: false })
            }
          >
            Add Category
          </Button>
        </Box>

        <Box>
          <Button
            sx={{ width: 200, margin: "auto" }}
            variant='outlined'
            onClick={() => navigate("/admin/users", { replace: false })}
          >
            Users List
          </Button>
        </Box>

        <Box>
          <Button
            sx={{ width: 200, margin: "auto" }}
            variant='outlined'
            onClick={() => navigate("/brands", { replace: false })}
          >
            Brands List
          </Button>
        </Box>

        <Box>
          <Button
            sx={{ width: 200, margin: "auto" }}
            variant='outlined'
            onClick={() => navigate("/products", { replace: false })}
          >
            Products List
          </Button>
        </Box>
      </Stack>
    </div>
  );
}

export default AdminPage
