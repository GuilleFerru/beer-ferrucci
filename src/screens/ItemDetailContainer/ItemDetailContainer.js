import React, { useEffect, useState } from 'react';
import 'poppins-font';
import {makeStyles} from '@material-ui/core';
import {itemDetailContainerStyle} from './ItemDetailContainerStyle';
import {ItemDetail} from './components/ItemDetail/ItemDetail';
import CircularProgress from '@material-ui/core/CircularProgress';

const mockCall = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: 1, title: 'Dorada Pampeana', description: 'Una cerveza ligera, refrescante y delicadamente balanceada. Elaborada a partir de maltas claras que le otorgan un color dorado y un agradable aroma a cereal. La cerveza mas pedida de la casa. ', price: '110.00', pictureUrl: '/img/dorada-pampeana.png', initial: 1, stock:30 }
            ])
        }, 20);
    })
}

const useStyles = makeStyles((theme) => itemDetailContainerStyle(theme));

export const ItemDetailContainer = () => {
    const classes = useStyles();
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        mockCall().then(data => {
            setProducto(data);

        })
    }, [])

    return <>
        {producto.length === 0 ? (
            <div className={classes.preloaderContainer}>
                <CircularProgress size='6rem' color='inherit'/>
            </div>

        ) : (
            <div className={classes.itemDetailContainer}>
                <ItemDetail producto={producto} />
            </div>
        )}

    </>
}