import React from 'react';
import '@fontsource/montserrat/700.css';
import { makeStyles, Typography } from '@material-ui/core';
import { beerStyle } from './BeerStyle';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => beerStyle(theme));


export const Beer = ({ cerveza }) => {

    const classes = useStyles();

    return <div className={classes.container}>
        <Link to={`/item/${cerveza.id}`}>
            <img src={cerveza.pictureUrl} alt={cerveza.description} />
            <div className={classes.itemText}>
                <div>
                    <Typography variant="h4">{cerveza.title}</Typography>
                </div>
                <div>
                    <Typography variant="h5">{cerveza.description}</Typography>
                </div>
                <div>
                    <p><span>{cerveza.narrative}</span></p>
                </div>
            </div>
        </Link>
    </div>

}
