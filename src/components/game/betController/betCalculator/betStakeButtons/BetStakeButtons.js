import React from "react";
import StakeButton from "./smallStakeButton/StakeButton";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

export default function BetStakeButtons({ half, double, handleClick }) {
  const { roundStartMoney } = useSelector((state) => state.user);

  return (
    <Grid container spacing={2} justify="center">
      <Grid item xs={4}>
        <StakeButton value="MAX" onClick={() => handleClick(roundStartMoney)} />
      </Grid>
      <Grid item xs={4}>
        <StakeButton value="5.0" onClick={() => handleClick(5)} />
      </Grid>
      <Grid item xs={4}>
        <StakeButton value="10.0" onClick={() => handleClick(10)} />
      </Grid>
      <Grid item xs={4}>
        <StakeButton value="MIN" onClick={() => handleClick(1)} />
      </Grid>
      <Grid item xs={4}>
        <StakeButton value="1/2" onClick={half} />
      </Grid>
      <Grid item xs={4}>
        <StakeButton value="x2" onClick={double} />
      </Grid>
    </Grid>
  );
}
