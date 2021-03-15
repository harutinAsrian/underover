import React from "react";
import ButtonMain from "../../buttonMain/ButtonMain";
import Box from "@material-ui/core/Box";
import { betIsDoneAction } from "../../../redux/actions/";
import { useDispatch, useSelector } from "react-redux";

export default function StakeButton({}) {
  const dispatch = useDispatch();

  const handleBetClick = () => {
    dispatch(betIsDoneAction());
  };

  const { disableBetButton } = useSelector((state) => state.game);
  const { betIsDone } = useSelector((state) => state.user);
  return (
    <Box mt={2}>
      <ButtonMain
        value={betIsDone ? "cancel" : "bet"}
        disable={disableBetButton}
        onClick={handleBetClick}
      />
    </Box>
  );
}
