import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartComponentContext = props => {

    const [items, setItems] = useState([])
    const [subtotal, setSubTotal] = useState(0);
    const [itemsQty, setItemsQty] = useState(0);


    const calculatePrice = (price, qty) => {
        return price * qty;
    }

    const addItems = order => {
        setSubTotal(subtotal + calculatePrice(order.item.price, order.quantity));
        setItemsQty(itemsQty + order.quantity)
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
        const itemToRemove = items.find(item => item.item.id === id);
        setSubTotal(subtotal - calculatePrice(itemToRemove.item.price, itemToRemove.quantity));
        setItemsQty(itemsQty - itemToRemove.quantity)
        setItems(items.filter((item) => item.item.id !== id));
    }

    const clear = () => {
        setItems([]);
        setSubTotal(0);
        setItemsQty(0);
    }

    return <CartContext.Provider value={{ addItems, removeItems, subtotal, clear, items, itemsQty }}>
        {props.children}
    </CartContext.Provider>

}