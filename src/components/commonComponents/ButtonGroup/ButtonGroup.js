import React from 'react';
import { makeStyles } from "@material-ui/core";
import { buttonGroupStyle } from './ButtonGroupStyle';

const useStyles = makeStyles((theme) => buttonGroupStyle(theme));

export const ButtonGroup = props => {
    const {handleClose, handleConfirm, firstButton, secondButton, disabled} = props;
    
    
    const classes = useStyles();

    return <div className={classes.buttonGroup}>
        <button disabled={disabled} onClick={handleConfirm}>{`${firstButton}`}</button>
        <button onClick={handleClose}>{`${secondButton}`}</button>
    </div>
}