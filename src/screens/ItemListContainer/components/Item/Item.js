import React from 'react';
import { makeStyles } from '@material-ui/core'
import { itemStyle } from './ItemStyle';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => itemStyle(theme));

export const Item = cerveza => {
    const classes = useStyles();

    return <div className={classes.items}>
        <img src={cerveza.pictureUrl} alt={cerveza.description} />
        <div className={classes.itemText}>
            <Link to={`/item/${cerveza.id}`}>
                <h3>{cerveza.title}</h3>
                <span>{cerveza.description} </span>
                <bdi>
                    <p>${cerveza.price}</p>
                </bdi>
            </Link>
        </div>
    </div>

}