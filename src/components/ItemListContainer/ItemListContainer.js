import React from 'react';
import 'poppins-font';
import {makeStyles} from '@material-ui/core';
import {itemListContainerStyle} from './ItemListContainerStyle';

import {ItemList} from '../ItemList/ItemList';

const useStyles = makeStyles((theme) => itemListContainerStyle(theme));

export const ItemListContainer = () => {
    const classes = useStyles();

    return <>
        <section className={classes.itemListContainer}>
            <ItemList/>
        </section>

    </>
}