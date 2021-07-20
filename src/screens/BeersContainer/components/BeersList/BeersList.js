import React from 'react';
import { Beer } from '../Beer/Beer';


export const BeersList = (props) => {
    const { cervezas } = props;
    return <>
        {cervezas.map((cerveza, i) => {
            return <Beer key={i} cerveza={cerveza} />
        })
        }
    </>
}