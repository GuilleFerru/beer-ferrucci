import React from 'react';
import 'poppins-font';
import { makeStyles } from '@material-ui/core';
import { cartEmptyStyle } from './CartEmptyStyle';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => cartEmptyStyle(theme));

export const CartEmpty = () => {
    const classes = useStyles();
    const history = useHistory();
    return <div className={classes.cartEmptyContainer}>
        <p>Tu carrito esta vacio</p>
        <div className={classes.carEmptyButtom}>
            <button onClick={() => history.push(`/`)}> Volver al inicio </button>
        </div>
    </div>
}
