import React from 'react';
import 'poppins-font';
import { makeStyles } from '@material-ui/core';
import { cartMessageStyle } from './CartMessageStyle';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => cartMessageStyle(theme));

export const CartMessage = ({ text} )=> {
    const classes = useStyles();
    const history = useHistory();

    return <div className={classes.cartEmptyContainer}>
        <p>{text}</p>
        <div className={classes.carEmptyButtom}>
            <button onClick={() => history.push(`/`)}> Volver al inicio </button>
        </div>
    </div>
}
