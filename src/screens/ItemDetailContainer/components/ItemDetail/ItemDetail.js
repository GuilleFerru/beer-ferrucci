import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { itemDetailStyle } from "./ItemDetailStyle";
import { ItemCount } from '../ItemCount/ItemCount';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => itemDetailStyle(theme));

export const ItemDetail = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { cerveza } = props;
  const [qty, setQty] = useState(0)
  const [click, setClick] = useState(false)

  console.log('cantidad ' + qty)

  const onAdd = value => { setQty(value); setClick(true); }

  return <>
    <div className={classes.item}>
      <img src={cerveza.pictureUrl} alt={cerveza.description} />
      <div className={classes.itemText}>
        <h1>{cerveza.title}</h1>
        <span>{cerveza.narrative}</span>
        <bdi>
          <p>${cerveza.price}</p>
        </bdi>
        {click ? (
          <div className={classes.buttonGroup}>
            <button onClick={() => history.push(`/cart?qty=${qty}`)}> Finalizar Compra </button>
            <button onClick={() => setClick(false)}> Cancelar Compra </button>
          </div>
        ) : (
          <ItemCount stock={cerveza.stock} initial={cerveza.initial} qty={qty} addToCart={onAdd} />
        )}
      </div>
    </div>
  </>
};
