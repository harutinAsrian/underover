import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';
import { green } from "@material-ui/core/colors";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    loginHover: {
        "&:hover": {
            backgroundColor: green[300],
            color: "white"
        },
    }
}));

export default function Modal({ handleClose, open, handleCHange }) {
    const classes = useStyles();

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Tell us your name please"}</DialogTitle>
                <DialogContent>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField
                            id="outlined-basic"
                            label="Username"
                            variant="outlined"
                            fullWidth
                            size="small"
                            onChange={handleCHange}
                        />
                    </form>
                </DialogContent>
                <DialogActions >
                    <Button onClick={handleClose} color="primary" variant="outlined" className={classes.loginHover}>
                        Login
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}