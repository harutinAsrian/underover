import React from "react";
import GameContainer from "./components/game/GameContainer";
import Header from "./components/header/Header";
import RandomUsers from "./components/randomUsers/RandomUsers";
import { Grid } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  gridStyle: {
    marginTop: 64,
    [theme.breakpoints.down("xs")]: {
      marginTop: 55,
    },
  },
  historyStyle: {
    minHeight: "calc(100vh - 64px)",
    [theme.breakpoints.down("xs")]: {
      margin: 0,
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container className={classes.gridStyle} wrap="wrap-reverse">
        <Grid item xs={12} md={3} className={classes.historyStyle}>
          <RandomUsers />
        </Grid>
        <Grid item xs={12} md={9}>
          <GameContainer />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
