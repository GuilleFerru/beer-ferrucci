import React from 'react';
import { preloaderStyle } from './PreloaderStyle';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => preloaderStyle(theme));

export const Preloader = () => {
    const classes = useStyles();
    return <div className={classes.container}>
        <div className={classes.loader}></div>
    </div>
}