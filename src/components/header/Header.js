import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core/";
import UserName from './userName/UserName'
import "./Header.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBackground: {
    background: "rgb(47,46,75)",
    background:
      "linear-gradient(180deg, rgba(47,46,75,1) 0%, rgba(46,46,74,1) 100%)",
    width: "100%",
  },
  title: {
    flexGrow: 1,
    color: "#C5C4E1",
    boxSizing: "border-box",
  },

  buttonStyle: {
    borderWidth: "2px",
    "&:hover": {
      borderWidth: "2px",
    },
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={classes.appBackground}
        maxWidth={false}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <span className="under">UNDER</span>OVER
          </Typography>
          <UserName />
        </Toolbar>
      </AppBar>
    </div>
  );
}
