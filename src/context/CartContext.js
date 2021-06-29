import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartComponentContext = props => {

    const [items, setItems] = useState([])
    const [subtotal, setSubTotal] = useState(0);


    const addItems = order => {
        const totalPrice = order.item.price * order.quantity;
        setSubTotal(subtotal + totalPrice)
        if (items.find(item => item.item.id === order.item.id)) {
            const updateItem = items.map((item) => {
                const totalQty = item.quantity + order.quantity;
                if (item.item.id === order.item.id) {
                    return { ...item, quantity: totalQty }
                }
                return item
            })
            setItems(updateItem)
        } else {
            setItems(orders => [...orders, order])
        }
    }

    const removeItems = id => {
        const removePrice = items.find(item => item.item.id === id);
        setSubTotal(subtotal - (removePrice.item.price*removePrice.quantity));
        setItems(items.filter((item) => item.item.id !== id));
    }

    const clear = () => { 
        setItems([]);
        setSubTotal(0);
    }

    return <CartContext.Provider value={{ addItems, removeItems, subtotal, clear, items }}>
        {props.children}
    </CartContext.Provider>

}