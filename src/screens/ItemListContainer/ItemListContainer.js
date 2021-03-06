import React, { useState, useEffect } from 'react';
import { dataBase } from '../../Firebase/firebase';
import { useParams,Redirect } from 'react-router-dom';
import { itemListContainerStyle } from './ItemListContainerStyle';
import { ItemList } from './components/ItemList/ItemList';
import 'poppins-font';
import { makeStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => itemListContainerStyle(theme));

export const ItemListContainer = () => {
    const classes = useStyles();
    const { categoryId } = useParams();
    const [cervezas, setCervezas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        let itemCollection;
        if (categoryId) {
            itemCollection = dataBase.collection("cervezas").where('category', '==', categoryId)
        } else {
            itemCollection = dataBase.collection("cervezas");
        }
        itemCollection.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                setError(true);
            }
            setCervezas(querySnapshot.docs.map(doc => { return { ...doc.data(), id: doc.id } }))
        }).catch((error) => {
            setError(true);
        }).finally(() => {
            setLoading(false)

        })
    }, [categoryId])

    return <>
        {loading ? (
            <div className={classes.preloaderContainer}>
                <CircularProgress size='6rem' color='inherit' />
            </div>
        ) : (
            <section className={classes.itemListContainer}>
                <ItemList cervezas={cervezas} />
            </section>
        )}
        {error ? <Redirect to={'*'} /> : ''}
    </>
}