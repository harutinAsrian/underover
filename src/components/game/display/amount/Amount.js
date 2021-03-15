import React from "react";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { Box, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

export default function Amount() {
  const currentMoney = useSelector((state) => state.user.currentMoney);

  return (
    <Box display="flex" height={32} alignItems="center">
      <AttachMoneyIcon color="primary" fontSize="large" />
      <Typography color="primary" variant="h4">
        {currentMoney}
      </Typography>
    </Box>
  );
}
