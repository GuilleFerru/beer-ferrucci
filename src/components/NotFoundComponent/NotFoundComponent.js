import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import { notFoundComponentStyle } from './NotFoundComponentStyle';

const useStyles = makeStyles((theme) => notFoundComponentStyle(theme));

export const NotFoundComponent = ({ titulo, img, alt, etiquetaBoton = 'Volver al inicio', action }) => {
    const classes = useStyles();

    const commonAction = () => {
        action();
        console.log('Hola!')
    }

    return <section className={classes.container}>
        <div>
            <h1>{titulo}</h1>
            <img src={img} alt={alt} />
        </div>
        <Button onClick={commonAction}>{etiquetaBoton}</Button>
    </section>
}