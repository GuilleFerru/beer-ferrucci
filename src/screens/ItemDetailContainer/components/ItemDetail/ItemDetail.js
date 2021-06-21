import React from "react";
import { makeStyles } from "@material-ui/core";
import { itemDetailStyle } from "./ItemDetailStyle";
import { ItemCount } from "../ItemCount/ItemCount";

const useStyles = makeStyles((theme) => itemDetailStyle(theme));

export const ItemDetail = (props) => {
    const classes = useStyles();
    const { cerveza } = props;

    return <>
        <div className={classes.item}>
            <img src={cerveza.pictureUrl} alt={cerveza.description} />
            <div className={classes.itemText}>
                <h1>{cerveza.title}</h1>
                <span>{cerveza.narrative} </span>
                <bdi>
                    <p>${cerveza.price}</p>
                </bdi>
                <ItemCount stock={cerveza.stock} initial={cerveza.initial} />
            </div>

        </div>
    </>
};