import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartComponentContext = props => {

    const [items, setItems] = useState([])
    const [subtotal, setSubTotal] = useState(0);


    const addItems = order => {
        if (items.find(item => item.item.id === order.item.id)) {
            const updateItem = items.map((item) => {
                const totalQty = item.quantity + order.quantity;
                if (item.item.id === order.item.id) {
                    return { ...item, quantity: totalQty }
                } 
                return item
            })
            setItems(updateItem)
            sumaSubtotal();
        } else {
            setItems(orders => [...orders, order])
            console.log(items)
            sumaSubtotal();
        }
    }

    const removeItems = id => setItems(items.filter((item) => item.item.id !== id))

    const clear = () =>{setItems([])}

    const sumaSubtotal = () =>{
        console.log(subtotal)
        // setSubTotal(subtotal*0)
        console.log(subtotal)
        items.map((item)=>{
            setSubTotal(subtotal + (item.quantity * item.item.price));
            return subtotal;
        })

    }

    // useEffect(() => {
    //     console.log(items)
    // }, [items])


    return <CartContext.Provider value={{ addItems,removeItems, sumaSubtotal, subtotal, clear, items}}>
        {props.children}
    </CartContext.Provider>

}