import React, { useState, useEffect, useMemo } from "react";
import Display from "./display/Display";
import BetController from "./betController/betController/BetController";
import BetCalc from "./betController/betCalculator/BetCalculator";
import SliderComponent from "./betController/betController/slider/Slider";
import StakeButton from "./stakeButton/StakeButton";
import { Container, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { roundResultAction, gameFlow } from "../../redux/actions";

const useStyles = makeStyles({
  containerStyles: {
    background: "rgb(39,39,62)",
    background:
      "radial-gradient(circle, rgba(39,39,62,1) 0%, rgba(35,36,56,1) 87%, rgba(34,35,55,1) 100%)",
    width: "100%",
    height: "calc(100vh - 64px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export default function GameContainer() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [sliderValue, setSliderValue] = useState(50);
  const { round } = useSelector((state) => state.game);
  const { betIsDone, buttonValue } = useSelector((state) => state.user);
  const { showResult } = useSelector((state) => state.flow);

  const gameValue = useMemo(() => (Math.random() * 99).toFixed(0), [
    showResult,
  ]);

  useEffect(() => {
    dispatch(gameFlow());
  }, [round]);

  useEffect(() => {
    if (betIsDone) {
      if (
        (gameValue > sliderValue && buttonValue === "over") ||
        (gameValue < sliderValue && buttonValue === "under")
      ) {
        return dispatch(roundResultAction(1));
      } else {
        return dispatch(roundResultAction(0));
      }
    } else {
      return;
    }
  }, [betIsDone]);

  return (
    <Container
      className={classes.containerStyles}
      maxWidth={false}
      disableGutters={true}
    >
      <Display gameValue={gameValue} />

      <Box px={8}>
        <Grid container>
          <Grid item xs={12}>
            <SliderComponent setSliderValue={setSliderValue} />
          </Grid>

          <Grid container item xs={12}>
            <Grid item sm={6} xs={12}>
              <BetController sliderValue={sliderValue} />
            </Grid>

            <Grid item sm={6} xs={12}>
              <BetCalc />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <StakeButton />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
