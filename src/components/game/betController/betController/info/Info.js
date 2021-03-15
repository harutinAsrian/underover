import React, { useEffect, useState } from "react";
import { Grid, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { payoutValue } from "../../../../../redux/actions/";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  divider: {
    background: "rgb(196,196,200)",
    background:
      "radial-gradient(circle, rgba(196,196,200,1) 0%, rgba(178,179,186,0.3757878151260504) 100%)",
    borderRadius: 30,
  },
  alignItem: {
    alignItems: "center",
  },
  alignItemsFlex: {
    display: "flex",
    justifyContent: "center",
  },
  typographyStyle: {
    color: "#E18D43",
  },
}));

export default function Info({ sliderValue }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { stakeValue, buttonValue } = useSelector((state) => state.user);

  const [chance, setChance] = useState(0);
  let [odd, setOdd] = useState(0);

  useEffect(() => {
    if (buttonValue === "under") {
      setChance(sliderValue);
      setOdd(100 / sliderValue);
    } else {
      setChance(100 - sliderValue);
      setOdd(100 / (100 - sliderValue));
    }
  }, [buttonValue, sliderValue]);

  useEffect(() => {
    dispatch(payoutValue(stakeValue * odd));
  }, [odd]);

  return (
    <Grid container justify="space-between" style={{ marginBottom: 20 }}>
      <Grid item container xs={3}>
        <Grid item xs={12}>
          <Typography color="primary" align="left">
            Odd
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.typographyStyle} align="left">
            {buttonValue && odd.toFixed(1)}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={1} className={classes.alignItemsFlex}>
        <Divider className={classes.divider} orientation="vertical" />
      </Grid>
      <Grid item container xs={3}>
        <Grid item xs={12}>
          <Typography color="primary" align="center">
            Payout
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ testAlign: "center", height: 24 }}>
          <Typography className={classes.typographyStyle} align="center">
            {buttonValue && (stakeValue * odd).toFixed(2) + "$"}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={1} className={classes.alignItemsFlex}>
        <Divider className={classes.divider} orientation="vertical" />
      </Grid>
      <Grid item container xs={3}>
        <Grid item xs={12}>
          <Typography color="primary" align="right">
            Chance
          </Typography>
        </Grid>
        <Grid xs={12} style={{ textAlign: "right" }}>
          <Typography className={classes.typographyStyle} align="right">
            {buttonValue && chance + "%"}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
