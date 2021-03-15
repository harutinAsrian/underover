import React from "react";
import Amount from "./amount/Amount";
import Timer from "./timer/Timer";
import GameRound from "./gameRound/GameRound";
import GameNumber from "./gameNumber/GameNumber";
import AlertComponent from "./alert/Alert";
import RoundHistory from "./roundHistory/RoundHistory";
import { Grid, Box } from "@material-ui/core";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  displayStyle: {
    minHeight: 180,
    display: "flex",
    justifyContent: "center",
  },
}));

export default function Display({ gameValue }) {
  const classes = useStyles();
  const { showTimer, showGameNumber, showResult } = useSelector(
    (state) => state.flow
  );
  const { betIsDone } = useSelector((state) => state.user);

  const renderDisplay = () => {
    if (showTimer) {
      return <Timer />;
    }
    if (showGameNumber) {
      return <GameNumber gameValue={gameValue} />;
    }
    if (showResult && betIsDone) {
      return <AlertComponent />;
    }
  };

  return (
    <Grid container xs={12} justify="center" alignItems="center">
      <Box
        width={1}
        borderRadius={4}
        bgcolor="#212234"
        display="flex"
        justifyContent="center"
        p={2}
      >
        <Grid
          item
          container
          justify="space-between"
          alignItems="center"
          xs={11}
        >
          <Grid item xs={2}>
            <Amount />
          </Grid>
          <Grid container item xs={8} justify="center">
            <RoundHistory />
          </Grid>
          <Grid item xs={2}>
            <GameRound />
          </Grid>
        </Grid>
      </Box>
      <Grid item xs={12} className={classes.displayStyle}>
        {renderDisplay()}
      </Grid>
    </Grid>
  );
}
