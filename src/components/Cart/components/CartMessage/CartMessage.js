import React,{useState, useEffect} from 'react';
import 'poppins-font';
import { makeStyles } from '@material-ui/core';
import { cartMessageStyle } from './CartMessageStyle';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => cartMessageStyle(theme));

export const CartMessage = ({ idOrder} )=> {
    const classes = useStyles();
    const history = useHistory();
    const [text, setText] = useState('');

    const showText = () =>{
        if( idOrder.length !== 0){
            setText(`Se genero la orden de compra ${idOrder}`)
        }else{
            setText(`Tu Carrito Vacio`)
        }
        return text
    }

    useEffect (()=>{
        showText()
        console.log(idOrder)
    },[idOrder])

    return <div className={classes.cartEmptyContainer}>
        <p>{text}</p>
        <div className={classes.carEmptyButtom}>
            <button onClick={() => history.push(`/`)}> Volver al inicio </button>
        </div>
    </div>
}
