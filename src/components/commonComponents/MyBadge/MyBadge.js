import React, { useContext } from 'react';
import AddShoppingCartTwoToneIcon from '@material-ui/icons/AddShoppingCartTwoTone';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core';
import { myBadgeStyle } from './MyBadgeStyle';
import { CartContext } from '../../../context/CartContext';

const useStyles = makeStyles((theme) => myBadgeStyle(theme));

export const MyBadge = ({ qty }) => {
    const classes = useStyles();
    const { maxItems } = useContext(CartContext);
    return <Badge badgeContent={qty} max={maxItems} classes={{ badge: classes.customBadge }} anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
        overlap: 'rectangle',
    }}>
        <AddShoppingCartTwoToneIcon fontSize="large" />
    </Badge>
}


