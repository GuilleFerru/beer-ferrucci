import React, { useContext } from 'react';
import 'poppins-font';
import { CartContext } from "../../../../context/CartContext";
import { makeStyles } from '@material-ui/core';
import { cartTableStyle } from './CartTableStyle';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => cartTableStyle(theme));

export const CartTable = ({ items }) => {
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
