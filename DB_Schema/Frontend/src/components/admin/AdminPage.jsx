import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const AdminPage = () => {
  return (
    <div>
      <h1>Welcome to Admin Page</h1>
      <Stack spacing={2} direction="row">
        <Button variant="outlined">Product</Button>
        <Button variant="outlined">Brand</Button>
        <Button variant="outlined">User</Button>
      </Stack>
    </div>
  );
}

export default AdminPage
