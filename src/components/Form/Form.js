import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core';
import { formStyle } from './FormStyle';

const useStyles = makeStyles((theme) => formStyle(theme));

export const UseForm = (initialFValues) => {

    const [values, setValues] = useState(initialFValues);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }



    return {
        values,
        setValues,
        handleChange
    }
}

export const Form = (props) => {
    const classes = useStyles();

    return <form className={classes.container} autoComplete="off">
        {props.children}
    </form>


}
