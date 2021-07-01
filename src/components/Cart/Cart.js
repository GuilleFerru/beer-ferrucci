import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import { CartContext } from "../../context/CartContext";
import { cartStyle } from './CartStyle';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from "react-router-dom";
// import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => cartStyle(theme));


const CartTotal = ({ subtotal }) => {
    const classes = useStyles();
    const history = useHistory();
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


        <div className={classes.buttonGroup}>
            <button onClick={() => history.push(`/cart`)}>Finalizar Compra </button>
            <button onClick={clear}> Cancelar Compra </button>
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
        <div className={classes.buttonGroup}>
            <button onClick={() => history.push(`/`)}> Volver al inicio </button>
        </div>
    </div>
}


export const Cart = () => {
    const classes = useStyles();
    const { items, subtotal } = useContext(CartContext);

    return <section className={classes.container}>
        {items.length === 0 ? (<EmptyCart />) : (
            <>
                <ProductTable items={items} />
                <CartTotal items={items} subtotal={subtotal} />
            </>
        )}
    </section>
}
