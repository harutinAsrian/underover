import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import { roundHistoryAction } from "../../../../redux/actions";
import { useDispatch } from "react-redux";

export default function GameNumber({ gameValue }) {
  const dispatch = useDispatch();

  useEffect(() => {
    return dispatch(roundHistoryAction(gameValue));
  }, [gameValue]);

  return (
    <Typography color="primary" variant="h1">
      {gameValue}
    </Typography>
  );
}
