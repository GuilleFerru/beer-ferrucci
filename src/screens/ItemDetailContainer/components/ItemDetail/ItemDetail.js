import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core";
import { itemDetailStyle } from "./ItemDetailStyle";
import { ItemCount } from '../ItemCount/ItemCount';
import { useHistory } from "react-router-dom";
import { CartContext } from "../../../../context/CartContext";
import { ButtonGroup } from "../../../../components/commonComponents/ButtonGroup/ButtonGroup";
import { MyPopover } from "../../../../components/commonComponents/MyPopover/MyPopover"

const useStyles = makeStyles((theme) => itemDetailStyle(theme));

export const ItemDetail = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { cerveza } = props;
  const [maxQtyReached, setMaxQtyReached] = useState(false);
  const [click, setClick] = useState(false);
  const { itemsQty, maxItems, addItems } = useContext(CartContext);
  const divRef = React.useRef();

  const onAdd = qtyToBuy => {
    const totalItems = itemsQty + qtyToBuy;
    if (totalItems > maxItems) {
      setMaxQtyReached(true);
    } else {
      setClick(true);
      addItems({ item: cerveza, quantity: qtyToBuy });
    }
  };

  return <div className={classes.item} >
    <img src={cerveza.pictureUrl} alt={cerveza.description} />
    <div className={classes.itemText} ref={divRef}>
      <h1>{cerveza.title}</h1>
      <span>{cerveza.narrative}</span>
      <bdi>
        <p>${cerveza.price}</p>
      </bdi>
      {click ? (
        <ButtonGroup handleConfirm={() => history.push(`/cart`)} handleClose={() => history.push(`/`)} firstButton='Ir a Carrito' secondButton='Seguir Comprando' />
      ) : (
        <ItemCount stock={cerveza.stock} initial={cerveza.initial} addToCart={onAdd} />
      )}
      {maxQtyReached && <MyPopover divRef={divRef.current} texto={`Debe agregar menos de ${maxItems} items en el carrito`} />}
    </div>
  </div>
};


