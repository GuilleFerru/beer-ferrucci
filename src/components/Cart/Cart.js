import React, { useState, useContext } from 'react';
import 'poppins-font';
import { makeStyles } from '@material-ui/core';
import { CartContext } from "../../context/CartContext";
import { cartStyle } from './CartStyle';
import { DialogComponent } from '../commonComponents/Dialog/DialogComponent';
import { Form } from '../Form/Form';
import { ButtonGroup } from '../commonComponents/ButtonGroup/ButtonGroup';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from "react-router-dom";
// import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => cartStyle(theme));


const CartTotal = ({ subtotal }) => {
    const classes = useStyles();
    const [openDialog, setOpenDialog] = useState(false);
    const { clear } = useContext(CartContext);
    

    return <aside className={classes.cartAside}>
        <div className={classes.cartTotal}>
            <div>
                <h2>Total del carrito</h2>
            </div>
            <div>
                <p>Subtotal</p>
                <span><bdi>$</bdi>{subtotal}</span>
            </div>
            <div>
                <p>Envío</p>
                <span><bdi>$</bdi>0</span>
            </div>
            <div>
                <p>Total</p>
                <span><bdi>$</bdi>{subtotal}</span>
            </div>
        </div>
        <div>
        <DialogComponent open={openDialog}
            openDialog={setOpenDialog}
            handleConfirm={() => setOpenDialog(false)}
            closeDialog={() => setOpenDialog(false)}
            title='Detalles de Facturación'
            firstButton='Cancelar'
            secondButton='Aceptar'
        >
            <Form/>
        </DialogComponent>
            <ButtonGroup style={{ margin: 'auto' }} handleConfirm={e => setOpenDialog(true)}
                handleClose={clear}
                firstButton='Finalizar Compra'
                secondButton='Limpiar Carrito'
            />
        </div>
    </aside>
}


const ProductTable = ({ items }) => {
    const classes = useStyles();
    const { removeItems } = useContext(CartContext);

    return <div>
        <div>
            <table className={classes.tableShop}>
                <thead>
                    <tr>
                        <th></th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, i) => {
                        // setTotal(total + (item.quantity * item.item.price));
                        return <tr key={i}>
                            <td>  <img src={item.item.pictureTwoUrl} alt={item.item.description} /></td>
                            <td>{item.item.title}</td>
                            <td>{item.item.price}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <bdi>
                                    <span>$</span>{item.quantity * item.item.price}
                                </bdi>
                            </td>
                            <td>
                                <button onClick={e => removeItems(item.item.id)}><CloseIcon /></button>
                            </td>
                        </tr>
                    })
                    }
                </tbody>
            </table>
        </div>
    </div>
}


const EmptyCart = () => {
    const classes = useStyles();
    const history = useHistory();
    return <div className={classes.emptyCartContainer}>
        <p>Tu carrito esta vacio</p>
        <div className={classes.carEmptyButtom}>
            <button onClick={() => history.push(`/`)}> Volver al inicio </button>
        </div>
    </div>
}


export const Cart = () => {
    const classes = useStyles();
    const { items, subtotal } = useContext(CartContext);

    return <section className={classes.container}>
        {items.length !== 0 ? (<EmptyCart />) : (
            <>
                <ProductTable items={items} />
                <CartTotal items={items} subtotal={subtotal} />
            </>
        )}
    </section>
}
