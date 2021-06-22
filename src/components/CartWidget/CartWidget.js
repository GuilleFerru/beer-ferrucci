import React from 'react';
import 'poppins-font';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { cartWidgetStyle } from './CartWidgetStyle';
import AddShoppingCartTwoToneIcon from '@material-ui/icons/AddShoppingCartTwoTone';


const useStyles = makeStyles((theme) => cartWidgetStyle(theme));

export const CartWidget = () => {
    const classes = useStyles();

    return <>
        <div className={classes.logoCarrito}>
            <Link to={`/cart`}>
                <div className={classes.carritoNombre}>
                    <AddShoppingCartTwoToneIcon fontSize="large" />
                    <p className={classes.parrafoCarrito}>Carrito</p>
                </div>
            </Link>
            <span className={classes.carritoPrecio}>
                <bdi>
                    <span>$</span>0.00
                </bdi>
            </span>
            <div className={classes.popupCarroVacio}>
                <div className={classes.containerPopupCarroVacio}>
                    <p>No hay productos en el carrito</p>
                </div>
            </div>
        </div>
    </>

}