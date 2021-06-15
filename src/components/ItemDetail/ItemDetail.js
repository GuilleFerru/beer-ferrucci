import React from 'react';
import { makeStyles } from '@material-ui/core'
import { itemDetailStyle } from './ItemDetailStyle';


const useStyles = makeStyles((theme) => itemDetailStyle(theme));

export const ItemDetail = props => {
    const classes = useStyles();
    const { producto } = props;

    console.log(props)
    return <>
        {producto.map((cerveza, i) => {
            return <div className={classes.item} key={i}>
                <img src={cerveza.pictureUrl} alt={cerveza.description} />
                <div className={classes.itemText}>
                    <h1>{cerveza.title}</h1>
                    <span>{cerveza.description} </span>
                    <bdi>
                    <p>${cerveza.price}</p>
                    </bdi>
                </div>
            </div>
        })}


    </>
}