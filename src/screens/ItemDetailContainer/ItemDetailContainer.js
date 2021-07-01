import React, { useEffect, useState } from 'react';
import { itemDetailContainerStyle } from './ItemDetailContainerStyle';
import { ItemDetail } from './components/ItemDetail/ItemDetail';
import { cervezaData } from '../Services/CervezaData';
import 'poppins-font';
import { makeStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useParams, Redirect } from 'react-router-dom';


const useStyles = makeStyles((theme) => itemDetailContainerStyle(theme));

const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(cervezaData), 2000)
})

export const ItemDetailContainer = () => {
    const classes = useStyles();
    const [item, setItem] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        promise.then((data) => {
            const dataFiltrada = data.filter(cerveza => cerveza.id === id);
            setItem(dataFiltrada)
        }).catch(() => <Redirect to={'/*'} />)
    }, [id])


    return <>
        {item.length === 0 ? (
            <div className={classes.preloaderContainer}>
                <CircularProgress size='6rem' color='inherit' />
            </div>

        ) : (
            item.map((item, i) => {
                return <section key={i} className={classes.itemDetailContainer}>
                    <ItemDetail cerveza={item} />
                </section>
            })
        )}
    </>
}