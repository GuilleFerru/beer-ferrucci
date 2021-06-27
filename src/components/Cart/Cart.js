import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { CartContext } from "../../context/CartContext";
import { cartStyle } from './CartStyle';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from "react-router-dom";
// import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => cartStyle(theme));


export const Cart = () => {
    const classes = useStyles();
    const history = useHistory();
    const { items, removeItems, clear, sumaSubtotal,subtotal } = useContext(CartContext);
    
    useEffect(()=>{sumaSubtotal()},[])



    return <section className={classes.container}>
        <div>
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
        <aside className={classes.cartAside}>
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
    </section>
}