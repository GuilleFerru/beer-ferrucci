import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { itemCountStyle } from './ItemCountStyle';
import { MyPopover } from '../../../../components/commonComponents/MyPopover/MyPopover';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import AddShoppingCartTwoToneIcon from '@material-ui/icons/AddShoppingCartTwoTone';


const useStyles = makeStyles((theme) => itemCountStyle(theme));

export const ItemCount = (props) => {
    const classes = useStyles();
    const { stock, initial } = props;
    const [count, setCount] = useState(initial);

    const divRef = React.useRef();

    const onAdd = (e) => {
        console.log(`El usuario selecciono ${count} birras`)
    }

    const removeItem = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }

    const addItem = (e) => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    return <>
        <div className={classes.itemCountContainer}>
            <div className={classes.cantidadInput} >
                <label>Qty:</label>
                <div className={classes.inputGroup} ref={divRef}>
                    <div className={classes.inputGroupPrepend}>
                        <button onClick={removeItem}>
                            <RemoveRoundedIcon fontSize='small' />
                        </button>
                    </div>
                    <span>{count}</span>
                    <div className={classes.inputGroupAppend}>
                        <button onClick={addItem}>
                            <AddRoundedIcon fontSize='small' />
                        </button>
                    </div>
                </div>
            </div>
            <button disabled={count === 0} onClick={onAdd}>
                <AddShoppingCartTwoToneIcon />
                AÑADIR AL CARRITO
            </button>
            {count === stock && <MyPopover divRef={divRef.current} texto='Stock Maximo' />}
        </div>
    </>

}
