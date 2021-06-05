import React from 'react';
import 'poppins-font';
import {makeStyles} from '@material-ui/core';
import AddShoppingCartTwoToneIcon from '@material-ui/icons/AddShoppingCartTwoTone';
import {cartWidgetStyle} from './CartWidgetStyle';

const useStyles = makeStyles((theme) => cartWidgetStyle(theme));

export const CartWidget = () => {
    const classes = useStyles();

    return <>
        <div className={classes.logoCarrito}>
            <a href="index.html" className="iconoCarrito">
                <div className={classes.carritoNombre}>
                    <AddShoppingCartTwoToneIcon fontSize="large" />
                    <p className={classes.parrafoCarrito}>Carrito</p>
                </div>
            </a>
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