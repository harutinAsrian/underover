import React from "react";
import { useSelector } from 'react-redux'
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  typographyStyles: {
    fontWeight: 700,
    fontSize: 24,
    margin: "0 8px",
    color: "#ABAACE",
  }
}))

export default function RoundHistory() {
  const classes = useStyles();
  const { roundHistory } = useSelector(state => state.game)

  return (
    <Box display="flex">
      {
        roundHistory.map((item, index) => (
          <Typography key={index} color="primary" className={classes.typographyStyles}>
            {item}
          </Typography>
        ))
      }
    </Box>
  );
}
