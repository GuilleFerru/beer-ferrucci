import React, { useEffect, useState } from 'react';
import { dataBase } from '../../Firebase/firebase';
import { itemDetailContainerStyle } from './ItemDetailContainerStyle';
import { ItemDetail } from './components/ItemDetail/ItemDetail';
import 'poppins-font';
import { makeStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useParams } from 'react-router-dom';


const useStyles = makeStyles((theme) => itemDetailContainerStyle(theme));

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(cervezaData), 2000)
// })

export const ItemDetailContainer = () => {
    const classes = useStyles();
    const [item, setItem] = useState([]);
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     promise.then((data) => {
    //         const dataFiltrada = data.filter(cerveza => cerveza.id === id);
    //         setItem(dataFiltrada)
    //     }).catch(() => <Redirect to={'/*'} />)
    // }, [id])

    useEffect(() => {
        const itemCollection = dataBase.collection("cervezas");
        const item = itemCollection.doc(id)
        item.get().then((doc) => {
            if (!doc.exists) {
                return;
            }
            setItem([{ id: doc.id, ...doc.data() }])
        }).catch((error) => {
            console.log("Error getting document:", error);
        }).finally(() => {
            setLoading(false)
        });
    }, [id])

    // useEffect(() => {
    //     console.log(item)
    // }, [item])



    return <>
        {loading ? (
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