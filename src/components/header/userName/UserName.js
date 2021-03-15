import React, { useState } from 'react'
import Modal from '../modal/Modal'
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core/";
import { useDispatch } from 'react-redux'
import { setUserNameAction } from '../../../redux/actions'

const useStyles = makeStyles((theme) => ({
    buttonStyle: {
        borderWidth: "2px",
        "&:hover": {
            borderWidth: "2px",
        },
    },
}));

export default function UserName() {
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState()
    const classes = useStyles
    const dispatch = useDispatch()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        if (inputValue) dispatch(setUserNameAction(inputValue))
        setOpen(false);
    };

    const handleCHange = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <>
            <Button
                className={classes.buttonStyle}
                color="inherit"
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
            >
                Sign In
            </Button>
            <Modal
                handleClose={handleClose}
                open={open}
                handleCHange={handleCHange}
            />
        </>
    )
}
