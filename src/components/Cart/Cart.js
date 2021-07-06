import React, { useState, useContext } from 'react';
import 'poppins-font';
import { makeStyles } from '@material-ui/core';
import { CartContext } from "../../context/CartContext";
import { cartStyle } from './CartStyle';
import { CartTable } from './components/CatTable/CartTable';
import { CartTotal } from './components/CartTotal/CartTotal';
import { CartEmpty} from './components/CartEmpty/CartEmpty';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { dataBase } from '../../Firebase/firebase';


const useStyles = makeStyles((theme) => cartStyle(theme));

export const Cart = () => {
    const classes = useStyles();
    const { items, subtotal, clear } = useContext(CartContext);
    const [idOrder, setIdOrder] = useState([]);

    const createOrder = (buyer) => {
        console.log('create order')
        console.log('buyer', buyer)
        const orders = dataBase.collection("orders");
        const newOrder = {
            buyer,
            items,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: subtotal
        }
        orders.add(newOrder).then(({ id }) => {
            setIdOrder(id);
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            console.log(idOrder)
        })

        const updateItem = dataBase.collection('cervezas').where(firebase.firestore.FieldPath.documentId(), 'in', items.map((item) => item.item.id))

        updateItem.get().then(querySnapshot => {
            const batch = dataBase.batch();
            const outOfStock = [];

            querySnapshot.docs.forEach((docSnapshot, idx) => {
                if (docSnapshot.data().stock >= items[idx].quantity) {
                    batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - items[idx].quantity });
                    clear();

                } else {
                    outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id });
                }
            })
            if (outOfStock.length === 0) {
                batch.commit().then(() => { })
            }else{
                console.log('no tenes stock')
            }
        })
    }

    return <section className={classes.container}>
        {items.length === 0 ? (<CartEmpty />) : (
            <>
                <CartTable items={items} />
                <CartTotal items={items} subtotal={subtotal} createOrder={createOrder} />
            </>
        )}
    </section>
}
