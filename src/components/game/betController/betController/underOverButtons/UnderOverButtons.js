import React from "react";
import ButtonMain from "../../../../buttonMain/ButtonMain";
import Grid from "@material-ui/core/Grid";
import {
  buttonValueAction,
  disableBetButtonAction,
} from "../../../../../redux/actions/";
import { useDispatch, useSelector } from "react-redux";

export default function UnderOverButtons() {
  const dispatch = useDispatch();
  const onHold = useSelector((state) => state.flow.onHold);
  const { betIsDone } = useSelector((state) => state.user);

  const handleClick = (value) => {
    if (!betIsDone) dispatch(buttonValueAction(value));
    if (!onHold) dispatch(disableBetButtonAction());
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <ButtonMain value="under" onClick={() => handleClick("under")} />
      </Grid>
      <Grid item xs={6}>
        <ButtonMain value="over" onClick={() => handleClick("over")} />
      </Grid>
    </Grid>
  );
}
