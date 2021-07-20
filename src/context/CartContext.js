import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartComponentContext = props => {

    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [itemsQty, setItemsQty] = useState(0);
    const maxItems = 999;

    const calculatePrice = (price, qty) => {
        return price * qty;
    }

    const addItems = order => {
        setTotal(total + calculatePrice(order.item.price, order.quantity));
        setItemsQty(itemsQty + order.quantity);
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
        setTotal(total - calculatePrice(itemToRemove.item.price, itemToRemove.quantity));
        setItemsQty(itemsQty - itemToRemove.quantity)
        setItems(items.filter((item) => item.item.id !== id));
    }

    const clear = () => {
        setItems([]);
        setTotal(0);
        setItemsQty(0);
    }

    return <CartContext.Provider value={{ addItems, removeItems, total, clear, items, itemsQty, maxItems }}>
        {props.children}
    </CartContext.Provider>

}