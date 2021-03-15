import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";

export default function GameRound() {
  const { round } = useSelector((state) => state.game);

  return (
    <Typography color="primary" variant="h4">
      Round: {round}
    </Typography>
  );
}
