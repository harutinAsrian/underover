import React from "react";
import UnderOverButtons from "./underOverButtons/UnderOverButtons";
import { Grid } from "@material-ui/core";
import Info from "./info/Info";

import "./BetController.css";

export default function BetController({ sliderValue }) {
  return (
    <Grid container justify="space-between" direction="column" style={{ height: " 100%" }}>
      <Grid item >
        <UnderOverButtons />
      </Grid>
      <Grid item >
        <Info sliderValue={sliderValue} />
      </Grid>
    </Grid >
  );
}
