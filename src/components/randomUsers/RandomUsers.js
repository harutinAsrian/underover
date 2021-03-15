import React from "react";
import { List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography, Grid } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from 'react-redux'
import { AVATAR_URL } from '../../constants'
import './randomUser.css'

const useStyles = makeStyles((theme) => ({
  randomUserStyles: {
    background: "rgb(29,31,46)",
    background:
      "linear-gradient(180deg, rgba(29,31,46,1) 0%, rgba(30,32,46,1) 100%)",
    maxWidth: "100%",
    height: "calc(100vh - 64px)",
    overflowY: "scroll",
    '&::-webkit-scrollbar-thumb': {
      background: '#888'
    }
  },
  inline: {
    display: 'inline',
  },
  listTextFlexStyle: {
    display: 'flex',
    justifyContent: "space-between",
    color: theme.palette.primary.main
  },
  randomUserRed: {
    color: '#EA4D42'
  },
  randomUserGreen: {
    color: "#50C878"
  }
}));

export default function RandomUsers() {
  const { data, randomUserStake, randomUserPredict } = useSelector(state => state.randomUser)
  const { userName, stakeValue, buttonValue } = useSelector(state => state.user)
  const classes = useStyles();

  return (
    <List className={classes.randomUserStyles}>
      {
        userName && (
          <>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={AVATAR_URL} />
              </ListItemAvatar>
              <Grid container>
                <Grid item xs={6}>
                  <ListItemText
                    className={classes.listTextFlexStyle}
                    primary={userName}
                  />
                </Grid>
                <Grid item xs={6} container justify="space-around">
                  <Grid item>
                    <ListItemText
                      className={classes.listTextFlexStyle}
                      primary={stakeValue}
                    />
                  </Grid>
                  <Grid item>
                    <ListItemText
                      className={classes.listTextFlexStyle}
                      primary={buttonValue}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        )
      }
      {
        Object.keys(data).length && data.map((item, index) => {
          const { avatar_url, login, id, } = item

          return (
            <>
              <ListItem alignItems="flex-start" key={id}>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={avatar_url} />
                </ListItemAvatar>
                <Grid container>
                  <Grid item xs={6}>
                    <ListItemText
                      className={classes.listTextFlexStyle}
                      primary={login}
                    />
                  </Grid>
                  <Grid item xs={6} container justify="space-around">
                    <Grid item>
                      <ListItemText
                        className={classes.listTextFlexStyle}
                        primary={randomUserStake[index]}
                      />
                    </Grid>
                    <Grid item>
                      <Typography
                        className={randomUserPredict[index] === "over" ? classes.randomUserGreen : classes.randomUserRed}
                      >
                        {randomUserPredict[index]}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </ListItem>
              <Divider key={index} variant="inset" component="li" />
            </>
          )
        })
      }
    </List>
  )
}
