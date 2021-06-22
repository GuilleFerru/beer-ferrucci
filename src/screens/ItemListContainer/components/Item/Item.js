import React from 'react';
import { makeStyles } from '@material-ui/core'
import { itemStyle } from './ItemStyle';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => itemStyle(theme));

export const Item = cerveza => {
    const classes = useStyles();

    return <div className={classes.items}>
        <Link to={`/item/${cerveza.id}`}>
            <img src={cerveza.pictureUrl} alt={cerveza.description} />
            <div className={classes.itemText}>
                <h3>{cerveza.title}</h3>
                <span>{cerveza.description} </span>
                <bdi>
                    <p>${cerveza.price}</p>
                </bdi>
            </div>
        </Link >
    </div>

}