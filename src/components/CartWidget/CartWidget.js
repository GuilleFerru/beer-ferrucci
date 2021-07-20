import React, { useContext } from 'react';
import { CartContext } from "../../context/CartContext";
import 'poppins-font';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { cartWidgetStyle } from './CartWidgetStyle';
import { MyBadge } from '../commonComponents/MyBadge/MyBadge';


const useStyles = makeStyles((theme) => cartWidgetStyle(theme));

export const CartWidget = () => {
    const classes = useStyles();
    const { itemsQty, total } = useContext(CartContext);

    return <div className={classes.logoCarrito}>
        <Link to={`/cart`}>
            <div className={classes.carritoNombre}>
                <MyBadge qty={itemsQty} />
                <p className={classes.parrafoCarrito}>Carrito</p>
            </div>
        </Link>
        <span className={classes.carritoPrecio}>
            <bdi>
                <span>$</span>{total}
            </bdi>
        </span>
    </div>


}