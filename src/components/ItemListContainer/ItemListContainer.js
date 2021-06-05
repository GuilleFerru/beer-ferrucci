import React from 'react';
import 'poppins-font';
import {makeStyles, Typography } from '@material-ui/core';
import {itemListContainerStyle} from './ItemListContainerStyle';

const useStyles = makeStyles((theme) => itemListContainerStyle(theme));

export const ItemListContainer = props => {
    const { greeting } = props;
    const classes = useStyles();
    return <>
        <section>
            <div className={classes.container}>
                <Typography variant='h5'>{greeting}</Typography>
            </div>

        </section>

    </>
}