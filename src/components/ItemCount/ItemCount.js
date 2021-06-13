import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { itemCountStyle } from './ItemCountStyle';
import { MyPopover } from '../commonComponents/MyPopover/MyPopover';
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
            <div className={classes.cantidadInput} ref={divRef}>
                <label>Qty:</label>
                <div className={classes.inputGroup}>
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







// <Snackbar
//                 open={true}
//                 autoHideDuration={20000}
//                 onClose={() => setShowSnack(false)}
//                 action={
//                     <IconButton
//                         arial-label='close'
//                         close='inherit'
//                         onClick={() => setShowSnack(false)}>
//                         <CloseIcon />
//                     </IconButton>
//                 }>
//                 <Alert onClose={() => setShowSnack(false)} severity="warning">
//                     Stock Maximo
//                 </Alert>
//             </Snackbar>