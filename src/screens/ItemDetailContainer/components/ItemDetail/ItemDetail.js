import React from "react";
import { makeStyles } from "@material-ui/core";
import { itemDetailStyle } from "./ItemDetailStyle";

const useStyles = makeStyles((theme) => itemDetailStyle(theme));

export const ItemDetail = (cerveza) => {
  const classes = useStyles();
 
  return <>
      <div className={classes.item}>
        <img src={cerveza.pictureUrl} alt={cerveza.description} />
        <div className={classes.itemText}>
          <h1>{cerveza.title}</h1>
          <span>{cerveza.description} </span>
          <bdi>
            <p>${cerveza.price}</p>
          </bdi>
        </div>
      </div>
    </>
};
