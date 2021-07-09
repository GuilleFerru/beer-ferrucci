import React from 'react';
import 'poppins-font';
import { makeStyles } from '@material-ui/core';
import { footerStyle } from './FooterStyle';

const useStyles = makeStyles((theme) => footerStyle(theme));
export const Footer = () => {
    const classes = useStyles();

    return <div className={classes.container}>
        <p>Diseñado por Guillermo Ferrucci</p>
    </div>

}