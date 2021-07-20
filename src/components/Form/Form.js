import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core';
import { formStyle } from './FormStyle';

const useStyles = makeStyles((theme) => formStyle(theme));

export const UseForm = (initialFValues, validateOnChange = false, validate) => {

    const [values, setValues] = useState(initialFValues);
    const [errors, setErrors] = useState({});

    const handleCountry = e => {
        const { name, value } = e.target;
        if (value !== 'AR') {
            setValues({
                ...values,
                [name]:value,
                'province': 'other Country'
            })
        } else {
            setValues({
                ...values,
                [name]:value,
            })
        }
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
        if (validateOnChange) {
            validate({ [name]: value })
        }
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleChange,
        handleCountry
    }
}

export const Form = (props) => {
    const classes = useStyles();
    return <form className={classes.container} autoComplete="off">
        {props.children}
    </form>


}
