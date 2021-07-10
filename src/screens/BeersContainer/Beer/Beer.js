import React from 'react';
import { makeStyles } from '@material-ui/core';
import { beerStyle } from './BeerStyle';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => beerStyle(theme));


export const Beer = ({ cerveza }) => {

    const classes = useStyles();

    return <div className={classes.container}>
            <div>
                <img src={cerveza.pictureUrl} alt={cerveza.description} />
            </div>
            <div className={classes.itemText}>
                <div>
                    <Typography variant="h3">{cerveza.title}</Typography>
                </div>
                <div>
                    <Typography variant="h4">{cerveza.description}</Typography>
                </div>
                <div>
                    <p><span>{cerveza.narrative}</span></p>
                </div>
            </div>
    </div>

}
