import React from 'react';
import { makeStyles } from '@material-ui/core';
import {cartStyle} from './CartStyle';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => cartStyle(theme));

export const Cart = () =>{

    const classes = useStyles();
    const history = useHistory();

    return <section className={classes.estilosProvisorios}>
    <h1>COMPONENTE EN DESARROLLO</h1>
    <button onClick={() => history.goBack()}>Volver</button>

    </section>

}