import React from 'react';
import 'poppins-font';
import {makeStyles, Typography } from '@material-ui/core';
import {itemListContainerStyle} from './ItemListContainerStyle';
import {ItemCount} from '../ItemCount/ItemCount';

const useStyles = makeStyles((theme) => itemListContainerStyle(theme));

export const ItemListContainer = props => {
    const { greeting } = props;
    const classes = useStyles();
    return <>
        <section>
            <div className={classes.container}>
                <Typography variant='h5'>{greeting}</Typography>
                <ItemCount stock={10} initial={1}/>
            </div>

        </section>

    </>
}