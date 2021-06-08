import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { itemCountStyle } from './ItemCountStyle';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import AddShoppingCartTwoToneIcon from '@material-ui/icons/AddShoppingCartTwoTone';


const useStyles = makeStyles((theme) => itemCountStyle(theme));

export const ItemCount = (props) => {
    const classes = useStyles();
    const { stock, initial } = props;
    const [count, setCount] = useState(initial);
    const [buttonToggle, setButtonToggle] = useState(false);

    const onAdd = (e) => {
        if (count > 0 && count <= stock) {
            console.log(`El usuario selecciono ${count} birras`)
        }
    }

    const removeItem = () => {
        if (count !== 0) {
            setCount(count - 1)
            if (count === 1) {
                setButtonToggle(true)
            }
        }
    }

    const addItem = () => {
        if (count !== stock) {
            setCount(count + 1)
            setButtonToggle(false)
        }
    }

    return <section>
        <div className={classes.itemCountContainer}>
            <div className={classes.cantidadInput}>
                <label>Qty:</label>
                <div className={classes.inputGroup}>
                    <div className={classes.inputGroupPrepend}>
                        <button onClick={e => removeItem()}>
                            <RemoveRoundedIcon fontSize='small' />
                        </button>

                    </div>
                    <span>{count}</span>
                    <div className={classes.inputGroupAppend}>
                        <button onClick={e => addItem()}>
                            <AddRoundedIcon fontSize='small' />
                        </button>
                    </div>
                </div>
            </div>
            <button disabled={buttonToggle} onClick={e => count === 0 ? undefined : onAdd()}>
                <AddShoppingCartTwoToneIcon />
                AÑADIR AL CARRITO
                </button>
            {count === 10 && <h5>Stock Maximo</h5>}
        </div>
    </section>

}