import { Box } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleUserAddress } from "../../redux/userData/action";

const UserAddAddress = () => {
  const dispatch = useDispatch();
  const { address } = useSelector((state) => state.userData.address);
  // console.log("Address", address);
  const userId = "629f810c42a8105b131a4ae1";

  useEffect(() => {
    dispatch(fetchSingleUserAddress(userId));
  }, []);
  return (
    <Box>
      {address?.map((elem) => (
        <FormControlLabel
          value={elem._id}
          key={elem._id}
          control={<Radio />}
          label={<AddressCard data={elem} />}
        />
      ))}
    </Box>
  );
};

export default UserAddAddress;
