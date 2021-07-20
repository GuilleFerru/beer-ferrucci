import React, { useState, useContext } from 'react';
import 'poppins-font';
import { makeStyles } from '@material-ui/core';
import { ButtonGroup } from '../../../commonComponents/ButtonGroup/ButtonGroup';
import { cartTotalStyle } from './CartTotalStyle';
import { CartContext } from "../../../../context/CartContext";
import { UserForm } from '../../../Form/UserForm';
import { DialogComponent } from '../../../commonComponents/Dialog/DialogComponent';


const useStyles = makeStyles((theme) => cartTotalStyle(theme));

export const CartTotal = ({ subtotal, createOrder }) => {
    const classes = useStyles();
    const [openDialog, setOpenDialog] = useState(false);
    const { clear } = useContext(CartContext);

    const closeDialog = (value) => {
        setOpenDialog(value)
    }

    return <aside className={classes.cartAside}>
        <div className={classes.cartTotal}>
            <div>
                <h2>Total del carrito</h2>
            </div>
            {/* <div>
                <p>Subtotal</p>
                <span><bdi>$</bdi>{subtotal}</span>
            </div> */}
            {/* <div>
                <p>Envío</p>
                <span><bdi>$</bdi>0</span>
            </div> */}
            <div>
                <p>Total</p>
                <span><bdi>$</bdi>{subtotal}</span>
            </div>
        </div>
        <div>
            <DialogComponent open={openDialog}
                openDialog={setOpenDialog}
                title='Detalles de Facturación'
            >
                <UserForm closeDialog={closeDialog} createOrder={createOrder} />
            </DialogComponent>
            <ButtonGroup style={{ margin: 'auto' }} handleConfirm={e => setOpenDialog(true)}
                handleClose={clear}
                firstButton='Finalizar Compra'
                secondButton='Limpiar Carrito'

            />
        </div>
    </aside>
}
