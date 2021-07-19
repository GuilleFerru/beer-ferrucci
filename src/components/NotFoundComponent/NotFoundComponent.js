import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import { notFoundComponentStyle } from './NotFoundComponentStyle';
import img from '../../img/notFoundImage.jpg'
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles((theme) => notFoundComponentStyle(theme));

export const NotFoundComponent = ({ titulo = 'Pagina no encontrada', alt = 'Imagen de botellas de cerveza vacías', etiquetaBoton = 'Volver al inicio',}) => {
    const classes = useStyles();
    const history = useHistory();

    const commonAction = () => {
        history.push(`/`)
    }

    return <section className={classes.container}>
        <div>
            <h1>{titulo}</h1>
            <img src={img} alt={alt} />
        </div>
        <Button onClick={commonAction}>{etiquetaBoton}</Button>
    </section>
}