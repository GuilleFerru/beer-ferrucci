import React, { useState, useContext } from 'react';
import 'poppins-font';
import { makeStyles } from '@material-ui/core';
import { ButtonGroup } from '../../../commonComponents/ButtonGroup/ButtonGroup';
import { cartTotalStyle } from './CartTotalStyle';
import { CartContext } from "../../../../context/CartContext";
import { UserForm } from '../../../Form/UserForm';
import { DialogComponent } from '../../../commonComponents/Dialog/DialogComponent';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => cartTotalStyle(theme));

export const CartTotal = ({ total, createOrder }) => {
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
            <Divider/>
            <div>
                <p>Total</p>
                <span><bdi>$</bdi>{total}</span>
            </div>
            <Divider/>
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
