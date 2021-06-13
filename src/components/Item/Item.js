import React from 'react';
import { makeStyles } from '@material-ui/core'
import { ItemCount } from '../ItemCount/ItemCount';
import { itemStyle } from './ItemStyle';


const useStyles = makeStyles((theme) => itemStyle(theme));

export const Item = props => {
    const classes = useStyles();
    const { cervezas } = props;

    return <>
        {cervezas.map((cerveza, i) => {
            return <div className={classes.items} key={i}>
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
        })}


    </>
}