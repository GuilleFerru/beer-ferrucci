import React from 'react';
import AddShoppingCartTwoToneIcon from '@material-ui/icons/AddShoppingCartTwoTone';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core';
import { myBadgeStyle } from './MyBadgeStyle';



const useStyles = makeStyles((theme) => myBadgeStyle(theme));


export const MyBadge = ({ qty }) => {
    const classes = useStyles();

    return <Badge badgeContent={qty} classes={{ badge: classes.customBadge }} anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
        overlap:'rectangle'
    }}>
        <AddShoppingCartTwoToneIcon fontSize="large" />
    </Badge>
}


