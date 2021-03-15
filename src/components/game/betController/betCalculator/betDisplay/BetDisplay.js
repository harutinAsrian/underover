import React from "react";
import { Grid, Fab, Typography, Box } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  alignStyle: {
    textAlign: "center",
  },
}));

export default function BetDisplay({ value, onPlus, onMinus }) {
  const classes = useStyles();
  return (
    <Box borderRadius={4} bgcolor="#212234" m={2}>
      <Grid container item xs={12}>
        <Grid item xs={3} className={classes.alignStyle}>
          <Fab
            size="small"
            color="secondary"
            disableTouchRipple
            className={classes.fab}
            onClick={onMinus}
            style={{ margin: 8 }}
          >
            <RemoveIcon />
          </Fab>
        </Grid>
        <Grid item xs={6} className={classes.alignStyle}>
          <Typography color="primary" variant="h2" style={{ fontSize: 40 }}>
            {value}
          </Typography>
        </Grid>
        <Grid item xs={3} className={classes.alignStyle}>
          <Fab
            size="small"
            color="secondary"
            disableTouchRipple
            className={classes.fab}
            onClick={onPlus}
            style={{ margin: 8 }}
          >
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>
    </Box>
  );
}
