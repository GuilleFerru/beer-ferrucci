import React from 'react';
import { Item } from '../Item/Item';


export const ItemList = (props) => {
    const { cervezas } = props;
    return <>
            {cervezas.map((cerveza,i) => {
            return <div key={i}> 
                <Item  {...cerveza} />
            </div>
        })
    }
    </>
}