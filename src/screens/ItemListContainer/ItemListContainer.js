import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { itemListContainerStyle } from './ItemListContainerStyle';
import { cervezaData } from '../Services/CervezaData';
import { ItemList } from './components/ItemList/ItemList';
import 'poppins-font';
import { makeStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => itemListContainerStyle(theme));

const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(cervezaData))
})

export const ItemListContainer = () => {
    const classes = useStyles();
    const { category } = useParams();
    const [cervezas, setCervezas] = useState([]);
    

    useEffect(() => {
        promise.then(data => { setCervezas(data) }).catch(() => <Redirect to={'/*'} />)
    }, [])


    const filterByCategory = listOfCervezas => { return category === undefined ? listOfCervezas : listOfCervezas.filter(cerveza => cerveza.category === category) }

    return <>
        {cervezas.length === 0 ? (
            <div className={classes.preloaderContainer}>
                <CircularProgress size='6rem' color='inherit' />
            </div>

        ) : (
            <section className={classes.itemListContainer}>
                <ItemList cervezas={filterByCategory(cervezas)} />
            </section>
        )}
    </>
}