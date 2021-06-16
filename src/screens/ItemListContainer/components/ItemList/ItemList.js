import React from 'react';
// import { makeStyles } from '@material-ui/core'
import { Item } from '../Item/Item';
// import { itemListStyle } from './ItemListStyle'

// const useStyles = makeStyles((theme) => itemListStyle(theme));

export const ItemList = (props) => {
    // const classes = useStyles();
    const { cervezas } = props;
    

    return <>
            {cervezas.map((cerveza,i) => {
            return <div key={i}> 
                <Item  {...cerveza} />
            </div>
        })
    }
    </>
}