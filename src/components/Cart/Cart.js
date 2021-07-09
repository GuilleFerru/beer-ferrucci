import React, { useState, useContext } from 'react';
import 'poppins-font';
import { makeStyles } from '@material-ui/core';
import { CartContext } from "../../context/CartContext";
import { cartStyle } from './CartStyle';
import { CartTable } from './components/CatTable/CartTable';
import { CartTotal } from './components/CartTotal/CartTotal';
import { CartMessage } from './components/CartMessage/CartMessage';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { dataBase } from '../../Firebase/firebase';
import { Redirect } from 'react-router-dom';


const useStyles = makeStyles((theme) => cartStyle(theme));

export const Cart = () => {
    const classes = useStyles();
    const { items, subtotal, clear } = useContext(CartContext);
    const [idOrder, setIdOrder] = useState([]);
    const [buyerName, setBuyerName] = useState('');
    const [error, setError] = useState(false);

    const createOrder = async (buyer) => {
        const orders = dataBase.collection("orders");
        const newOrder = {
            buyer,
            items,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: subtotal
        }
        try {
            const { id } = await orders.add(newOrder);
            setIdOrder(id);
            setBuyerName(buyer.name + ' ' + buyer.lastname)
        } catch (err) {
            setError(true);
        }

        const updateItem = dataBase.collection('cervezas').where(firebase.firestore.FieldPath.documentId(), 'in', items.map((item) => item.item.id));
        const databaseQuery = await updateItem.get();
        const batch = dataBase.batch();
        const outOfStock = [];

        databaseQuery.docs.forEach((docSnapshot, idx) => {
            if (docSnapshot.data().stock >= items[idx].quantity) {
                batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - items[idx].quantity });
            } else {
                outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id });
            }
        })
        if (outOfStock.length === 0) {
            await batch.commit()
        } else {
            setError(true);
        }
        clear();
    }


    return <section className={classes.container}>
        {idOrder.length > 0 ? (<CartMessage text={`${buyerName} se genero la orden de compra ${idOrder}. Gracias!`} />) :
            (items.length === 0 && idOrder.length === 0 ? (<CartMessage text={`Su carrito no tiene productos`} />) : (
                <>
                    <CartTable items={items} />
                    <CartTotal items={items} subtotal={subtotal} createOrder={createOrder} />
                </>
            ))}
        {error ? <Redirect to={'*'} /> : ''}
    </section>
}
