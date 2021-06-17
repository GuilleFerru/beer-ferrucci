import React from 'react';
import { makeStyles } from '@material-ui/core'
import { ItemCount } from '../ItemCount/ItemCount';
import { itemStyle } from './ItemStyle';


const useStyles = makeStyles((theme) => itemStyle(theme));

export const Item = cerveza => {
    const classes = useStyles();
    // const { cervezas } = props;

    return <div className={classes.items}>
                <img src={cerveza.pictureUrl} alt={cerveza.description} />
                <div className={classes.itemText}>
                    <h3>{cerveza.title}</h3>
                    <span>{cerveza.description} </span>
                    <bdi>
                    <p>${cerveza.price}</p>
                    </bdi>
                </div>

                <ItemCount stock={cerveza.stock} initial={cerveza.initial} />
            </div>

}