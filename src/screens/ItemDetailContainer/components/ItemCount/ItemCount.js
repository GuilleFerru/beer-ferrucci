import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { itemCountStyle } from './ItemCountStyle';
import { MyPopover } from '../../../../components/commonComponents/MyPopover/MyPopover';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import AddShoppingCartTwoToneIcon from '@material-ui/icons/AddShoppingCartTwoTone';


const useStyles = makeStyles((theme) => itemCountStyle(theme));

export const ItemCount = ({ stock, initial, addToCart }) => {
    const classes = useStyles();
    const [count, setCount] = useState(initial);
    const divRef = React.useRef();

    return <div className={classes.itemCountContainer}>
        <div className={classes.cantidadInput} >
            <label>Qty:</label>
            <div className={classes.inputGroup} ref={divRef}>
                <div className={classes.inputGroupPrepend}>
                    <button onClick={() => count === initial ? setCount(count) : setCount(count - 1)}>
                        <RemoveRoundedIcon fontSize='small' />
                    </button>
                </div>
                <span>{count}</span>
                <div className={classes.inputGroupAppend}>
                    <button onClick={() => count === stock ? setCount(count) : setCount(count + 1)}>
                        <AddRoundedIcon fontSize='small' />
                    </button>
                </div>
            </div>
        </div>
        <button disabled={count === 0} onClick={() => addToCart(count)}>
            <AddShoppingCartTwoToneIcon />
            AÑADIR AL CARRITO
        </button>
        {count === stock && <MyPopover divRef={divRef.current} texto='Stock Maximo' />}
    </div>


}
