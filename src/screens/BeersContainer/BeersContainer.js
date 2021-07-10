import React, { useState, useEffect } from 'react';
import 'poppins-font';
import { dataBase } from '../../Firebase/firebase';
import { makeStyles } from '@material-ui/core';
import { beersContainerStyle } from './BeersContainerStyle';
import CircularProgress from '@material-ui/core/CircularProgress';
import { BeersList } from './components/BeersList/BeersList';

const useStyles = makeStyles((theme) => beersContainerStyle(theme));

export const BeersContainer = () => {
    const classes = useStyles();
    const [cervezas, setCervezas] = useState([]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        const itemCollection = dataBase.collection("cervezas");

        itemCollection.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log('No results!')
                return;
            }
            setCervezas(querySnapshot.docs.map(doc => { return { ...doc.data(), id: doc.id } }))
        }).catch((error) => {
            console.log("Error getting document:", error);
            return;
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    const filterByCategory = listOfCervezas => { return listOfCervezas.filter(cerveza => cerveza.category === 'beerBottle')  }

    return <>
        {loading ? (
            <div className={classes.preloaderContainer}>
                <CircularProgress size='6rem' color='inherit' />
            </div>
        ) : (
            <section className={classes.section} >
                <BeersList cervezas={filterByCategory(cervezas)}/>
            </section>
        )}
    </>
}