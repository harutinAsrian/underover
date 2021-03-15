import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  btn: {
    width: "100%",
  },
}));
export default function CalcButton({ value, onClick }) {
  const classes = useStyles();

  return (
    <Box>
      <Button color="primary" className={classes.btn} onClick={onClick}>
        <Typography>{value}</Typography>
      </Button>
    </Box>
  );
}
