import React from "react";
import { Button, Typography, Box } from "@material-ui/core/";
import { red, green, orange } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainButtonStyle: {
    height: 55,
    width: "100%",
  },
  under: {
    backgroundColor: red[500],
    "&:hover": {
      backgroundColor: red[600],
    },
  },
  over: {
    backgroundColor: orange[500],
    "&:hover": {
      backgroundColor: orange[600],
    },
  },
  bet: {
    backgroundColor: green[500],
    height: 78,
    width: "100%",
    "&:hover": {
      backgroundColor: green[600],
    },
  },
  cancel: {
    backgroundColor: red[900],
    height: 78,
    width: "100%",
    "&:hover": {
      backgroundColor: red[800],
    },
  },
}));

export default function ButtonMain({ value, onClick, disable }) {
  const classes = useStyles();
  let hover = classes[value];

  return (
    <Box boxShadow={2} flexGrow={1} mt={2}>
      <Button
        className={`${classes.mainButtonStyle} ${hover}`}
        size="large"
        variant="outlined"
        onClick={onClick}
        disabled={disable}
      >
        <Typography variant="h6">{value}</Typography>
      </Button>
    </Box>
  );
}
