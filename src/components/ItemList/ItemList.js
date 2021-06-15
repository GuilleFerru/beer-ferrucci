import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core'
import { Item } from '../Item/Item';
import { itemListStyle } from './ItemListStyle'
import CircularProgress from '@material-ui/core/CircularProgress';

const mockCall = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: 1, title: 'Dorada Pampeana', description: 'Cerveza Dorada de suave sabor', price: '110', pictureUrl: '/img/dorada-pampeana.png', initial: 1, stock:30 },
                { id: 2, title: 'Irish Red', description: 'Cerveza Roja de frutado sabor', price: '120', pictureUrl: '/img/irish-red.png', initial: 1, stock: 80 },
                { id: 3, title: 'IPA', description: 'Cerveza de intenso sabor', price: '130', pictureUrl: '/img/ipa.png', initial: 1, stock: 50 },
                { id: 4, title: 'Saison', description: 'Cerveza Rubia con frutillas', price: '135', pictureUrl: '/img/oatmeal-black.png', initial: 1, stock: 20 },
                { id: 5, title: 'OatMeal Stout', description: 'Cerveza Negra de trigo', price: '135', pictureUrl: '/img/saison.png', initial: 1, stock: 20 },
                { id: 6, title: 'SixPack', description: 'SixPack de nuestras mejores cervezas', price: '980', pictureUrl: '/img/six-pack.png', initial: 1, stock: 5 },
            ])
        }, 2000);
    })
}



const useStyles = makeStyles((theme) => itemListStyle(theme));

export const ItemList = () => {
    const classes = useStyles();
    const [cervezas, setCervezas] = useState([]);

    useEffect(() => {
        mockCall().then(data => {
            setCervezas(data);

        })
    }, [])


    return <>
        {cervezas.length === 0 ? (
            <div className={classes.preloaderContainer}>
                <CircularProgress size='6rem' color='inherit'/>
            </div>

        ) : (
            <div className={classes.gridContainer}>
                <Item cervezas={cervezas} />
            </div>
        )}

    </>
}